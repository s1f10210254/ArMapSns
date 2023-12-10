export const judgementS3 = () => {
  if (process.env.NEXT_PUBLIC_S3 !== undefined) {
    return true;
  } else {
    return false;
  }
};
