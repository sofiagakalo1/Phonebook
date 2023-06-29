import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const ContactsPage = lazy(() => import("../src/pages/ContactsPage"));
// const LoginPage = lazy(() => import('../src/pages/LoginPage'));
// const RegisterPage = lazy(() => import('../src/pages/RegisterPage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace="*" />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
