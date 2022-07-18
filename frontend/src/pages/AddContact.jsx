import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      return toast.warning("Please fill in all fields");
    }

    const checkNumber = contacts.contact.find(
      (contact) => contact.number === parseInt(number)
    );

    if (checkNumber) {
      return toast.warning("Number already exists");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      name,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added Succesfully");
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="row">
          <div className="col-md6s hadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn btn-block btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
