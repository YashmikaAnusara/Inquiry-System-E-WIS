import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
// import Notification from "./components/Alert";
import BranchReg from "./components/BranchReg";
import LoginPage from "./pages/LoginPage";
 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashBoard" element={<AdminHome />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/branch" element={<BranchReg />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
