import {
  Box,
  Button,
  FormControl,
  HStack,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";
import InputWithTitle from "../InputWithTitle/InputWithTitle";
import ActionButtons from "../UI/ActionButtons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TableAutocomplete from "../UI/TableAutocomplete";
import EmployeeAutocomplete from "../UI/EmployeeAutocomplete";
import AutocompleteWithTitle from "../AutocompleteWithTitle";
import { Dish } from "../../types/Dish";
import { getDishes } from "../../services/Dish";
import OrderList from "../OrderList";
import TextareaField from "../UI/TextareaField";

const initialValues = {
  employee: "",
  table: "635c594252c31ec7ba6bb2f0",
};

const schema = yup.object().shape({
  // dish: yup.string(),
  employee: yup.string(),
  table: yup.string(),
});

const OrderForm: React.FC = () => {
  const [readyOrder, setReadyOrder] = useState<Dish[]>([]);
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    getDishes().then((res) => {
      console.log("asdasd", res);
      setDishes(res);
    });
  }, []);

  const handleDeleteDish = (id: string) => {
    setSelectedDishes((curr) => curr.filter((dish) => dish._id !== id));
  };
  const onSubmit = (data: any) => console.log("on submit: ", data);
  return (
    <Stack height="100vh" spacing="10">
      <Box width="100%" borderBottom={"1px solid #C2C2C2"}>
        <Text fontSize="3xl" fontWeight={"semibold"}>
          Comanda
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <HStack>
            <Stack paddingLeft="20" width="65%" spacing="8">
              <HStack>
                <AutocompleteWithTitle
                  label="Funcionário"
                  autocomplete={
                    <EmployeeAutocomplete
                      control={control}
                      error={errors.employee?.message}
                      name="employee"
                    />
                  }
                />

                <AutocompleteWithTitle
                  label="Mesa"
                  autocomplete={
                    <TableAutocomplete
                      error={errors.table?.message}
                      control={control}
                      name="table"
                    />
                  }
                />
              </HStack>

              <VStack align="start">
                <Text fontWeight="semibold" fontSize="2xl">
                  Cardápio
                </Text>
                <TableContainer
                  width="40rem"
                  height="22rem"
                  whiteSpace="pre-wrap"
                  overflowY="auto"
                >
                  <Table size="lg">
                    <Tbody>
                      {dishes.map((dish, index) => (
                        <Tr key={dish._id}>
                          <Td>
                            <HStack>
                              <Button
                                onClick={() => {
                                  setSelectedDishes((curr) => [...curr, dish]);
                                }}
                              >
                                <AddIcon />
                              </Button>
                              <Text fontWeight={"semibold"}>{dish.name}</Text>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>

                <TextareaField
                  control={control}
                  name="description"
                  error={errors.employee?.message}
                  placeholder="Descrição..."
                  bgColor="#ececec"
                />
              </VStack>

              <ActionButtons
                onCancel={() => console.log("Salve")}
                text="Finalizar Pedido"
              />
            </Stack>

            <Stack>
              <OrderList
                onDelete={handleDeleteDish}
                selectedDishes={selectedDishes}
              />
            </Stack>
          </HStack>
        </FormControl>
      </form>
    </Stack>
  );
};

export default OrderForm;
