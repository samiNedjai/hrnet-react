import { Link, useLocation } from "react-router-dom";
const Logo = "/logo.webp";
import "../Header/header.css";

/**
 * Composant d'en-tête (`Header`) utilisé dans l'application HRnet.
 * Il affiche dynamiquement le titre et le lien en fonction de la page actuelle.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <Header />
 *
 * @returns {JSX.Element} Le composant `Header`.
 */
export default function Header() {
  const location = useLocation();

  /**
   * Détermine si l'utilisateur est sur la page de création d'employé.
   * - Si oui (`/`), le titre est "Create Employee" et le bouton dirige vers "View Current Employees".
   * - Sinon (`/employee-list`), le titre est "Current Employees" et le bouton dirige vers "Create Employee".
   */
  const isOnCreateEmployeePage = location.pathname === "/";

  return (
    <header className="header_create">
      <img src={Logo} alt="HRnet Logo" loading="lazy" />
      <div>
        <h1>HRnet</h1>
        <h2>
          {isOnCreateEmployeePage ? "Create Employee" : "Current Employees"}
        </h2>
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
