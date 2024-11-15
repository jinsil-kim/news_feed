import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import LogIn from '../pages/LogIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
