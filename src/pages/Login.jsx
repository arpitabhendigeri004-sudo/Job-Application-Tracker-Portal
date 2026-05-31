import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem(
      "token",
      res.data.token
    );

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <br />

      <Link to="/register">Create Account</Link>
    </div>
  );
}