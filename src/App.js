import React from 'react';
import { ChakraProvider, Box, Grid, theme, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PersonalStack from './PersonalStack';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher></ColorModeSwitcher>
      <PersonalStack></PersonalStack>
    </ChakraProvider>
  );
}

export default App;
