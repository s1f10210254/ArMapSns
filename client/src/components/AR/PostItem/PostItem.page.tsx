import type { PostModel, UserModel } from 'commonTypesWithClient/models';
import React, { useEffect } from 'react';
import { xValue, yValue, zValue } from 'src/utils/calculate';
import { formatContent, formatTime } from 'src/utils/format';

interface PostItemProps {
  post: PostModel;
  index: number;
  postLength: number;
  isLiked: boolean;
  handleLike: (postId: string) => void;
  deletePostContent: (postId: string) => void;
  user: UserModel;
  likesStatus: { [key: string]: boolean };
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  index,
  postLength,
  // isLiked,
  handleLike,
  deletePostContent,
  user,
  likesStatus,
}) => {
  useEffect(() => {
    if (typeof AFRAME.components['likes'] === 'undefined') {
      AFRAME.registerComponent('likes', {
        schema: {
          postId: { type: 'string' },
        },
        init() {
          this.el.addEventListener('click', () => {
            // alert('clickしました');
            const postId = this.data.postId;
            // console.log('postID', postId);
            handleLike(postId);
          });
        },
      });
    }

    if (typeof AFRAME.components['delete'] === 'undefined') {
      AFRAME.registerComponent('delete', {
        schema: {
          postId: { type: 'string' },
        },
        init() {
          this.el.addEventListener('click', () => {
            // alert('clickしました');
            const postId = this.data.postId;
            // console.log('postID', postId);
            if (confirm('削除しますか？')) deletePostContent(postId);
          });
        },
      });
    }
  }, [deletePostContent, handleLike]);
  return (
    <a-entity
      key={index}
      id={`post${index}`}
      position={`${xValue(index, postLength)} ${yValue()} ${zValue(index, postLength)}`}
      // position={`0 0.5 -5`}
      rotation={`0 0 0`}
      look-at="[camera]"
      scale="3 3 3"
      animation="property: scale; to: 2.8 2.8 2.8; dir: alternate; dur: 2000; loop: true"
    >
      {/* 投稿内容の外枠 */}
      {post.userID === user?.id ? (
        <a-box color="#c2c7ee" height="1" width="1.5" depth="0.1" position="0 0 -0.1" />
      ) : (
        // <a-plane color="#f6a985" height="1" width="1.5" position="0 0 -0.1" />
        <a-box color="#f6a985" height="1" width="1.5" depth="0.1" position="0 0 -0.1" />
      )}

      <a-plane color="#fffbfb" height="0.9" width="1.4" position="0 0 0" align="center" />

      {/* 投稿内容 */}

      <a-text
        value={formatContent(post.content)}
        font="/fonts/mplus-msdf.json"
        font-image="/png/mplus-msdf.png"
        position="-0.65 0.2 0.001"
        gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
        scale="0.4 0.4 0.4"
        color="#000000"
        // align="center"
        negate="false"
      />

      {/* いいねオブジェクト */}

      <a-plane
        material={`src: #heart; transparent: true; color: ${
          likesStatus[post.id] ? 'red' : 'white'
        };`}
        position="-0.4 -0.3 0.09"
        scale="0.2 0.2 0.2"
        gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
      />

      <a-entity position="-0.4, -0.3 0.1" likes={`postId: ${post.id}`}>
        <a-entity
          class="raycastable"
          gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
          geometry="primitive:box"
          material="color:blue; opacity: 0.5"
          scale="0.2 0.2 0.1"
          position="0 0 0"
          visible="false"
        />
      </a-entity>

      {/* いいね数 */}
      <a-text
        value={`Likes: ${post.likeCount}`}
        position="-0.5 -0.2 0.1"
        gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
        scale="0.2 0.2 0.2"
        color="black"
      />
      {/*投稿時間 */}
      <a-text
        value={`${formatTime(post.postTime)}`}
        position="0.01 -0.4 0"
        font="/fonts/mplus-msdf.json"
        font-image="/png/mplus-msdf.png"
        gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
        scale="0.25 0.25 0.25"
        color="#413f3f"
        negate="false"
      />

      {/*削除機能 */}
      {user?.id === post.userID && (
        <>
          <a-plane
            material="src : #delete ;transparent: true;"
            position="0.3 -0.25 0.1"
            scale="0.1 0.1 0.1"
            gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
          />
          <a-entity position="0.3, -0.25 0.1" delete={`postId: ${post.id}`}>
            <a-entity
              class="raycastable"
              gps-entity-place={`latitude: ${post.latitude}; longitude: ${post.longitude}`}
              geometry="primitive:box"
              material="color:blue; opacity: 0.5"
              scale="0.2 0.2 0.1"
              position="0 0 0"
              visible="false"
            />
          </a-entity>
        </>
      )}
    </a-entity>
  );
};
export default PostItem;
