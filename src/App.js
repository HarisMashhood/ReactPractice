import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    Name: "Haris",
    Age: "24",
    degree: "Btech"
  });
  const func = () => {
    setState({ ...state, Name: "tom cruise" });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Name: {state.Name} &Age:{state.Age} &degree:{state.degree}
      </h2>
      <button onClick={func}>Update</button>
    </div>
  );
}
