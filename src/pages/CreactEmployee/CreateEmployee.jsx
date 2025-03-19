import { useState } from "react";

import { useDispatch } from "react-redux";
import { addEmployeeAction } from "../../actions/employeeAction";
import Modal from "samodal-react";
import Header from "../../components/Header/Header";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import "../CreactEmployee/createEmployee.css";

/**
 * Page de création d'un employé.
 *
 * @component
 * @returns {JSX.Element} Le formulaire de création d'un employé avec une modale de confirmation.
 */

export default function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [formError, setFormError] = useState("");

  // États du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState(null);

  /**
   * Gère la soumission du formulaire d'ajout d'un employé.
   */
  const handleSubmit = () => {
    console.log("Received data in CreateEmployee.jsx:");
    // Vérification des champs obligatoires
    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !startDate ||
      !street ||
      !city ||
      !state ||
      !zipCode ||
      !department
    ) {
      setFormError("Please fill all fields");

      return;
    }

    setFormError("");
    // Dispatch de l'action Redux pour ajouter l'employé
    dispatch(
      addEmployeeAction({
        firstName,
        lastName,
        dateOfBirth: dateOfBirth.toISOString(),
        startDate: startDate.toISOString(),
        address: { street, city, state: state.value, zipCode },
        department: department.value,
      })
    );
    console.log("Action `addEmployeeAction` dispatched successfully.");
    setIsModalOpen(true);

    // Réinitialiser le formulaire
    setFirstName("");
    setLastName("");
    setDateOfBirth(null);
    setStartDate(null);
    setStreet("");
    setCity("");
    setState(null);
    setZipCode("");
    setDepartment(null);
  };
  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth(null);
    setStartDate(null);
    setStreet("");
    setCity("");
    setState(null);
    setZipCode("");
    setDepartment(null);
    setFormError(""); // Effacer le message d'erreur si existant
  };
  return (
    <div className="container">
      <Header />
      <EmployeeForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        startDate={startDate}
        setStartDate={setStartDate}
        street={street}
        setStreet={setStreet}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        zipCode={zipCode}
        setZipCode={setZipCode}
        department={department}
        setDepartment={setDepartment}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formError={formError}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Success"
      >
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
}
