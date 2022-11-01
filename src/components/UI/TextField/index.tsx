import { Input, InputProps, Stack } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Controller, Control } from "react-hook-form";

export type TextFieldProps = InputProps & {
  name: string;
  control: Control<any, any>;
  error: string | undefined;
};

const TextField: FunctionComponent<TextFieldProps> = ({
  name,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack>
          <Input {...field} />
          {error && <h1>{error}</h1>}
        </Stack>
      )}
    />
  );
};

export default TextField;
