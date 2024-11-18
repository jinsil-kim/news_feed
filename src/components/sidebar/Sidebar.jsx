import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SideNav>
      <SidebarContent>
        <h2>WOD</h2>
        <NavList>
          <NavItem>
            {/* "/연결할 페이지" 넣으면 됩니다. */}
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/create-post">New Feed</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/profile">My Page</StyledLink>
          </NavItem>
        </NavList>
      </SidebarContent>
      <SidebarFooter>
        <UserProfile>
          <ProfileImage src="/images/default-profile.png" alt="프로필 이미지" />
          <UserName>유저 닉네임</UserName>
        </UserProfile>
        <LogoutButton>로그아웃</LogoutButton>
      </SidebarFooter>
    </SideNav>
  );
};

export default Sidebar;

const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: -230px;
  width: 250px;
  height: 100%;
  background-color: #28a745;
  color: #fff;
  transition: left 0.3s ease;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    left: 0;
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
  h2 {
    margin-top: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 15px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

const SidebarFooter = styled.div`
  margin-top: 40px;
  padding: 20px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #28a745;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #fff;
`;

const LogoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
