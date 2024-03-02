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
  let isRead = "true";

  return (
    <div className="card">
      <div className="header">
        <h3 className="notifications">Notifications</h3>
        <div className="rectangle">
          <span>3</span>
        </div>
        <span className="mark-all-as-read">Mark all as read</span>
      </div>

      <div className="main">
        <MarkWebber />
        <AngelaGray />
        <JacobThompson />
        <RizkyHasanuddin />
        <KimberlySmith />
        <NathanPeterson />
        <AnnaKim />
      </div>
    </div>
  );
}
