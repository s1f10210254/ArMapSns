import { photoRepository } from '$/repository/photoRepository';
import { postPost, postPostAndPhoto } from '$/repository/postRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  // get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => {
    try {
      const file = body.file;
      if (file !== undefined) {
        const fileBuffer = await file.toBuffer();
        const url = await photoRepository.uploadPOSTPhoto(body.username, fileBuffer, file.mimetype);
        const result = await postPostAndPhoto(
          body.username,
          body.content,
          body.latitude,
          body.longitude,
          body.userID,
          url
        );
        return { status: 200, body: result };
      } else {
        const result = await postPost(
          body.username,
          body.content,
          body.latitude,
          body.longitude,
          body.userID
        );
        return { status: 200, body: result };
      }
    } catch (error) {
      console.error(error);
      return { status: 500, body: { message: 'アップロード失敗' } };
    }
  },
}));
