import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";

import Login from "./pages/LoginPage";

import Notification from "./components/Alert";
import BranchReg from "./components/BranchReg";
 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<AdminHome />}/> */}
          <Route path="/dashBoard" element={<AdminHome />} />


          <Route path="/dashBoard" element={<AdminHome />}/>
          <Route path="/InquiryForm" element={<InquiryForm />}/>
          <Route path="/branch" element={<BranchReg/>}/>
          


          <Route path="/" element={<AdminHome />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
