import { Routes, Route } from "react-router-dom";
import StudentHome from "./pages/StudentHome";
import ListingDetails from "./pages/ListingDetails";
import Matcher from "./pages/Matcher";
import AdminDashboard from "./pages/AdminDashboard";
import OccupancyGrid from "./pages/OccupancyGrid";
import RentTracker from "./pages/RentTracker";
import SafetyControl from "./pages/SafetyControl";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentHome />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
      <Route path="/matcher" element={<Matcher />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/occupancy" element={<OccupancyGrid />} />
      <Route path="/admin/rent" element={<RentTracker />} />
      <Route path="/admin/safety" element={<SafetyControl />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
