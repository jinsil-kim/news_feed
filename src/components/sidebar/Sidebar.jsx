import { useNavigate } from 'react-router-dom';
import { Button } from '../../style/buttonStyle';
import {
  NavItem,
  NavList,
  ProfileImage,
  SidebarContent,
  SidebarFooter,
  SideNav,
  StyledLink,
  UserName,
  UserProfile
} from '../../style/postCreation/sideBarStyle';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SideNav>
      <SidebarContent>
        <h2>WOD</h2>
        <NavList>
          <NavItem>
            {/* "/연결할 페이지" 넣으면 됩니다. */}
            <StyledLink onClick={() => navigate('/home')}>Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink onClick={() => navigate('/create-post')}>New Feed</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink onClick={() => navigate('/mypage')}>My Page</StyledLink>
          </NavItem>
        </NavList>
      </SidebarContent>
      <SidebarFooter>
        <UserProfile>
          <ProfileImage src="/images/default-profile.png" alt="프로필 이미지" />
          <UserName>유저 닉네임</UserName>
        </UserProfile>
        <Button padding="8px 12px" border-radius="5px">
          로그아웃
        </Button>
      </SidebarFooter>
    </SideNav>
  );
};

export default Sidebar;
