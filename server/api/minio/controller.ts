import { S3_BUCKET, S3_ENDPOINT } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { ListObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => {
    try {
      const command = new ListObjectsCommand({ Bucket: S3_BUCKET });
      const response = await s3Client.send(command);
      const photos =
        response.Contents?.map((content) => ({
          title: content.Key ?? '未定義のタイトル', // `undefined` を許容しない
          url: `${S3_ENDPOINT}/${S3_BUCKET}/${content.Key}`,
        })) || [];

      return { status: 200, body: { photos } };
    } catch (error) {
      console.error(error);
      return { status: 500, body: { photos: [] } };
    }
  },
  post: async ({ body }) => {
    const { title, file } = body; // descriptionを削除
    const key = `photos/${title}`;

    try {
      const fileBuffer = await file.toBuffer(); // fileからストリームを作成

      await s3Client.send(
        new PutObjectCommand({
          Bucket: S3_BUCKET,
          Key: key,
          Body: fileBuffer,
          ContentType: file.mimetype,
        })
      );

      const url = `${S3_ENDPOINT}/${S3_BUCKET}/${key}`;
      return { status: 201, body: { message: 'アップロード成功', url } };
    } catch (error) {
      console.error(error);
      return { status: 500, body: { message: 'アップロード失敗' } };
    }
  },
}));
