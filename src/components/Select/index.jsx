import { useState } from "react";

const Select = ({ label, options, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  return (
    <div>
      <label>{label}</label>

      <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        {options &&
          options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
