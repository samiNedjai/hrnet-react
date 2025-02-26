import { useActionState, useState } from "react";
import { Link } from "react-router-dom";
import CustomDatePicker from "../components/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { states, departments } from "../data/data";
import CustomDropdown from "../components/Dropdown";
import { useDispatch } from "react-redux";
import { addEmployeeAction } from "../actions/employeeAction";
import Modal from "samodal-react";
import Logo from "../assets/logo2.jpg"
import "../styles/createEmployee.css";

export default function CreateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Gestion des erreurs avec useActionState
  const [formError, setFormError] = useActionState((prevError, action) => action ?? "", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !state || !zipCode || !department) {
      setFormError("Please fill all fields");
      return;
    }
     // Réinitialiser le message d'erreur
     setFormError("");
    dispatch(
      addEmployeeAction({
        firstName,
        lastName,
        dateOfBirth: dateOfBirth.toISOString(), // Convertir en chaîne de caractères
        startDate: startDate.toISOString(), // Convertir en chaîne de caractères
        address: { street, city, state: state.value, zipCode },
        department: department.value,
      })
    );
    setIsModalOpen(true);
    // Reset form fields
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

  return (
    <div className="container">
      <header  className="header_create">
      <img src={Logo} alt="" />
      <div>
      <h1>HRnet</h1>
      <h2>Create Employee</h2>
      </div>
      
      <Link to="/employee-list" className="link-button">View Current Employees</Link>
      
      </header>
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleSubmit} >
        <fieldset>
        <legend>Address</legend>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Date of Birth:</label>
        
        <CustomDatePicker selectedDate={dateOfBirth} onChange={setDateOfBirth} todayButton={<FontAwesomeIcon icon={faHome} />} />
       
        <label>Start Date:</label>
        <CustomDatePicker selectedDate={startDate} onChange={setStartDate} todayButton={<FontAwesomeIcon icon={faHome} />} />
        <button type="submit">Save</button>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <label>Street:</label>
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

          <label>State:</label>
          <CustomDropdown
            options={states.map((state) => ({ value: state.name, label: state.name }))}
            selectedOption={state}
            onChange={setState}
          />

          <label>Zip Code:</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          <label>Department:</label>
        <CustomDropdown options={departments} selectedOption={department} onChange={setDepartment} />
        </fieldset>
      
      </form>
     
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Success">
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
}
