import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';

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
