import { useState, useEffect } from 'react';
import { PostHomeDiv, PostContentDiv, PostFeedDiv } from '../../style/Home/homeStyle';
import styled from 'styled-components';
import { supabase } from '../../supabase/supabaseClient';

const Content = styled.p`
  margin-left: 125px;
`;

const Tags = styled.div`
  margin-left: 125px;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*');

        console.log(data);

        if (error) {
          throw new Error(error.message);
        }

        setPosts(data);
      } catch (error) {
        alert(`데이터 로드 실패: ${error.message}`);
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li
            style={{
              marginLeft: '300px'
            }}
            key={post.id}
          >
            <PostHomeDiv>
              <UserProfile userId={post.user_id} />
              <Content>{post.content}</Content>
            </PostHomeDiv>
            <Tags>
              {post.tags.map((t) => (
                <PostContentDiv key={t}>
                  <span>{t}</span>
                </PostContentDiv>
              ))}
            </Tags>
            <PostFeedDiv>
              <img src={post.img_url} />
            </PostFeedDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

const User = styled.div`
  display: flex;

  align-items: center;

  gap: 24px;
`;
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

const Nickname = styled.h3`
  font-size: 25px;
`;

function UserProfile({ userId }) {
  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.from('users').select('nickname, profile_img').eq('id', userId);

      if (error) {
        console.error('Error fetching user data:', error);
        return;
      }

      if (data.length > 0) {
        setNickName(data[0].nickname);
        setProfileImage(data[0].profile_img);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <User>
      <ProfileImg src={`${profileImage}`} alt="Profile" />
      <Nickname> {nickName}</Nickname>
    </User>
  );
}
