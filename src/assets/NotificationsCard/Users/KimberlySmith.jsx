import React from "react";
import "../NotificationsCard";
import KimberlySmithAvatar from "/images/avatar-kimberly-smith.webp";

export default function KimberlySmith() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img
          src={KimberlySmithAvatar}
          alt="KimberlySmith"
          className="user-avatar"
        />
      </div>
      <div className="user-div-letters">
        <span className="user-name">KImberly Smith</span>
        <span className="interactive-message">commented on your picture</span>
        <span className="time-ago">
          <br />1 week ago
        </span>
      </div>
    </div>
  );
}
