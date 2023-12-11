import { photoRepository } from '$/repository/photoRepository';
import { postPostAndPhoto } from '$/repository/postRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    try {
      const file = body.file;
      if (file !== undefined) {
        const fileBuffer = await file.toBuffer();
        const url = await photoRepository.uploadPOSTPhoto(body.username, fileBuffer, file.mimetype);
        const result = await postPostAndPhoto(
          body.username,
          body.content,
          parseFloat(body.latitude),
          parseFloat(body.longitude),
          body.userID,
          url
        );
        return { status: 200, body: result };
      } else {
        return { status: 201 };
      }
    } catch (error) {
      console.error(error);
      return { status: 500 };
    }
  },
}));
