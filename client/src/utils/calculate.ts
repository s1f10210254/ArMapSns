const radius = 5;
// const numPosts = posts?.length;
// X座標を計算する関数
export const xValue = (index: number, numPosts: number) => {
  if (numPosts === undefined) return 0;
  const angle = (index / numPosts) * Math.PI * 2;
  return -radius * Math.cos(angle);
  // return 0;
};

// Y座標を計算する関数（例では一定の高さを返します）
export const yValue = () => {
  // if (numPosts === undefined) return;
  // const angle = Math.PI * 2;
  // return -radius * Math.cos(angle);
  return 0; // 高さは1に固定
};

// Z座標を計算する関数
export const zValue = (index: number, numPosts: number) => {
  if (numPosts === undefined) return 0;
  const angle = (index / numPosts) * Math.PI * 2;
  return -radius * Math.sin(angle);
  // return 0;
};
