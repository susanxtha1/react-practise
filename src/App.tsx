import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./auth/authlayout";
import { LogIn } from "./auth/login";
import { Register } from "./auth/register";
import { Home } from "./auth/dashboard/home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<LogIn />} />
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
