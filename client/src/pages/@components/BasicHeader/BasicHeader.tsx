import ThreeDRotationTwoToneIcon from '@mui/icons-material/ThreeDRotationTwoTone';
import type { UserModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HumanIcon } from 'src/components/icons/HumanIcon';
import { logout } from 'src/utils/login';
import styles from './BasicHeader.module.css';

export const BasicHeader = ({ user }: { user: UserModel }) => {
  const router = useRouter();

  const onLogout = async () => {
    if (confirm('ログアウトしますか？')) {
      await logout();
      await router.push('/login');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.userBtn} onClick={onLogout}>
          {/* {user.photoURL !== undefined ? (
            <img
              className={styles.userIcon}
              src={user.photoURL}
              height={24}
              alt={user.displayName}
              style={{ paddingRight: 10 }}
            />
          ) : ( */}
          <HumanIcon size={30} />
          {/* )} */}
          <span className={styles.userName}>{user.displayName}</span>
        </div>

        <img className={styles.logoImage} src="/images/logo.png" alt="ARMapConnect Logo" />
        <Link href="/AR">
          <ThreeDRotationTwoToneIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};
