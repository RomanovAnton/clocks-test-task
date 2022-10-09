import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimeZones } from "../../redux/timeZonesSlice";
import Clock from "../Clock/Clock";
import "./App.scss";

function App() {
  const timeZones = useSelector((state) => state.timeZones.timeZones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimeZones());
  }, []);

  return (
    <>
      <Clock />
    </>
  );
}

export default App;
