import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";
import SampleProfileForm from "./pages/SampleProfileForm";


function App() {
  return (

    <div className="parent">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/post" element={<SampleProfileForm />} />
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<ResponsiveDrawer />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
