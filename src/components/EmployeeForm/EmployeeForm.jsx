import CustomDatePicker from "../DatePicker/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CustomDropdown from "../Dropdown/Dropdown";
import { states, departments } from "../../data/data";
import "../EmployeeForm/employeeForm.css";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted in EmployeeForm.jsx");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="error-container">
        {formError && (
          <p className="error-message" key={formError}>
            {formError}{" "}
          </p>
        )}
      </div>
      <div className="form_container">
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
              value: state.name,
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

      <div className="button-container">
        <button type="submit" className="save-button">Save</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}
