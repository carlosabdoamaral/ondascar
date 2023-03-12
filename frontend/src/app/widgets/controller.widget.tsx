import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home.page";
import SignInPage from "../pages/sign-in.page";

export default function NavigationController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
