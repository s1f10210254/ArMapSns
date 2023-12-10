import React, { useState } from 'react';
import useAuth from 'src/hooks/useAuth';

const Home = () => {
  const user = useAuth();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
      console.log('file,', files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) return;

    //バックエンドに署名付きURLをリクエスト
    try {
      // const response = await apiClient.
    } catch (error) {
      alert('アップロードに失敗しました');
    }
  };

  return (
    <div>
      <p>user.id</p>
      {user !== null && <div>{user.id}</div>}
      {/* <p>{user}</p> */}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>アップロード</button>
    </div>
  );
};

export default Home;
