import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTimeZones } from "../../redux/timeZonesSlice";
import Clock from "../Clock/Clock";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimeZones());
  }, []);

  return (
    <div className="App">
      <Clock />
      <Clock />
    </div>
  );
}

export default App;
