import axios from "axios";
import { useState } from "react";
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
      //const res = await axios.post("http://localhost:5173/reg", data);
      const res = await axios.post(
       "https://react-backend-1-hx4f.onrender.com/reg",
      data,
       );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Iam Reg</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={changeName}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={changeName}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={changeName}
      />
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default Reg;
