import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import { ChakraProvider, background } from '@chakra-ui/react';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
