import React, { useState } from 'react';
import Feed from './Feed';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatarImage: 'https://via.placeholder.com/50', // 프로필 이미지
      name: 'Alice Johnson', // 사용자 이름
      feedImage:
        'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202410/03/cc929604-8e12-47c4-a0db-a948d7053e49.jpg', // 피드 이미지
      content: 'Just finished a 5K run and feeling amazing! :달리는_여성::근육:', // 게시글 내용
      ExplainContent: 'bbbbbbbbbbbbbbbbbbbbbbb',
      tag: 'running' // 태그
    },

    {
      avatarImage: 'https://via.placeholder.com/50',
      name: 'Bob Smith',
      feedImage: 'https://via.placeholder.com/300',
      content: 'New personal best on bench press: 200lbs! :쾅:',
      tag: 'weightlifting'
    },
    {
      avatarImage: 'https://via.placeholder.com/50',
      name: 'Charlie Brown',
      feedImage: 'https://via.placeholder.com/300',
      content: 'Exploring yoga for the first time. So relaxing :결가부좌를_튼_남성::반짝임:',
      tag: 'yoga'
    }
  ]);

  return (
    <div>
      {posts.map((post) => (
        <Feed key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
