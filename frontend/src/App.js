import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import InquiryForm from "./pages/InquiryForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />}/>
          <Route path="/InquiryForm" element={<InquiryForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
