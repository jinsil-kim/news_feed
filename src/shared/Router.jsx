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
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-post" element={<PostCreationPage />} />
        <Route path="/mypage" element={<MypageLink />} />
        <Route path="/update" element={<UpdateProfilePage />} />
        <Route path="/feed/:id/update" element={<MyFeedUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
