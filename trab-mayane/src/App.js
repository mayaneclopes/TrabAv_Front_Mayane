import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Busca from './pages/Busca';
import Filmes from './pages/Filmes';
import Feiticos from './pages/Feiticos';
import Livros from './pages/Livros';
import Pocoes from './pages/Pocoes';
import Personagens from './pages/Personagens';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Busca />,
  },
  {
    path: "/search/character/:id",
    element: <Personagens />
  },
  {
    path: "/search/movie/:id",
    element: <Filmes />,
  },
  {
    path: "/search/spell/:id",
    element: <Feiticos />,
  },
  {
    path: "/search/book/:id",
    element: <Livros />,
  },
  {
    path: "/search/potion/:id",
    element: <Pocoes />,
  },
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
