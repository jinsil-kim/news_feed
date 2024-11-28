import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
import PostCreationPage from '../pages/PostCreationPage';
import MypageLink from '../pages/MypageLink';
import UpdateProfilePage from '../pages/UpdateProfilePage';
import MyFeedUpdatePage from '../pages/MyFeedUpdatePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: "/" 가 로그인이면 의미가 명확하지 않은 것 같습니다. 협업을 한다면 헷갈리지 않게 하는 것이 중요하기 때문에 "/login"으로 설정하고 "/"에 home 컴포넌트를 보여주면 좋겠네요 */}
        {/* TODO: 그리고 로그인하지 않은 채로 home으로 갈 경우 강제로 로그인 페이지로 이동하게 할 수 있습니다. */}
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-post" element={<PostCreationPage />} />
        <Route path="/mypage" element={<MypageLink />} />
        {/* TODO: 구체적으로 무엇을 업데이트하는지 url에 표시하는 것이 좋습니다. ex) /update/profile */}
        <Route path="/update" element={<UpdateProfilePage />} />
        <Route path="/feed/:id/update" element={<MyFeedUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
