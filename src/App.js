import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PersonalStack from './PersonalStack';
import PersonalWrap from './PersonalWrap';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher></ColorModeSwitcher>
      <>
        <PersonalStack />
        <PersonalWrap />
      </>
    </ChakraProvider>
  );
}

export default App;
