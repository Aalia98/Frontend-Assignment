import { useState } from "react";

const Select = ({ label, options, defaultValue, name }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  return (
    <div className="w-full h-auto p-4 mt-5 bg-slate-50 flex justify-between rounded border border-slate-200 font-bold">
      <label>{label}<span className="text-red-500">*</span></label>

      <select name={name} className="p-2 rounded bg-slate-100 border border-slate-300 outline-none w-1/2 text-slate-700" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
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
