import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Home />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route path="home" element={<Home />} />
    //       <Route path="register" element={<Register />} />
    //       <Route path="login" element={<Login />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
