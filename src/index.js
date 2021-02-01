import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode="light" />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
