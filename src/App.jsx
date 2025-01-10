import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { pages } from './pages/pages';

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={pages} />
    </ChakraProvider>
  );
};

export default App;
