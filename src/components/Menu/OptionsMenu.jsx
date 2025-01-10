import React from 'react'
import '../../styles/menu.css'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'

const OptionsMenu = () => {
  const image =
    'https://res.cloudinary.com/dgqyqd2pa/image/upload/v1734013011/Dise%C3%B1o_sin_t%C3%ADtulo_1_oub66g.png'
  return (
    <section className="main_menu">
      <nav className="navigation">
        <Image
          src={image}
          fit="contain"
          h="200px"
          w="200px"
          boxSize="150px"
          className="logo"
        />
        <Link to="/add"> Agregar vehiculo </Link>
        <Link to="/close"> Cerrar </Link>
        <Link to="/delete"> Eliminar </Link>
        <Link to="/money"> Recaudación </Link>
        <Link to="/parking"> Ver Playa </Link>
      </nav>
    </section>
  )
}

export default OptionsMenu
