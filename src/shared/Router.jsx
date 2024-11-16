import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signin" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
