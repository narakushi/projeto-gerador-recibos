import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import ReciptGenerator from "./assets/pages/ReciptGenerator";
import RegisterStepTwo from "./assets/pages/RegisterStepTwo"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipt-generator" element={<ReciptGenerator/>} />
        <Route path="/register-step-two" element={<RegisterStepTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
