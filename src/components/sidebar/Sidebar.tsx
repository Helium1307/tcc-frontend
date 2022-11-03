import { Flex, Icon } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";
import { MdHome, MdAddShoppingCart, MdPerson, MdOutlineBuild, MdOutlineAttachMoney } from 'react-icons/md';

//MdHome

function Sidebar() {
  return (
    <Flex >
      <Container
        maxW="md"
        bg="teal"
        color="white"
        h="100vh"
        flexDir="column"
        justifyContent="space-between"
        p="3%"

      >
        ACADEMIA CODING
        <div >
          
          <Button colorScheme='teal' size='md' marginTop={35} marginLeft={5}  leftIcon = {<MdHome/>}>
            Home
          </Button>
        </div>
        <div>
          <Button colorScheme='teal' size='md' marginTop={35} marginLeft={5} leftIcon = {<MdAddShoppingCart/>}>
            Produtos
          </Button>
        </div>
        <div>
          <Button colorScheme='teal' size='md' marginTop={35} marginLeft={5} leftIcon = {<MdOutlineAttachMoney/>}>
            Financeiro
          </Button>
        </div>
        <div>
          <Button colorScheme='teal' size='md' marginTop={35} marginLeft={0} leftIcon = {<MdOutlineBuild/>}>
            Configurações
          </Button>
        </div>

        <div>
          <Button colorScheme='teal' size='md' bottom={0} left={10} position={"absolute"} marginBottom={10} leftIcon = {<MdPerson/>}>
            Perfil
          </Button>

        </div>

      </Container>
      <div>

      </div>
    </Flex>
  );
}

export default Sidebar;
