import React from 'react'
import '../../styles/panel.css'
const Panel = () => {
  const today = new Date()
  const day = String(today.getDate()) // Asegura dos dígitos
  const month = String(today.getMonth() + 1) // Mes empieza en 0
  const year = today.getFullYear()

  return (
    <section>
      <h1 className="title_panel">Panel</h1>
      <b>
        🕛{day}/{month}/{year}
      </b>
    </section>
  )
}

export default Panel
