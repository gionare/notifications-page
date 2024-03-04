import React, { useState } from "react";
import "./notificationsCard.css";
import MarkWebber from "./Users/MarkWebber";
import AngelaGray from "./Users/AngelaGray";
import JacobThompson from "./Users/JacobThompson";
import RizkyHasanuddin from "./Users/Rizky Hasanuddin";
import KimberlySmith from "./Users/KimberlySmith";
import NathanPeterson from "./Users/NathanPeterson";
import AnnaKim from "./Users/AnnaKim";

export default function NotificationsCard() {
  const [count, setCount] = useState(7);
  const [readAll, setReadAll] = useState(false);

  function handleReadAll() {}

  return (
    <div className="card">
      <div className="header">
        <h3 className="notifications">Notifications</h3>
        <div className="rectangle">
          <span>{count}</span>
        </div>
        <span className="mark-all-as-read">Mark all as read</span>
      </div>

      <div className="main">
        <MarkWebber count={count} setCount={setCount} />
        <AngelaGray count={count} setCount={setCount} />
        <JacobThompson count={count} setCount={setCount} />
        <RizkyHasanuddin count={count} setCount={setCount} />
        <KimberlySmith count={count} setCount={setCount} />
        <NathanPeterson count={count} setCount={setCount} />
        <AnnaKim count={count} setCount={setCount} />
      </div>
    </div>
  );
}
