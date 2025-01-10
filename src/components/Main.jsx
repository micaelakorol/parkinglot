import React from 'react'
import OptionsMenu from './Menu/OptionsMenu'
import '../styles/main.css'
import Panel from './Panel/Panel'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main_container">
      <OptionsMenu />
      <section>
        <Panel />
        <Outlet />
      </section>
    </main>
  )
}

export default Main
