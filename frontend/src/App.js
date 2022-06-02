import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
// import Notification from "./components/Alert";
import LoginPage from "./pages/LoginPage";
import EmpRegistration from "./pages/EmpRegistration";
import BranchRegistration from "./pages/BranchRegistration";
import MarktingHome from "./pages/MarktingHome";
import ViewEmployee from "./pages/ViewEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashBoard" element={<AdminHome />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/addemployee" element={<EmpRegistration />} />
          <Route path="/addbranch" element={<BranchRegistration />} />
          <Route path="/marketingdashBoard" element={<MarktingHome />} />
          <Route path="/viewemployee" element={<ViewEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
