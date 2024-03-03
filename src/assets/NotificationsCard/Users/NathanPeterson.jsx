import React from "react";
import "../NotificationsCard";
import NathanPetersonAvatar from "/images/avatar-nathan-peterson.webp";

export default function NathanPeterson() {
  return (
    <div className="user-div">
      <div className="user-avatar-div">
        <img
          src={NathanPetersonAvatar}
          alt="NathanPeterson"
          className="user-avatar"
        />
      </div>

      <div className="user-div-letters">
        <span className="user-name">Nathan Peterson</span>
        <span className="interactive-message">reacted to your recent post</span>
        <span className="reaction-content">
          5 end-game strategies to increase your win rate
        </span>
        <span className="time-ago">
          <br />2 weeks ago
        </span>
      </div>
    </div>
  );
}
