import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SampleProfileForm from "./pages/SampleProfileForm";
import ExampleSidebar from "./components/ExampleSidebar";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import SearchAppBar from "./components/SearchBar";
import ChatSection from "./components/ChatSection";

function App() {
  return (
    <div className="parent">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/responsive" element={<ResponsiveDrawer />} />
        <Route path="/exampleSidebar" element={<ExampleSidebar />} />
        <Route path="/chatSection" element={<ChatSection />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/profile" element={<SampleProfileForm />} />
        <Route path="/search" element={<SearchAppBar />} />
      </Routes>
    </div>
  );
}

export default App;
