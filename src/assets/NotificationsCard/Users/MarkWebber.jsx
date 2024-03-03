import React from "react";
import "../NotificationsCard";
import MarkWebberAvatar from "/images/avatar-mark-webber.webp";

export default function MarkWebber({ handleNotification }) {
  return (
    <div className="user-div" onClick={handleNotification}>
      <div className="user-avatar-div">
        <img src={MarkWebberAvatar} alt="MarkWebber" className="user-avatar" />
      </div>

      <div className="user-div-letters">
        <span className="user-name">Mark Webber</span>
        <span className="interactive-message">reacted to your recent post</span>
        <span className="reaction-content">My first tournament today!</span>
        <div className="Oval"></div>
        <span className="time-ago">
          <br />
          1m ago
        </span>
      </div>
    </div>
  );
}
