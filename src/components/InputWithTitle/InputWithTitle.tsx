import { Text, VStack } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import TextField, { TextFieldProps } from "../UI/TextField";
import { Control } from "react-hook-form";

type Props = TextFieldProps & {
  title: string;
};

const InputWithTitle: FunctionComponent<Props> = ({
  title,
  name,
  control,
  error,
}) => {
  return (
    <VStack alignItems="start">
      <Text fontWeight="600" fontSize={["sm", "md"]}>
        {title}
      </Text>
      <TextField error={error} control={control} name={name} />
    </VStack>
  );
};

export default InputWithTitle;
