import { Flex } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import React from "react";

function Sidebar() {
  return (
    <Flex>
      <Container
        maxW="md"
        bg="yellow.500"
        color="white"
        h="100vh"
        flexDir="column"
        justifyContent="space-between"
        p="3%"
      >
        ACADEMIA CODING
      </Container>
    </Flex>
  );
}

export default Sidebar;
