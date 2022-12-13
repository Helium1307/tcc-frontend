import React, { FunctionComponent } from "react";
import { Controller, Control } from "react-hook-form";
import { Input, InputProps, Stack, Text, Textarea } from "@chakra-ui/react";

export type TextFieldProps = InputProps & {
  name: string;
  control: Control<any, any>;
  error: string | undefined;
};

const TextareaField: FunctionComponent<TextFieldProps> = ({
  name,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack width={"60%"}>
          <Text fontWeight="semibold" fontSize={"2xl"}>
            Observações
          </Text>
          <Textarea placeholder="Descrição..." bgColor="#e7e7e7" {...field} />
          {error && <h1>{error}</h1>}
        </Stack>
      )}
    />
  );
};

export default TextareaField;
