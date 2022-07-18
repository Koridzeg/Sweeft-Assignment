import React from "react";

const RegisterInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Enter your name"
        onChange={onChange}
      ></input>
      <input
        type="password"
        className="form-control"
        name="password"
        value={value.password}
        placeholder="Enter your password"
        onChange={onChange}
      ></input>
      <input
        type="password"
        className="form-control"
        name="password2"
        value={value.password2}
        placeholder="Confirm your password"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default RegisterInput;