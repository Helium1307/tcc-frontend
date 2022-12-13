import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Order } from "../../types/Order";
import OrderCard from "../UI/OrderCard";

const ShowOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // const salve = [
  //   {
  //     _id: "6397363f34693a0d505bcf6e",
  //     name: "pedido 0541",
  //     description: "1 pizza de mussarela",
  //     price: 32.5,
  //     employee_id: "6397347ae50b011116a4e31d",
  //     table_id: "635c594252c31ec7ba6bb2f0",
  //     dishes_ids: [
  //       {
  //         id: "639733a7e50b011116a4e319",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "321",
  //     name: "pedido 321",
  //     description: "1 pizza de mussarela",
  //     price: 32.5,
  //     employee_id: "6397347ae50b011116a4e31d",
  //     table_id: "635c594252c31ec7ba6bb2f0",
  //     dishes_ids: [
  //       {
  //         id: "639733a7e50b011116a4e319",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "123",
  //     name: "pedido 123",
  //     description: "1 pizza de mussarela",
  //     price: 32.5,
  //     employee_id: "6397347ae50b011116a4e31d",
  //     table_id: "635c594252c31ec7ba6bb2f0",
  //     dishes_ids: [
  //       {
  //         id: "639733a7e50b011116a4e319",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    api
      .get("/request")
      .then((res) => {
        const { data } = res;
        setOrders(data);
      })
      .catch((e) => {
        console.log("errozinho de cria: ", e);
      });
  }, []);

  return (
    <Stack isInline columnGap={6} flexGrow={1} flexWrap="wrap" maxW="100%">
      {orders?.map((order) => {
        console.log("ORDER: ", order);
        return <OrderCard key={order._id} order={order} />;
      })}
    </Stack>
  );
};

export default ShowOrders;
