import type { PostModel } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: { userID: string };
    resBody: PostModel[];
  };

  post: {
    reqBody: {
      username: string;
      content: string;
      latitude: number;
      longitude: number;
      userID: string;
    };
  };

  delete: {
    query: { postID: string };
  };
}>;
