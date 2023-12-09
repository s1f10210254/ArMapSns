import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { coordinatesAtom } from 'src/atoms/user';

const useLocation = () => {
  const [coordinates, setCoordinates] = useAtom(coordinatesAtom);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.geolocation !== null) {
      const watcher = navigator.geolocation.watchPosition((position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      return () => navigator.geolocation.clearWatch(watcher);
    }
  });
  return coordinates;
};

export default useLocation;
