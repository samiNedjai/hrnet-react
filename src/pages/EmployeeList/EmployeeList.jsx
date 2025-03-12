import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "smtable-react"; 
import "../EmployeeList/employeeList.css";

export default function EmployeeList() {
  // Récupérer les employés depuis le store Redux
  const employees = useSelector((state) => state.employee.employees);

  // Définition des colonnes du tableau
  const columns = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "startDate", label: "Start Date" },
    { id: "department", label: "Department" },
    { id: "dateOfBirth", label: "Date of Birth" },
    { id: "street", label: "Street" },
    { id: "city", label: "City" },
    { id: "state", label: "State" },
    { id: "zipCode", label: "Zip Code" },
  ];
  const formatDate = (isoString) => {
    if (!isoString) return ""; 
    return new Date(isoString).toISOString().split("T")[0];  // Retourne YYYY-MM-DD
  };
  const formattedEmployees = employees.map(employee => ({
    ...employee,
    dateOfBirth: formatDate(employee.dateOfBirth),
    startDate: formatDate(employee.startDate),
  }));
  return (
    <div>
      <h2>Current Employees</h2>

      <Table 
        columns={columns} 
        data={formattedEmployees} 
        pageSizeOptions={[5, 10, 20, 50]} 
        emptyMessage="No employees found."

      />

      <Link to="/">Home</Link>
    </div>
  );
}
