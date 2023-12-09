import type { PostModel, UserModel } from 'commonTypesWithClient/models';
import { useCallback, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import type { GeolocationCoordinates } from 'src/utils/interface';
import { returnNull } from 'src/utils/returnNull';
import useLocation from './useLocation';

const usePosts = (user: UserModel) => {
  const [posts, setPosts] = useState<PostModel[] | null>(null);
  const [likesStatus, setLikesStatus] = useState<{ [key: string]: boolean }>({});

  const coordinates = useLocation();
  const getPosts = useCallback(async (coordinates: GeolocationCoordinates) => {
    if (coordinates.latitude === null || coordinates.longitude === null) return;
    const { latitude, longitude } = coordinates;
    const data = await apiClient.posts.$get({ query: { latitude, longitude } }).catch(returnNull);
    setPosts(data);
  }, []);

  const isLikeChecker = useCallback(
    async (postId: string) => {
      if (user === null) return;
      const isLike = await apiClient.likes.$get({ query: { postId, userId: user.id } });
      return isLike;
    },
    [user]
  );

  const updateLikesStatus = useCallback(async () => {
    if (!posts) return;
    const status: { [key: string]: boolean } = {};
    for (const post of posts) {
      const isLiked = await isLikeChecker(post.id);
      status[post.id] = isLiked !== undefined ? isLiked : false;
    }
    setLikesStatus(status);
  }, [posts, isLikeChecker]);

  const handleLike = useCallback(
    async (postId: string) => {
      if (user?.id === undefined || postId === undefined) return;

      const result = await apiClient.likes.$patch({
        body: { postId, userId: user.id },
      });

      setLikesStatus((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));
      setPosts((prevPosts) => {
        if (!prevPosts) return prevPosts;

        return prevPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, likeCount: result };
          } else {
            return post;
          }
        });
      });
    },
    [user?.id]
  );

  const deletePostContent = useCallback(
    async (postID: string) => {
      await apiClient.likes.$delete({ body: { postId: postID } }).catch(returnNull);
      await apiClient.myPost.$delete({ query: { postID } }).catch(returnNull);

      await getPosts(coordinates);
    },
    [getPosts, coordinates]
  );

  return { posts, likesStatus, getPosts, updateLikesStatus, handleLike, deletePostContent };
};
export default usePosts;
