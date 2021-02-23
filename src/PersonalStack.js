import React from 'react';
import { Heading, HStack, Box, Text } from '@chakra-ui/react';

const PersonalStack = props => {
  function Feature({ title, desc, ...rest }) {
    return (
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        {...rest}
      >
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
  return (
    <HStack w="100%" spacing={1} justify="center">
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature title="Save Money" desc="You deserve good things. " />
    </HStack>
  );
};

export default PersonalStack;
