import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import DataTable from "../components/DataTable";
import "../styles/employeeList.css";

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
      {
        id: "dateOfBirth",
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
      },
      { id: "street", accessorKey: "address.street", header: "Street" },
      { id: "city", accessorKey: "address.city", header: "City" },
      { id: "state", accessorKey: "address.state", header: "State" },
      { id: "zipCode", accessorKey: "address.zipCode", header: "Zip Code" },
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data: employees,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div>
      <h2>Current Employees</h2>
      <div className="header">
        <div className="entries-select">
          <label>
            Show{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>{" "}
            entries
          </label>
        </div>
        <div className="search-box">
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search employees..."
          />
        </div>
      </div>

      <DataTable table={table} />
      <div  className="pagination-container">
        <span className="entries-info">
        Showing {table.getRowModel().rows.length > 0
            ? `${table.getState().pagination.pageIndex * pageSize + 1} to ${
                Math.min(
                  (table.getState().pagination.pageIndex + 1) * pageSize,
                  employees.length
                )
              } of ${employees.length}`
            : "0"} entries
        </span>
        <div className="pagination">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="pagination-button"
          >
            Previous
          </button>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button
              key={i}
              onClick={() => table.setPageIndex(i)}
              className={`pagination-number ${
                table.getState().pagination.pageIndex === i ? "active" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="pagination-button"
          >
            Next
          </button>
        </div>

      </div>
      <Link to="/">Home</Link>
    </div>
  );
}
