import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const MenuBar = () => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default MenuBar;
