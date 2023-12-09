import type { PostModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import type { GeolocationCoordinates } from 'src/utils/interface';
import { returnNull } from 'src/utils/returnNull';
type UpdateLikesStatusFunction = (data: PostModel[]) => Promise<void>;
const usePosts = (
  coordinates: GeolocationCoordinates,
  isFirstLoad: boolean,
  updateLikesStatus: UpdateLikesStatusFunction,
  setIsFirstLoad: (value: boolean) => void
) => {
  const [posts, setPosts] = useState<PostModel[] | null>(null);
  const fetchPosts = useCallback(async () => {
    if (coordinates.latitude === null || coordinates.longitude === null) return;
    const data = await apiClient.posts
      .$get({ query: { latitude: coordinates.latitude, longitude: coordinates.longitude } })
      .catch(returnNull);
    setPosts(data);

    if (isFirstLoad && data) {
      await updateLikesStatus(data);
      setIsFirstLoad(false);
    }
  }, [coordinates, isFirstLoad, updateLikesStatus, setIsFirstLoad]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return posts;
};

export default usePosts;
