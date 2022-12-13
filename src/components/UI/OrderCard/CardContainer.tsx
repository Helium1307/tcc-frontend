import { Card, CardHeader, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type CardContainerProps = {
  infoText: string;
  children: ReactNode;
};

const CardContainer: React.FC<CardContainerProps> = ({
  infoText,
  children,
}) => {
  return (
    <Card bgColor="#eeecec" align="center" height="20rem">
      <CardHeader>
        <Text fontWeight={"semibold"}>{infoText}</Text>
      </CardHeader>
      {children}
    </Card>
  );
};

export default CardContainer;
