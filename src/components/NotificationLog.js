import React from 'react';
import './styles.css'

export default function NotificationLog(props) {
  return (
    <div id='notificationLogContainer'>
      <h2>System Notifications:</h2>
      <ul id='logList'>
        {props.log.map((message, i) => {
          return <li key={i}>Log #{i + 1} {message}</li>
        })}
      </ul>
    </div>
  );
}