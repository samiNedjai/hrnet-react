import Select from "react-select";

export default function CustomDropdown({ options, selectedOption, onChange }) {
    return <Select options={options} value={selectedOption} onChange={onChange} />;
}
