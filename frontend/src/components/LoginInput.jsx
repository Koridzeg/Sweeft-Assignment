import React from "react";

const LoginInput = ({ value, onChange }) => {
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
    </div>
  );
};

export default LoginInput;