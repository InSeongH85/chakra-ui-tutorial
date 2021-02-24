import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PersonalStack from './PersonalStack';
import PersonalWrap from './PersonalWrap';
import PersonalCenter from './PersonalCenter';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher></ColorModeSwitcher>
      <>
        <PersonalStack />
        <PersonalWrap />
        <PersonalCenter />
      </>
    </ChakraProvider>
  );
}

export default App;
