import { Box, ChakraProvider, theme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box px="4">
        <Header />
        <About />
      </Box>
    </ChakraProvider>
  );
};

export default App;
