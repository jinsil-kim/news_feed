import styled from 'styled-components';

export const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: -180px;
  width: 250px;
  height: 100%;
  background-color: #28a745;
  color: #fff;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: color 0.3s;
  &:hover {
    color: #000;
  }
`;

export const SidebarFooter = styled.div`
  margin-top: 350px;
  padding: 40px 17px;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
  }
  span {
    font-size: 24px;
    font-weight: 700;
  }

  &:hover {
    color: black;

    img {
      filter: brightness(0.8);
    }
  }
`;
