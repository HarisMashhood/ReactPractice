import React, { useState } from "react";

const App3 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState([]);

  const funct = (e) => {
    e.preventDefault();
    const newValues = {
      id: new Date().getTime().toString(),
      email: email,
      password: password
    };
    setValues([...values, newValues]);
    console.log(values);
  };
  return (
    <>
      <form action="" onSubmit={funct}>
        <div>
          <label htmlFor="email">enter email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">enter password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {values.map((curElem) => {
        return (
          <div style={{ display: "flex" }} key={curElem.id}>
            <p>{curElem.email}</p>
            <p>{curElem.password}</p>
          </div>
        );
      })}
    </>
  );
};

export default App3;
