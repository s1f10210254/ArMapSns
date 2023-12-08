import type { PostModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import type { GeolocationCoordinates } from 'src/utils/interface';
import { returnNull } from 'src/utils/returnNull';
type updateLikeStatusFunction = (posts: PostModel[]) => Promise<void>;
const usePosts = (
  coordinates: GeolocationCoordinates,
  updateLikeStatus: updateLikeStatusFunction
) => {
  const [posts, setPosts] = useState<PostModel[] | null>(null);

  const fetchAndUpdatePosts = useCallback(async () => {
    if (coordinates.latitude === null || coordinates.longitude === null) return;
    const data = await apiClient.posts
      .$get({ query: { latitude: coordinates.latitude, longitude: coordinates.longitude } })
      .catch(returnNull);
    setPosts(data);
    if (data) await updateLikeStatus(data);
  }, [coordinates, updateLikeStatus]);

  useEffect(() => {
    fetchAndUpdatePosts();
  }, [fetchAndUpdatePosts]);

  return [posts, fetchAndUpdatePosts];
};

export default usePosts;
