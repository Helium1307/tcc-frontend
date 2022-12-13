import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getDish } from "../../../services/Dish";
import { Dish } from "../../../types/Dish";

type PlateTableProps = {
  dishesIds: { id: string }[];
};
const PlateTableView: React.FC<PlateTableProps> = ({ dishesIds }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    dishesIds?.map(async (dishId, index) => {
      const data = await getDish(dishId.id);
      setDishes((dishes) => [...dishes, data]);
    });
  }, []);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>
              <Text>Qts</Text>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {dishes.map((dish, index) => (
            <Tr key={index + 1}>
              <Td>{dish.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlateTableView;
