import { Link } from "react-router-dom";
const Logo = "/logo.webp";
import "../Header/header.css";

export default function Header() {
 
  return (
    <header className="header_create">
      <img src={Logo} alt="HRnet Logo" loading="lazy" />
      <div>
        <h1>HRnet</h1>
        <h2>Create Employee</h2>
      </div>
      <Link to="/employee-list" className="link-button">
        View Current Employees
      </Link>
    </header>
  );
}
