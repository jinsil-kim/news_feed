import styled from 'styled-components';

export const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: -230px;
  width: 250px;
  height: 100%;
  background-color: white;
  color: #000;
  transition: left 0.3s ease;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    left: 0;
  }
`;

export const SidebarContent = styled.div`
  padding: 20px;
  h2 {
    margin-top: 20px;
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
`;

export const StyledLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #28a745;
  }
`;

export const SidebarFooter = styled.div`
  margin-top: 40px;
  padding: 20px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
`;
