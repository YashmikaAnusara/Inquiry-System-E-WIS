import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AdminHome />}/> */}
          <Route path="/dashBoard" element={<AdminHome />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
