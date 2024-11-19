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
import { MdOutlineContactPage } from "react-icons/md";
import { RiUser5Line } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();

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
        <UserProfile>
          <span>유저 닉네임</span>
          <img src="https://octapi.lxzin.com/interior/vImgFileSeq/202210/11/8ede80a1-1d0c-4839-bcc3-97bd4f357ecd.jpg" alt="프로필 이미지" />
          {/* <RiUser5Line style={{fontSize:"38px"}} /> */}
        </UserProfile>
        <Button padding="8px 12px" border-radius="5px" onClick={logOutUser}>
          로그아웃
        </Button>
      </SidebarFooter>
    </SideNav>
  );
};

export default Sidebar;
