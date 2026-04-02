import { useState } from "react";
import "./FormUser.css";

export default function FormUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}