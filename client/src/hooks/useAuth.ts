import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { userAtom } from 'src/atoms/user';

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser !== null) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    } else {
      router.push('/login');
    }
  }, [setUser, router]);
  return user;
};

export default useAuth;
