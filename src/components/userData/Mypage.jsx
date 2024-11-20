import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { supabase } from '../../supabase/supabaseClient';
import { useState, useEffect } from 'react';
import MyFeed from './MyFeed';
import {
  Circle,
  CircleContainer,
  MyPageContainer,
  ProfileSettingButton,
  UserContainer,
  UserProfileImg,
  UserText,
  WrapUserData
} from '../../style/myFeedStyle/myPageStyle';

// TODO:
// 1. 현재 로그인한 유저 정보를 가져온다  -> 지금 할 수가 없음 -> 로그인 기능이 합쳐진 이후에 할 수 있다. -> 로그인 기능 합친 후에 작성할 예정
// 2. 유저 정보의 id를 찾아 posts에서 해당 user_id와 일치하는 놈만 걸러서 가져온다.

const Mypage = () => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      setCurrentUser(user); // 현재 사용자 정보 저장
    };

    checkUser();
  }, []);

  useEffect(() => {
    const fetchMyFeeds = async () => {
      if (!currentUser) return;
      const { data } = await supabase.from('posts').select('*').eq('user_id', currentUser.id);
      setPosts(data);
    };

    fetchMyFeeds();
  }, [currentUser]);

  useEffect(() => {
    const fetchMyInfo = async () => {
      if (!currentUser) return;
      // const { data: { user } } = await supabase.auth.getUser();
      const { data } = await supabase.from('users').select('*').eq('id', currentUser.id);
      if (data.length !== 0) {
        setUserInfo(data[0]);
      }
    };

    fetchMyInfo();
  }, [currentUser]);

  return (
    <>
      <MyPageContainer>
        <UserContainer>
          <CircleContainer>
            <Circle>
              {userInfo?.profile_img ? <UserProfileImg src={userInfo?.profile_img} /> : <AiOutlineUser />}
            </Circle>
            <UserText>{userInfo?.nickname}</UserText>
            <UserText />
            <Link to={'/update'}>
              <ProfileSettingButton>프로필 수정</ProfileSettingButton>
            </Link>
          </CircleContainer>
          <WrapUserData>
            {posts.map((post) => (
              <MyFeed key={post.id} post={post} setPosts={setPosts} />
            ))}
          </WrapUserData>
        </UserContainer>
      </MyPageContainer>
    </>
  );
};
export default Mypage;
