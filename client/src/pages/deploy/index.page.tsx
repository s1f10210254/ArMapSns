import React, { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { judgementS3 } from 'src/utils/s3';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const getPhotos = async () => {
    if (judgementS3() === false) {
      alert('現在対応していません');
      return;
    }
    try {
      const response = await apiClient.minio.$get();
      setPhotos(response.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (judgementS3() === false) {
      alert('現在対応していません');
      return;
    }
    event.preventDefault();
    if (!file) {
      alert('写真を選択してください。');
      return;
    }

    const body = {
      title,
      description,
      file,
    };

    try {
      const response = await apiClient.minio.$post({
        body,
      });
      alert(`アップロード成功 ${response.url}`);
      setTitle('');
      setDescription('');
      await getPhotos();
    } catch (error) {
      console.error(error);
      alert('アップロードに失敗しました。');
    }
  };
  interface Photo {
    title: string;
    url: string;
    description?: string;
  }
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          タイトル:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          説明:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          写真:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </label>
        <br />
        <button type="submit">アップロード</button>
      </form>
      <div>
        {photos.map((photo) => (
          <div key={photo.title}>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} style={{ width: '300px', height: 'auto' }} />
            {/* <p>{photo.url}</p> */}

            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
