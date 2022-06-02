import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";
import Notification from "./components/Alert";
import BranchReg from "./components/BranchReg";
 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/dashBoard" element={<AdminHome />}/>
          <Route path="/InquiryForm" element={<InquiryForm />}/>
          <Route path="/branch" element={<BranchReg/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
