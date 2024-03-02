import React from "react";
import "../NotificationsCard";
import JacobThompsonAvatar from "/images/avatar-jacob-thompson.webp";

export default function JacobThompson() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img
          src={JacobThompsonAvatar}
          alt="JacobThompson"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <span className="user-name">Jacob Thompson</span>
        <span className="interactive-message">has joined your group</span>
        <span className="group">Chess Club</span>
        <span className="time-ago">
          <br />1 day ago
        </span>
      </div>
    </div>
  );
}
