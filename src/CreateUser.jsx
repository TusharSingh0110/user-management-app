import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    address: { street: "", city: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        alert("User created successfully!");
      })
      .catch((error) => console.error("Error creating user", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="phone" onChange={handleChange} placeholder="Phone" required />
      <input name="street" onChange={handleChange} placeholder="Street" required />
      <input name="city" onChange={handleChange} placeholder="City" required />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
