'use client'

import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { updateDateTime } from '@/utils/utils'

import styles from './TopMenu.module.scss'

const TopMenu = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [activeSessions, setActiveSessions] = useState(0)

  useEffect(() => {
    const socketConnection = io('http://localhost:3000')

    const interval = setInterval(() => {
      updateDateTime(setCurrentDate, setCurrentTime)
    }, 1000)

    socketConnection.on('activeSessions', (count: number) => {
      setActiveSessions(count)
    })

    return () => {
      clearInterval(interval)
      socketConnection.disconnect()
    }
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logo}>
          d<span>ZEN</span>code
        </div>
        <div className={styles.activeSessions}>
          Active Sessions: <span>{activeSessions}</span>
        </div>
        <div className={styles.dateWrapper}>
          <div className={styles.date}>
            <span>{currentDate}</span>
            <div className={styles.time}>
              <span className={styles.clock}>{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
