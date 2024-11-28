import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../style/buttonStyle';
import {
  NavItem,
  NavList,
  SidebarContent,
  SidebarFooter,
  SideNav,
  StyledLink,
  UserProfile
} from '../../style/postCreation/sideBarStyle';
import { supabase } from '../../supabase/supabaseClient';
import { AiOutlineHome, AiOutlinePlusSquare } from 'react-icons/ai';
import { MdOutlineContactPage } from 'react-icons/md';
import { RiUser5Line } from 'react-icons/ri';

const Sidebar = () => {
  const navigate = useNavigate();
  // TODO: 유저 정보를 관리하는 state가 여기저기 쓰이고 있네요.
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user) {
        // TODO: single() 메서드는 데이터가 없으면 에러를 반환합니다. 아마 try catch문을 사용해야 할 것 같습니다.
        const { data, error } = await supabase.from('users').select('nickname, profile_img').eq('id', user.id).single();
        if (error) {
          console.error('Failed to fetch user profile:', error);
        } else {
          setUser({ ...user, nickname: data.nickname, profile_img: data.profile_img });
        }
      }
    };
    fetchUserProfile();
  }, []);

  const logOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃 실패');
      return;
    }
    navigate('/');
  };

  return (
    <SideNav>
      <SidebarContent>
        <h2>WOD</h2>
        <NavList>
          <NavItem>
            {/* "/연결할 페이지" 넣으면 됩니다. */}
            <StyledLink onClick={() => navigate('/home')}>
              Home
              <AiOutlineHome />
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink onClick={() => navigate('/create-post')}>
              New Feed
              <AiOutlinePlusSquare />
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink onClick={() => navigate('/mypage')}>
              My Page
              <MdOutlineContactPage />
            </StyledLink>
          </NavItem>
        </NavList>
      </SidebarContent>
      <SidebarFooter>
        <UserProfile onClick={() => navigate('/update')}>
          <span>{user?.nickname}</span>
          {user?.profile_img ? (
            <img src={user.profile_img} alt="프로필 이미지" />
          ) : (
            <RiUser5Line style={{ fontSize: '38px' }} />
          )}
        </UserProfile>
        <Button padding="8px 12px" border-radius="5px" onClick={logOutUser}>
          로그아웃
        </Button>
      </SidebarFooter>
    </SideNav>
  );
};

export default Sidebar;
