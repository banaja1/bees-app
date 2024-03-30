import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard, Auth, Profile, Logdetails, Story, Timeline, Crm, Epic } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/logdetails/*" element={<Logdetails />} />
      <Route path="/story/*" element={<Story />} />
      <Route path="/epic/*" element={<Epic />} />
      <Route path="/timeline/*" element={<Timeline />} />
      <Route path="/crm/*" element={<Crm />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
