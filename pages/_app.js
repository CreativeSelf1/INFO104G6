import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/styles.css"
// Codigo aqui estará presente en todas las páginas
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
