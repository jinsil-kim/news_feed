import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';

import HomePage from '../pages/HomePage';

import PostCreationPage from '../pages/PostCreationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-post" element={<PostCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
