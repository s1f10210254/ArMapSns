import { s3Client } from '$/service/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const { title, file } = body; // descriptionを削除
    const key = `photos/${title}`;

    try {
      const fileBuffer = await file.toBuffer(); // fileからストリームを作成

      await s3Client.send(
        new PutObjectCommand({
          Bucket: 'app',
          Key: key,
          Body: fileBuffer,
          ContentType: file.mimetype,
        })
      );

      const url = `https://${process.env.MINIO_ENDPOINT}/${process.env.S3_BUCKET}/${key}`;
      return { status: 200, body: { message: 'アップロード成功', url } };
    } catch (error) {
      console.error(error);
      return { status: 500, body: { message: 'アップロード失敗' } };
    }
  },
}));
