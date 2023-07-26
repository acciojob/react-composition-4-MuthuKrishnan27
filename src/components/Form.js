import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
