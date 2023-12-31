import type { FirebaseError } from 'firebase/app';
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';
import { apiClient } from './apiClient';
import { returnNull } from './returnNull';

export const loginWithGitHub = async () => {
  const ghProvider = new GithubAuthProvider();
  ghProvider.addScope('read:user');

  // await signInWithPopup(createAuth(), ghProvider).catch(returnNull);
  await signInWithPopup(createAuth(), ghProvider).catch((error) => {
    console.error('Error during sign-in:', error);
    return null;
  });
};

export const logout = async () => {
  await createAuth().signOut();
  localStorage.removeItem('user');
};

//新規ユーザだった場合DBにユーザ登録
const checkIfNewUser = async (user: string) => {
  const existingUsers = await apiClient.user.$get({ query: { userID: user } });
  if (existingUsers.length === 0) {
    await apiClient.user.post({ body: { userID: user } }).catch(returnNull);
  }
};

export const authWithEmail = async (email: string, password: string) => {
  const auth = createAuth();
  try {
    const signInResult = await signInWithEmailAndPassword(auth, email, password);
    const user = signInResult.user.uid;
    await checkIfNewUser(user);
    // console.log('ログイン成功');
  } catch (error) {
    const firebaseError = error as FirebaseError;
    if (firebaseError.code === 'auth/user-not-found') {
      try {
        const signUpResult = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = signUpResult.user.uid;
        await checkIfNewUser(newUser);

        // console.log('新規登録成功');
      } catch (signUpError) {
        // console.log('新規登録失敗', signUpError);
        return null;
      }
    } else {
      console.error('ログイン失敗', error);
      return null;
    }
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  const auth = createAuth();
  try {
    const signInResult = await signInWithEmailAndPassword(auth, email, password);
    const user = signInResult.user.uid;
    await checkIfNewUser(user); // 既存ユーザの確認
    // console.log('ログイン成功');
  } catch (error) {
    console.error('ログイン失敗', error);
    throw error; // エラーを再スローして、呼び出し元でハンドリングできるようにする
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  const auth = createAuth();
  try {
    const signUpResult = await createUserWithEmailAndPassword(auth, email, password);
    // console.log('aaa');
    const newUser = signUpResult.user.uid;
    await checkIfNewUser(newUser); // ユーザデータベースへの登録
    // console.log('新規登録成功');
  } catch (error) {
    console.error('新規登録失敗', error);
    throw error; // エラーを再スローして、呼び出し元でハンドリングできるようにする
  }
};
