import  { useState } from "react";
import CustomDatePicker from "../components/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/createEmployee.css"



export default function CreateEmployee() {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
    return (
        <div className="container">
          <h2>Create Employee</h2>
          <form >
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    
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
    
            <fieldset>
              <legend>Address</legend>
              <label>Street:</label>
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
    
              <label>City:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
    
              <label>State:</label>
         
    
              <label>Zip Code:</label>
              <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </fieldset>
    
            <label>Department:</label>
    
            <button type="submit">Save</button>
          </form>
        </div>
      );
    };
