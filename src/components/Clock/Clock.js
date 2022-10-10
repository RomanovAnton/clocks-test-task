import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import getTime from "../../utils/getTime";
import "./Clock.scss";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const timeZonesList = useSelector((state) => state.timeZones.timeZones);
  const [selectValue, setSelectValue] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(getTime(parseInt(selectValue)));
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, [selectValue]);

  useEffect(() => {
    if (timeZonesList.length > 0) {
      setSelectValue(timeZonesList[0].timezone);
    }
  }, [timeZonesList]);

  const min = time.getMinutes();
  const sec = time.getSeconds();
  const hour = time.getHours();

  const digitalHour = hour < 10 ? `0${hour}` : `${hour}`;
  const digitalMin = min < 10 ? `0${min}` : `${min}`;
  const digitalSec = sec < 10 ? `0${sec}` : `${sec}`;

  return (
    <div className="clock-block">
      <div className="analog-clock">
        <div
          className="analog-clock__hour"
          style={{ transform: `rotate(${hour * 30 + (min * 6) / 12}deg)` }}
        ></div>
        <div
          className="analog-clock__min"
          style={{ transform: `rotate(${min * 6}deg)` }}
        ></div>
        <div
          className="analog-clock__sec"
          style={{ transform: `rotate(${sec * 6}deg)` }}
        ></div>
      </div>
      <div className="digital-clock">{`${digitalHour}:${digitalMin}:${digitalSec}`}</div>

      {timeZonesList.length > 0 ? (
        <select
          className="select"
          onChange={(evt) => {
            setSelectValue(evt.target.value);
            setTime(getTime(parseInt(evt.target.value)));
          }}
          value={selectValue}
        >
          {timeZonesList.map((item) => (
            <option value={item.timezone} key={item.timezone}>
              {item.name}
            </option>
          ))}
        </select>
      ) : (
        <p className="loader">Loading...</p>
      )}
    </div>
  );
}
