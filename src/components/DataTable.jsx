import React from 'react'
import { flexRender } from "@tanstack/react-table";
import "../styles/dataTable.css"



export default function DataTable({table}) {

    const formatDate = (date) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString("fr-CA"); // Format : 2025-02-17
      };
    return (
        <div className="table-container">
          {/* Tableau */}
          <table className="employee-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <span className="sort-icon">
                          {header.column.getIsSorted() === "asc" ? "🔼" : ""}
                          {header.column.getIsSorted() === "desc" ? "🔽" : ""}
                          {header.column.getIsSorted() === false ? "⏺" : ""}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                      {/* Format date seulement si la colonne est de type date */}
                      {cell.column.id === "startDate" || cell.column.id === "dateOfBirth"
                        ? formatDate(cell.getValue())
                        : flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={table.getAllColumns().length} className="no-data">No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    };
    
