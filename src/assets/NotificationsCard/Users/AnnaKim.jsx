import React from "react";
import "../NotificationsCard";
import AnnaKimAvatar from "/images/avatar-anna-kim.webp";

export default function AnnaKim() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img src={AnnaKimAvatar} alt="MarkWebber" className="user-avatar" />
      </div>
      <div className="user-div-letters">
        <span className="user-name">Jacob Thompson</span>
        <span className="interactive-message">left the group</span>
        <span className="group">Chess Club</span>
        <span className="time-ago">
          <br />2 weeks ago
        </span>
      </div>
    </div>
  );
}
