import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
// import Notification from "./components/Alert";
import LoginPage from "./pages/LoginPage";
import EmpRegistration from "./pages/EmpRegistration";
import BranchRegistration from "./pages/BranchRegistration";
import MarktingHome from "./pages/MarktingHome";
import ViewEmployee from "./pages/ViewEmployee";
import Updateemployee from "./pages/updateemployee";
import InquiriesPage from "./pages/InquiriesPage";
import Deleteemployee from "./pages/Deleteemployee";
import Profile from "./pages/Profile";

import BranchInquiriesPage from "./pages/BranchInquiriesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashBoard" element={<AdminHome />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/inquiry/:branch/:email" element={<InquiriesPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/employee" element={<EmpRegistration />} />
          <Route path="/branch" element={<BranchRegistration />} />
          <Route path="/market" element={<MarktingHome />} />
          <Route path="/addemployee" element={<EmpRegistration />} />
          <Route path="/addbranch" element={<BranchRegistration />} />
          <Route path="/marketingdashBoard" element={<MarktingHome />} />
          <Route path="/viewemployee" element={<ViewEmployee />} />
          <Route path="/updateemployee/:id" element={<Updateemployee />} />
          <Route path="/deleteemployee/:id" element={<Deleteemployee />} />

          <Route path="/admin/profile" element={<Profile />} />

          <Route path="/Branchinquiry" element={<BranchInquiriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
