import { useState, useEffect } from 'react';
import {
  PostHomeDiv,
  PostContentDiv,
  PostFeedDiv,
  Content,
  Tags,
  User,
  ProfileImg,
  Nickname
} from '../../style/Home/homeStyle';
import { supabase } from '../../supabase/supabaseClient';
import { Tag } from '../../style/postCreation/tagSelectorStyle';

const tagColors = [
  '#FFB3BA',
  '#FFDFBA',
  '#FFFFBA',
  '#BAFFC9',
  '#BAE1FF',
  '#E0BBE4',
  '#FFB7B2',
  '#FFDAC1',
  '#B5EAD7',
  '#C7CEEA'
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
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
              <PostFeedDiv>
                <img src={post.img_url} />
                <Content>{post.content}</Content>
                <Tags>
                  {post.tags.map((t) => (
                    <PostContentDiv key={t}>
                      <Tag key={t} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                        {t}
                      </Tag>
                    </PostContentDiv>
                  ))}
                </Tags>
              </PostFeedDiv>
            </PostHomeDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;

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
