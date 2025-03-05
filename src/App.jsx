import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const EmployeeList = lazy(() => import("./pages/EmployeeList/EmployeeList"));
const CreateEmployee = lazy(() => import("./pages/CreactEmployee/CreateEmployee"));
import './App.css'


function App() {

  return (
    <Router> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
