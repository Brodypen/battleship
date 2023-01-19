import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <div className="p-10 flex justify-between ">
        <div></div>
        <header className="text-6xl text-black dark:text-white">BattleShip!</header>
        <DarkModeToggle></DarkModeToggle>
    </div>
  )
}

export default Header