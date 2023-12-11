import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  // get: {
  //   resBody: string;
  // };
  post: {
    reqFormat: FormData;
    reqBody: {
      username: string;
      content: string;
      latitude: number;
      longitude: number;
      userID: string;
      file?: Blob;
    };
  };
}>;
