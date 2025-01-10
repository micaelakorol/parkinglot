import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Money from '../components/Menu/Options/Money/Money'
import SeeParking from '../components/Menu/Options/SeeParking/SeeParking'
import AddVehicle from '../components/Menu/Options/AddVehicle/AddVehicle'
import CloseVehicle from '../components/Menu/Options/CloseVehicle/CloseVehicle'
import DeleteVehicle from '../components/Menu/Options/DeleteVehicle/DeleteVehicle'
import Main from '../components/Main'

export const pages = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'add',
        element: <AddVehicle />,
      },
      {
        path: 'close',
        element: <CloseVehicle />,
      },
      {
        path: 'delete',
        element: <DeleteVehicle />,
      },
      {
        path: 'money',
        element: <Money />,
      },
      {
        path: 'parking',
        element: <SeeParking />,
      },
    ],
  },
])
