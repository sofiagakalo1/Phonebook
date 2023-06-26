import { lazy } from 'react';

import Layout from "./layout/Layout";

import "./App.css";


const HomePage = lazy(() => import('../src/pages/HomePage'));

function App() {
  return (
    <div className="App">
      <Layout/>
      <HomePage/>
    </div>
  );
}

export default App;
