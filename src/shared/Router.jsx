import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import LogIn from "../pages/LogIn";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;