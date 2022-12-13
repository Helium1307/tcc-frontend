import React from "react";
import { Button, ButtonGroup as ChakraButtonGroup } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaShoppingBasket } from "react-icons/fa";

const ButtonGroup: React.FC = () => {
  return (
    <ChakraButtonGroup spacing={10}>
      <Button
        variant="contained"
        bgColor="#EE6400"
        leftIcon={<AiOutlineHome color="#FFD233" />}
        textColor="#fff"
        px={7}
        py={5}
      >
        Início
      </Button>
      <Button
        variant="contained"
        bgColor="#EE6400"
        leftIcon={<FaRegMoneyBillAlt color="#FFD233" />}
        textColor="#fff"
        px={7}
        py={5}
      >
        Financeiro
      </Button>
      <Button
        variant="contained"
        bgColor="#EE6400"
        leftIcon={<FaShoppingBasket color="#FFD233" />}
        textColor="#fff"
        px={7}
        py={5}
      >
        Produtos
      </Button>
      <Button
        variant="contained"
        bgColor="#EE6400"
        leftIcon={<BsGear color="#FFD233" />}
        textColor="#fff"
        px={7}
        py={5}
      >
        Configurações
      </Button>
      <Button
        variant="contained"
        bgColor="#2D65B6"
        leftIcon={<CgProfile />}
        textColor="#fff"
        px={7}
        py={5}
        ml={10}
      >
        Perfil
      </Button>
    </ChakraButtonGroup>
  );
};

export default ButtonGroup;
