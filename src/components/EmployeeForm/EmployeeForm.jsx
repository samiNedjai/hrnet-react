import CustomDatePicker from "../DatePicker/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CustomDropdown from "../Dropdown/Dropdown";
import { states, departments } from "../../data/data";
import "../EmployeeForm/employeeForm.css";

/**
 * Formulaire de création d'employé.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.firstName - Prénom de l'employé.
 * @param {Function} props.setFirstName - Fonction pour mettre à jour le prénom.
 * @param {string} props.lastName - Nom de famille de l'employé.
 * @param {Function} props.setLastName - Fonction pour mettre à jour le nom de famille.
 * @param {Date|null} props.dateOfBirth - Date de naissance de l'employé.
 * @param {Function} props.setDateOfBirth - Fonction pour mettre à jour la date de naissance.
 * @param {Date|null} props.startDate - Date de début du contrat de l'employé.
 * @param {Function} props.setStartDate - Fonction pour mettre à jour la date de début.
 * @param {string} props.street - Adresse de l'employé.
 * @param {Function} props.setStreet - Fonction pour mettre à jour l'adresse.
 * @param {string} props.city - Ville de l'employé.
 * @param {Function} props.setCity - Fonction pour mettre à jour la ville.
 * @param {Object|null} props.state - État sélectionné.
 * @param {Function} props.setState - Fonction pour mettre à jour l'état.
 * @param {string} props.zipCode - Code postal de l'employé.
 * @param {Function} props.setZipCode - Fonction pour mettre à jour le code postal.
 * @param {Object|null} props.department - Département sélectionné.
 * @param {Function} props.setDepartment - Fonction pour mettre à jour le département.
 * @param {Function} props.onSubmit - Fonction appelée lors de la soumission du formulaire.
 * @param {Function} props.onCancel - Fonction appelée lors de l'annulation du formulaire.
 * @param {string} props.formError - Message d'erreur du formulaire.
 *
 * @returns {JSX.Element} Le formulaire de création d'employé.
 */

export default function EmployeeForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  department,
  setDepartment,
  onSubmit,
  onCancel,
  formError,
}) {
  /**
   * Gère la soumission du formulaire.
   * @param {Event} e - Événement de soumission du formulaire.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted in EmployeeForm.jsx");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Affichage des erreurs */}
      <div className="error-container">
        {formError && (
          <p className="error-message" key={formError}>
            {formError}{" "}
          </p>
        )}
      </div>
      <div className="form_container">
        {/* Informations personnelles */}
        <fieldset>
          <legend>Personal Information</legend>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Date of Birth:</label>
          <CustomDatePicker
            selectedDate={dateOfBirth}
            onChange={setDateOfBirth}
            todayButton={<FontAwesomeIcon icon={faHome} />}
          />

          <label>Start Date:</label>
          <CustomDatePicker
            selectedDate={startDate}
            onChange={setStartDate}
            todayButton={<FontAwesomeIcon icon={faHome} />}
          />
          <label>Department:</label>
          <CustomDropdown
            options={departments}
            selectedOption={department}
            onChange={setDepartment}
          />
        </fieldset>
        {/* Adresse */}
        <fieldset>
          <legend>Address</legend>
          <label>Street:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label>State:</label>
          <CustomDropdown
            options={states.map((state) => ({
              value: state.abbreviation,
              label: state.name,
            }))}
            selectedOption={state}
            onChange={setState}
          />

          <label>Zip Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>
      </div>
      {/* Boutons d'action */}
      <div className="button-container">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" onClick={onCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
}
