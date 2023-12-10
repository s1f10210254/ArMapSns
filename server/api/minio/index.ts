import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    reqFormat: FormData;
    reqBody: {
      title: string;
      description: string;
      file: Blob;
    };

    resBody: {
      message: string;
      url?: string;
    };
  };
}>;
