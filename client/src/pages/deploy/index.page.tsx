import React, { useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert('写真を選択してください。');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

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
    } catch (error) {
      console.error(error);
      alert('アップロードに失敗しました。');
    }
  };

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
    </div>
  );
};

export default Home;
