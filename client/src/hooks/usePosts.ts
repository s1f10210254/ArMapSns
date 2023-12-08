import type { PostModel } from 'commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import type { GeolocationCoordinates } from 'src/utils/interface';
import { returnNull } from 'src/utils/returnNull';

const usePosts = (coordinates: GeolocationCoordinates) => {
  const [posts, setPosts] = useState<PostModel[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (coordinates.latitude === null || coordinates.longitude === null) return;
      const data = await apiClient.posts
        .$get({ query: { latitude: coordinates.latitude, longitude: coordinates.longitude } })
        .catch(returnNull);

      setPosts(data);
    };

    fetchPosts();
  }, [coordinates.latitude, coordinates.longitude]);

  return posts;
};

export default usePosts;
