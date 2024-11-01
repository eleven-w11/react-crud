import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [rollNo, setrollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleRollNoChange = (event) =>{
    setrollNo(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", { name, rollNo, email, password });
      console.warn("app.js", response);

    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Roll No."
          value={rollNo}
          onChange={handleRollNoChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;