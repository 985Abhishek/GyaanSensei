import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SampleProfileForm from "./pages/SampleProfileForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
  
      <div className="parent">
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path="/profile" element={<SampleProfileForm />} />
        </Routes>
        <Toaster />
      </div>
   
  );
}

export default App;
