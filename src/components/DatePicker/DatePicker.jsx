import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../DatePicker/datePicker.css";

/**
 * Composant personnalisé de sélection de date utilisant `react-datepicker`.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <CustomDatePicker selectedDate={new Date()} onChange={(date) => console.log(date)} />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Date|null} props.selectedDate - La date actuellement sélectionnée.
 * @param {Function} props.onChange - Fonction appelée lorsqu'une nouvelle date est sélectionnée.
 * @returns {JSX.Element} Le composant `CustomDatePicker`.
 */

export default function CustomDatePicker({ selectedDate, onChange }) {
  return (
    <div className="custom-datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy" // Format d'affichage de la date
        showMonthDropdown // Permet de choisir le mois dans un menu déroulant
        showYearDropdown // Permet de choisir l'année dans un menu déroulant
        dropdownMode="select" //Mode de sélection pour mois et année
        todayButton="Today" //  Bouton permettant de revenir à la date du jour
      />
    </div>
  );
}
