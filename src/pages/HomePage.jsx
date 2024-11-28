import Home from '../components/Home/Home';
import Sidebar from '../components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <div>
      {/* TODO: Sidebar를 거의 모든 컴포넌트에서 쓰고 있네요. Outlet 컴포넌트를 사용하면 좋겠습니다. */}
      <Sidebar />
      <Home />
    </div>
  );
};

export default HomePage;
