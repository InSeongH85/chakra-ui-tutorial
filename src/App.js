import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PersonalStack from './PersonalStack';
import PersonalWrap from './PersonalWrap';
import PersonalCenter from './PersonalCenter';
import PersonalContainer from './PersonalContainer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher></ColorModeSwitcher>
      <PersonalContainer />
      <PersonalStack />
      <PersonalWrap />
      <PersonalCenter />
    </ChakraProvider>
  );
}

export default App;
