import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';

const theme = extendTheme({
  fonts: {
    heading: 'Alata',
    body: 'Josefin Sans',
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Products />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
