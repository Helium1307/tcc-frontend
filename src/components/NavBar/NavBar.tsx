import { Flex } from "@chakra-ui/react";
import React from "react";
import ButtonGroup from "../UI/ButtonGroup/ButtonGroup";

function NavBar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bgColor="#E5AA12"
      width="100vw"
      py={3}
    >
      <ButtonGroup />
    </Flex>
  );
}

export default NavBar;
