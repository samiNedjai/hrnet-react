import React , {useState}  from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    useReactTable,
    getCoreRowModel,

  } from "@tanstack/react-table";
  import DataTable from "../components/DataTable";
export default function EmployeeList() {

     // Récupérer les employés depuis le store Redux
  const employees = useSelector((state) => state.employee.employees);

   // Colonnes pour le tableau de données
   const columns = React.useMemo(
    () => [
      { id: "firstName", accessorKey: "firstName", header: "First Name" },
      { id: "lastName", accessorKey: "lastName", header: "Last Name" },
      { id: "startDate", accessorKey: "startDate", header: "Start Date" },
      { id: "department", accessorKey: "department", header: "Department" },
      { id: "dateOfBirth", accessorKey: "dateOfBirth", header: "Date of Birth" },
      { id: "street", accessorKey: "address.street", header: "Street" },
      { id: "city", accessorKey: "address.city", header: "City" },
      { id: "state", accessorKey: "address.state", header: "State" },
      { id: "zipCode", accessorKey: "address.zipCode", header: "Zip Code" },
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h2>Current Employees</h2>

      {/* Affichage du tableau sans recherche et pagination */}
      <DataTable table={table} />
      <Link to="/">Home</Link>
    </div>
  );
}
