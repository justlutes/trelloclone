import React from 'react';

export default field => (
  <label htmlFor="input">
    <input {...field.input} placeholder={field.placeholder} type="text" className="input" />
    {field.meta.touched && field.meta.error && <p className="error">{field.meta.error}</p>}
  </label>
);
