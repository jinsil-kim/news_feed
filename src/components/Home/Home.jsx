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
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
      // TODO: 불필요한 console.log 제거
      console.log(data);

      if (error) {
        return alert(`데이터 로드 실패: ${error.message}`);
      }
      setPosts(data);
    };
    fetchPosts();
  }, []);
  // TODO: 불필요한 console.log 제거
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li
            // TODO: inline style보다 styled-components를 사용합시다.
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
                    // TODO: 태그 이름이 동일한 것이 있으면 key가 겹친다는 warning이 뜹니다.
                    // 태그 추가 시 태그 이름이 동일하지 않게 하거나, 이런 경우는 어쩔 수 없이 index를 이용하거나, 태그 내에 id를 추가할 수 있습니다.
                    <div key={t}>
                      {/* TODO: color 에 들어있는 함수를 따로 빼서 재사용합시다. */}
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
      {/* TODO: profileImage가 없으면 기본 이미지를 띄워주는 것이 좋을 것 같습니다. */}
      <ProfileImg src={`${profileImage}`} alt="Profile" />
      <Nickname> {nickName}</Nickname>
      <span>{formattedDate}</span>
    </User>
  );
}
