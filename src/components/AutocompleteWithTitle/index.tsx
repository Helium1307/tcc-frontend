import React, { ReactNode } from "react";
import { Text, VStack } from "@chakra-ui/react";

type AutocompleteWithTitleProps = {
  label: string;
  autocomplete: ReactNode;
};

const AutocompleteWithTitle: React.FC<AutocompleteWithTitleProps> = ({
  label,
  autocomplete,
}) => {
  return (
    <VStack width="20rem" alignItems="start">
      <Text fontWeight={"semibold"}>{label}</Text>
      {autocomplete}
    </VStack>
  );
};

export default AutocompleteWithTitle;
