import { FormControl, Input, Stack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import InputWithTitle from "../InputWithTitle/InputWithTitle";
import ActionButtons from "../UI/ActionButtons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const initialValues = {
  prato: "",
};

const schema = yup.object().shape({
  prato: yup.string().required("Precisa escrever algo"),
});
const OrderForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });
  console.log("rerender", errors);

  const onSubmit = (data: any) => console.log("data: ", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Stack>
          <InputWithTitle
            error={errors.prato?.message}
            control={control}
            name="prato"
            title="Prato"
          />

          <ActionButtons
            onCancel={() => console.log("Salve")}
            text="Criar"
          ></ActionButtons>
        </Stack>
      </FormControl>
    </form>
  );
};

export default OrderForm;
