import React, { useEffect, useState } from "react";
import {
  Stack,
  Center,
  Text,
  List,
  ListItem,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Dish } from "../../types/Dish";
import { DeleteIcon } from "@chakra-ui/icons";
// import { Container } from './styles';
type OrderListProps = {
  selectedDishes: Dish[];
  onDelete: (id: string) => void;
};

const OrderList: React.FC<OrderListProps> = ({ selectedDishes, onDelete }) => {
  const [orderPrice, setOrderPrice] = useState<number>(0);

  useEffect(() => {
    selectedDishes.map((dish) => {
      console.log(dish);
      setOrderPrice((curr) => curr + dish.price);
    });
  }, [selectedDishes]);

  return (
    <Stack
      height="45rem"
      width="30rem"
      borderRadius="15px"
      border={"1px solid grey"}
      flexDirection="column"
    >
      <Center bgColor="#dfdfdf" borderRadius="15px 15px 0px 0px" p="8">
        <Text fontSize="2xl">Resumo do Pedido</Text>
      </Center>

      <List overflowY={"auto"}>
        {selectedDishes?.map((dish) => (
          <ListItem key={dish._id} p="3">
            <HStack>
              <Button onClick={(e) => onDelete(dish._id)}>
                <DeleteIcon color="red" />
              </Button>
              <Flex flex={1} justifyContent="space-between">
                <Text fontWeight="semibold">{dish.name}</Text>
                <Text fontWeight="semibold">{dish.price}</Text>
              </Flex>
            </HStack>
          </ListItem>
        ))}
      </List>

      <HStack>
        <Text>O valor do pedido é: {orderPrice}</Text>
      </HStack>
    </Stack>
  );
};

export default OrderList;
