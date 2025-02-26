
import Select from "react-select";
import "../styles/dropdown.css"

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
