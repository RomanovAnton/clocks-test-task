import React from "react";
import "./Clock.scss";

export default function Clock({ time }) {
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

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
      <select name="select">
        <option value="value1">Значение 1</option>
        <option value="value2">Значение 2</option>
        <option value="value3">Значение 3</option>
      </select>
    </div>
  );
}
