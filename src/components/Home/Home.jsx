import { useState, useEffect } from 'react';
import { PostHomeDiv, Content, User, ProfileImg, Nickname, Tags } from '../../style/Home/homeStyle';
import { supabase } from '../../supabase/supabaseClient';
import { Tag } from '../../style/postCreation/tagSelectorStyle';
import { tagColors } from '../../style/tagColors';
import { ImageDiv } from '../../style/myFeedStyle/myPageStyle';
import dayjs from 'dayjs';

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
              <UserProfile userId={post.user_id} postCreatedAt={post.created_at} />
              <ImageDiv>
                <img src={post.img_url} />
                <Content>{post.content}</Content>
                <Tags>
                  {post.tags.map((t) => (
                    <div key={t}>
                      <Tag key={t} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                        {t}
                      </Tag>
                    </div>
                  ))}
                </Tags>
              </ImageDiv>
            </PostHomeDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;

function UserProfile({ userId, postCreatedAt }) {
  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const formattedDate = dayjs(postCreatedAt).format('YYYY년 MM월 DD일 HH:mm:ss');

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
      <span>{formattedDate}</span>
    </User>
  );
}
