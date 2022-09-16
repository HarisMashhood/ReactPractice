import { useState } from "react";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: "1",
      Name: "Haris",
      Age: "24",
      degree: "Bte"
    },
    {
      id: "2",
      Name: "rs",
      Age: "44",
      degree: "Bth"
    },
    {
      id: "3",
      Name: "Has",
      Age: "84",
      degree: "tec"
    }
  ];
  const [state, setState] = useState(data);
  const func = () => {
    setState({ ...state, Name: "tom cruise" });
  };
  const function2 = (id) => {
    const newArray = state.filter((curElem) => {
      return curElem.id !== id;
    });
    setState(newArray);
  };
  const RemoveAll = () => {
    setState([]);
  };
  return (
    <>
      {state.map((curElem) => {
        return (
          <h2 key={curElem.id}>
            Name: {curElem.Name} &Age:{curElem.Age} &degree:{curElem.degree}
            <button onClick={() => function2(curElem.id)}>delete</button>
          </h2>
        );
      })}
      <button onClick={() => RemoveAll()}>remove all</button>
    </>
  );
}
