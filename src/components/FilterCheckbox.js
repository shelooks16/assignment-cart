import React from 'react';

const FilterCheckbox = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FilterCheckbox;
