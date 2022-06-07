import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
// import Notification from "./components/Alert";
import LoginPage from "./pages/LoginPage";
import EmpRegistration from "./pages/EmpRegistration";
import BranchRegistration from "./pages/BranchRegistration";
import ManagerHome from "./pages/ManagerHome";
import ViewEmployee from "./pages/ViewEmployee";
import Updateemployee from "./pages/updateemployee";
import InquiriesPage from "./pages/InquiriesPage";
import Deleteemployee from "./pages/Deleteemployee";

import MarketingHome from "./pages/MarketingHome";

import Profile from "./pages/Profile";
import ViewMarketingEmployee from "./pages/ViewMarketingEmployee";
import MarketingInquiriesPage from "./pages/MarketingInquiriesPage";
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
          <Route path="/addemployee" element={<EmpRegistration />} />
          <Route path="/addbranch" element={<BranchRegistration />} />
          <Route path="/managerdashBoard" element={<ManagerHome />} />
          <Route path="/viewemployee" element={<ViewEmployee />} />
          <Route path="/updateemployee/:id" element={<Updateemployee />} />
          <Route path="/deleteemployee/:id" element={<Deleteemployee />} />
          <Route path="/marketingdashBoard" element={<MarketingHome />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/viewmarketingemployee" element={<ViewMarketingEmployee />} />
          <Route path="/Branchinquiry" element={<BranchInquiriesPage />} />
          <Route path="/marketinginquiry" element={<MarketingInquiriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
