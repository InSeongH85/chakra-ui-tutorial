import React from 'react';
import { Center, Square, Circle, HStack, Box } from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';

const PersonalCenter = () => {
  return (
    <>
      <Center bg="tomato" h="50%" color="white">
        This is Center
      </Center>
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            2
          </Box>
        </Center>
      </HStack>
      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <AddIcon />
        </Square>
      </HStack>
    </>
  );
};

export default PersonalCenter;
