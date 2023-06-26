import { lazy } from 'react';

import Layout from "./layout/Layout";

import "./App.css";


const HomePage = lazy(() => import('../src/pages/HomePage'));
const ContactsPage = lazy(() => import('../src/pages/ContactsPage'));
const LoginPage = lazy(() => import('../src/pages/LoginPage'));
const RegisterPage = lazy(() => import('../src/pages/RegisterPage'));

function App() {
  return (
    <div className="App">
      <Layout/>
      <HomePage/>
    </div>
  );
}

export default App;
