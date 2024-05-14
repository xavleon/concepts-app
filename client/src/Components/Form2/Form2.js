import React from "react";
import "./Form2.css";
import { useState } from "react";
import icon from "./forms.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSetName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleSetPhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let formData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };

      console.log(formData);

      const res = await axios.post(
        "http://localhost:5000/api/messages/submission",
        formData
      );
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="form2">
        <h1>Form2</h1>
        <img src={icon} alt="icon" />

        <form onSubmit={handleSubmit}>
          <label for="name">Name: </label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            onChange={handleSetName}
            required
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleSetEmail}
          ></input>
          <br></br>
          <label for="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={handleSetPhone}
          ></input>
          <br></br>
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            cols="50"
            onChange={handleSetMessage}
          ></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <div className="message">message: {message}</div>
      </div>
    </div>
  );
};

export default Form2;
