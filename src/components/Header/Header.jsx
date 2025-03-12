import { Link,  useLocation } from "react-router-dom";
const Logo = "/logo.webp";
import "../Header/header.css";

export default function Header() {

  const location = useLocation();
  // Détermine la page actuelle et ajuste les textes/lien en conséquence
  const isOnCreateEmployeePage = location.pathname === "/";
  return (
    <header className="header_create">
      <img src={Logo} alt="HRnet Logo" loading="lazy" />
      <div>
        <h1>HRnet</h1>
        <h2>{isOnCreateEmployeePage ? "Create Employee" : "Current Employees"}</h2>
      </div>
      <Link 
        to={isOnCreateEmployeePage ? "/employee-list" : "/"}
        className="link-button"
      >
        {isOnCreateEmployeePage ? "View Current Employees" : "Create Employee"}
      </Link>
    </header>
  );
}
