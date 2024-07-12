import React, { useState } from 'react';

const CustomCheckbox = ({ id, label, value }) => {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="custom-checkbox">
        <label htmlFor={id} className={checked ? 'checked' : ''}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        onChange={handleCheckboxChange}
      />
      
        <span className="checkbox-custom"></span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
