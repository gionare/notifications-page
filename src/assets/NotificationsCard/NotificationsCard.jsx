import React, { useState } from "react";
import "./notificationsCard.css";
import { StyledUserNames } from "../../styled-components/StyledUserNames";
import { StyledHeader } from "../../styled-components/StyledNotificationCard";
import usersData from "../NotificationsCard/users.json";

export default function NotificationsCard() {
  const [notifications, setNotifications] = useState(usersData);

  function handleIsRead(coment) {
    notifications[notifications.indexOf(coment)].hasBeenRead = true;
    setNotifications([...notifications]);
  }

  function handleAllRead() {
    setNotifications([
      ...notifications.map((user) => ({ ...user, hasBeenRead: true })),
    ]);
  }

  return (
    <div className="card">
      <StyledHeader>
        <div className="header">
          <h3 className="notifications">Notifications</h3>
          <div className="rectangle">
            <span>
              {notifications.filter((item) => !item.hasBeenRead).length}
            </span>
          </div>
          <span className="mark-all-as-read" onClick={handleAllRead}>
            Mark all as read
          </span>
        </div>
      </StyledHeader>

      <div className="main">
        {notifications &&
          notifications.map((user) => (
            <div
              key={user.id}
              onClick={() => handleIsRead(user)}
              className={
                user.hasBeenRead ? "notification-opened user-div" : "user-div"
              }
            >
              <div className="user-avatar-div">
                <img
                  src={user.author.img}
                  alt="MarkWebber"
                  className="user-avatar"
                />
              </div>
              <div className="user-div-letters">
                <StyledUserNames>{user.author.name}</StyledUserNames>
                <span className="interactive-message">{user.reaction}</span>
                {/* checks if user.link && if user.link.text is defined before rendering the <span> */}
                {user.link && user.link.text && (
                  <span className="reaction-content">{user.link.text}</span>
                )}
                <div className={user.hasBeenRead ? "Oval.read" : "Oval"}></div>
                <div className="time-ago"> {user.time}</div>
                {user.privateMessage && (
                  <div className="message-content">{user.privateMessage}</div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
