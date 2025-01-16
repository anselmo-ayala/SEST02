import { useState } from "react";

function LoginForm() {
  // email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Logged In:", { email, password });
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email-id">Email:</label>
        <input
          type="email"
          id="email-id"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password-id">Password:</label>
        <input
          type="password"
          id="password-id"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;


