import React, { useState } from 'react'
import OnlineCard from './Cards/OnlineCard'
import VolumeCard from './Cards/VolumeCard'
import SoundQualityCard from './Cards/SoundQualityCard'
import NotificationLog from './NotificationLog'

import './styles.css'

export default function Dashboard() {
  const [state, setState] = useState({
    notifications: [],
    online: true,
    volume: 50,
    volumeTooLoud: false,
    soundQuality: 2
  });

  const handleOnlineChange = () => {
    setState({
      ...state,
      online: !state.online,
      notifications: !state.online ? state.notifications :
        [...state.notifications, `Your application is offline. You won't be able to share or stream music to other devices.`]
    })
  };

  const handleVolumeChange = (e) => {
    console.log(e)
    if (e.target.attributes[8]) {

      let currVolume = e.target.attributes[8].value;

      if (state.volumeTooLoud === false && currVolume > 80) {
        console.log(state.volumeTooLoud)
        setState({
          ...state,
          volume: currVolume,
          volumeTooLoud: true,
          notifications: [...state.notifications, `Listening to music at a high volume could cause long-term hearing loss.`],
        })
      } else if (currVolume <= 80) {
        setState({
          ...state,
          volume: currVolume,
          volumeTooLoud: false,
        })
      }
    }
  }

  const handleQualityChange = (quality) => {
    if (quality === 1) {
      setState({
        ...state,
        soundQuality: quality,
        notifications: [...state.notifications, `Music quality is degraded. Increase quality if your connection allows it.`],
      })
    } else {
      setState({
        ...state,
        soundQuality: quality
      })
    }
  }

  return (
    <div id='Dashboard'>
      <h1> Welcome user!</h1>
      <div id='cardContainer'>
        <OnlineCard online={state.online} changed={handleOnlineChange} />
        <VolumeCard changed={handleVolumeChange} />
        <SoundQualityCard quality={state.soundQuality} changed={handleQualityChange} />
      </div>
      <NotificationLog id='log' log={state.notifications} />
    </div>
  )
}
