import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.contact.find(
    (contact) => contact.id === parseInt(id)
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      return toast.warning("Please fill in all fields");
    }

    const checkNumber = contacts.contact.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (checkNumber) {
      return toast.warning("Number already exists");
    }

    const data = {
      id: parseInt(id),
      name,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact added Succesfully");
    navigate("/");
  };

  const submitData = (e) => {
    e.preventDefault();
    const api = "/api/calls/";
    let user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    axios({
      method: "post",
      url: api,
      headers: { Authorization: `Bearer ${token}` },
      data: currentContact,
    });

  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 text-center">Edit Contact {id}</h1>
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
                    value="Update Contact"
                    className="btn btn-dark"
                  />
                  <Link to="/" type="submit" className="btn btn-danger ml-3">
                    {" "}
                    Cancel
                  </Link>
                  <button
                    type="button"
                    onClick={submitData}
                    className="btn btn-success"
                  >
                    Call Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Contact with id {id} does not exist{" "}
        </h1>
      )}
    </div>
  );
};

export default EditContact;
