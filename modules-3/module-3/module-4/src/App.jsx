import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Please enter your name.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (age < 18) {
      setMessage("Student must be at least 18 years old.");
      return;
    }

    setMessage("Registration successful!");

    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <div>
      <h1>🎓 Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;