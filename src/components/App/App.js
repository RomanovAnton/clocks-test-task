import "./App.scss";
import { useState } from "react";
import Clock from "../Clock/Clock";
import getData from "../../utils/api";

function App() {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return <Clock time={time} />;
}

export default App;
