import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import ReciptGenerator from "./assets/pages/ReciptGenerator";
import RegisterStepTwo from "./assets/pages/RegisterStepTwo";
import Footer from "./assets/ui/components/Footer";
import Container from "./assets/ui/components/Container";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipt-generator" element={<ReciptGenerator />} />
          <Route path="/register-step-two" element={<RegisterStepTwo />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
