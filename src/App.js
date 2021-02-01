import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
