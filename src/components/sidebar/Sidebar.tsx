import { background, Flex } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import React from "react";


function Sidebar() {
    return (

        <Flex>

            <Container maxW='md' bg='yellow.500' color='white' pos="sticky"
                left="5"
                h="95vh"
                marginTop="2.5vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                flexDir="column"
                justifyContent="space-between" p="5%"
                
                w="100%"
                
                mb={4}>
                ACADEMIA CODING

            </Container>



        </Flex>
    );
}

export default Sidebar;
