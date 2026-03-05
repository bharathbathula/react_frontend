import { useState } from "react";
import axios from "axios";

function Reg() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeName = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await axios.post(
        "https://react-backend-1-hx4f.onrender.com/reg",
        data,
      );

      alert(res.data);
    } catch (err) {
      alert(err.response?.data || "Error occurred");
    }
  };

  return (
    <>
      <h1>Register</h1>

      <input
        onChange={changeName}
        name="username"
        placeholder="Enter username"
      />

      <input onChange={changeName} name="email" placeholder="Enter email" />

      <input
        onChange={changeName}
        name="password"
        type="password"
        placeholder="Enter password"
      />

      <button onClick={submit}>Register</button>
    </>
  );
}

export default Reg;
