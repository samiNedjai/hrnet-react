import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datePicker.css"


export default function CustomDatePicker({ selectedDate, onChange }) {
  return (
    <div className="custom-datepicker">
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="MM/dd/yyyy"
      showMonthDropdown  // Permet de choisir le mois dans un menu déroulant
      showYearDropdown   // Permet de choisir l'année dans un menu déroulant
      dropdownMode="select"  // Affiche des menus déroulants pour mois et année
      todayButton="Today"  // Ajoute un bouton pour revenir à la date actuelle
    />
    </div>
  )
}
