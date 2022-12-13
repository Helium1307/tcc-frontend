import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Order } from "../../../types/Order";
import CardContainer from "./CardContainer";
import PlateTableView from "./PlateTableView";

type OrderCardProps = {
  order: Order;
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <CardContainer infoText={`MESA 1 | ${order.name}`}>
      <VStack h="100%" justifyContent={"space-around"}>
        <PlateTableView dishesIds={order.dishes_ids} />
        <HStack>
          <Button colorScheme={"green"}>
            <Text fontWeight={"semibold"}>Pronto</Text>
          </Button>
          <Button colorScheme={"blue"}>
            <Text fontWeight={"semibold"}>Aceitar</Text>
          </Button>
        </HStack>
      </VStack>
    </CardContainer>
  );
};

export default OrderCard;
