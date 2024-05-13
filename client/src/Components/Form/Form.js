import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setFormData({ ...formData, phone: event.target.value });
  };
  const handleMessageChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <div class="form">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label for="name">Name:</label>
          <input
            value={formData.name}
            type="text"
            id="name"
            name="name"
            required
            onChange={handleNameChange}
          ></input>
          <br></br>
          <label for="email">Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            id="email"
            name="email"
            required
          ></input>
          <br></br>
          <label for="phone">Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            id="phone"
            name="phone"
            required
          ></input>
          <br></br>
          <label for="message">Message:</label>
          <input
            id="message"
            value={formData.message}
            onChange={handleMessageChange}
            name="message"
            required
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
