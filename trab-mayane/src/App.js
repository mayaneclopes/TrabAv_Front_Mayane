import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Busca from './pages/Busca';
import Personagens from './pages/Personagens';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/busca",
    element: <Busca />,
  },
  {
    path: "/busca/resultado",
    element: <Personagens />
  }

])


function App() {
  return (
    <ChakraProvider theme={theme}>
      (
      <RouterProvider router={router} />
      )
    </ChakraProvider>
  );
}

export default App;
