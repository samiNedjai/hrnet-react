import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.jpg";
import "../Header/header.css";

export default function Header() {
  return (
    <header className="header_create">
      <img src={Logo} alt="HRnet Logo" />
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
