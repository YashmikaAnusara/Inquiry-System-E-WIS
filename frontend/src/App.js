import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
// import Notification from "./components/Alert";
import LoginPage from "./pages/LoginPage";
import EmpRegistration from "./pages/EmpRegistration";
import BranchRegistration from "./pages/BranchRegistration";
import MarktingHome from "./pages/MarktingHome";

import InquiriesPage from "./pages/InquiriesPage";
 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashBoard" element={<AdminHome />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/inquiry/:branch/:email" element={<InquiriesPage />} />
          <Route path="/Login" element={<LoginPage />} />

          <Route path="/employee" element={<EmpRegistration />} />
          <Route path="/branch" element={<BranchRegistration />} />
          <Route path="/market" element={<MarktingHome />} />
          

          <Route path="/addemployee" element={<EmpRegistration />} />
          <Route path="/addbranch" element={<BranchRegistration />} />
          <Route path="/marketingdashBoard" element={<MarktingHome />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
