import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

type ActionButtonsProps = {
  text: string;
  onCancel: () => void;
};
const ActionButtons: React.FC<ActionButtonsProps> = ({ text, onCancel }) => {
  return (
    <ButtonGroup spacing={6}>
      <Button variant={"outline"} onClick={onCancel}>
        Cancelar
      </Button>
      <Button colorScheme={"blue"} type={"submit"}>
        {text}
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
