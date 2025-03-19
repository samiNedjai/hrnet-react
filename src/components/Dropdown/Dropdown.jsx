import Select from "react-select";
import "../Dropdown/dropdown.css";

/**
 * Composant personnalisé pour un menu déroulant (`react-select`).
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <CustomDropdown
 *   options={[{ value: "option1", label: "Option 1" }]}
 *   selectedOption={{ value: "option1", label: "Option 1" }}
 *   onChange={(selected) => console.log(selected)}
 * />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.options - Tableau des options disponibles, chaque option étant un objet `{ value: string, label: string }`.
 * @param {Object|null} props.selectedOption - Option actuellement sélectionnée sous forme d'objet `{ value, label }`.
 * @param {Function} props.onChange - Fonction appelée lorsqu'une option est sélectionnée.
 * @returns {JSX.Element} Le composant `CustomDropdown`.
 */
export default function CustomDropdown({ options, selectedOption, onChange }) {
  return (
    <div className="custom-dropdown">
      <Select
        options={options}
        value={selectedOption}
        onChange={onChange}
        classNamePrefix="react-select" // Pour appliquer le CSS correctement
      />
    </div>
  );
}
