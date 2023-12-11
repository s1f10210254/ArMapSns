import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    reqFormat: FormData;
    reqBody: {
      username: string;
      content: string;
      latitude: string;
      longitude: string;
      userID: string;
      file?: Blob;
    };
  };
}>;
