import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './components/Header';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
};

export default App;
