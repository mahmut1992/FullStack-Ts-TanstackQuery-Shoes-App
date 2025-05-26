import React, { type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Detail from "./pages/detail";
import Dashboard from "./pages/dashboard";
import Protected from "./components/ptotected";
import Create from "./pages/create";
import Edit from "./pages/edit";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="/shoe/:id" element={<Detail />} />
        </Route>

        <Route element={<Protected allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<Create />} />
          <Route path="/dashboard/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
