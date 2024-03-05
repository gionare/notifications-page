import React, { useState } from "react";
import "./notificationsCard.css";
import { StyledUserNames } from "../../styled-components/StyledUserNames";
import { StyledHeader } from "../../styled-components/StyledNotificationCard";

export default function NotificationsCard() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      author: {
        name: "Mark Webber",
        img: "/images/avatar-mark-webber.webp",
        href: "#",
      },
      reaction: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      hasBeenRead: false,
    },
    {
      id: 2,
      author: {
        name: "Angela Gray",
        img: "/images/avatar-angela-gray.webp",
        href: "#",
      },
      reaction: "followed you",
      time: "5m ago",
      hasBeenRead: false,
    },
    {
      id: 3,
      author: {
        name: "Jacob Thompson",
        img: "/images/avatar-jacob-thompson.webp",
        href: "#",
      },
      reaction: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      hasBeenRead: false,
    },
    {
      id: 4,
      author: {
        name: "Rizky Hasanuddin",
        img: "/images/avatar-rizky-hasanuddin.webp",
        href: "#",
      },
      reaction: "sent you a private message",
      time: "5m ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      hasBeenRead: false,
    },
    {
      id: 5,
      author: {
        name: "KImberly Smith",
        img: "/images/avatar-kimberly-smith.webp",
        href: "#",
      },
      reaction: "commented on your picture",
      time: "1 week ago",
      hasBeenRead: false,
    },
    {
      id: 6,
      author: {
        name: "Nathan Peterson",
        img: "/images/avatar-nathan-peterson.webp",
        href: "#",
      },
      reaction: "reacted to your recent post",
      link: {
        text: " 5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      hasBeenRead: false,
    },
    {
      id: 7,
      author: {
        name: "Anna Kim",
        img: "/images/avatar-anna-kim.webp",
        href: "#",
      },
      reaction: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      hasBeenRead: false,
    },
  ]);

  return (
    <div className="card">
      <StyledHeader>
        <div className="header">
          <h3 className="notifications">Notifications</h3>
          <div className="rectangle">
            <span>{}</span>
          </div>
          <span className="mark-all-as-read">Mark all as read</span>
        </div>
      </StyledHeader>

      <div className="main">
        {notifications &&
          notifications.map((user) => (
            <div key={user.id} className="user-div">
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
                <span className="time-ago">{user.time}</span>
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
