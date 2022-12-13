import { Stack, VStack } from "@chakra-ui/react";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import NavBar from "../NavBar/NavBar";

type PageWithSidebarProps = PropsWithChildren & {
  children: ReactNode;
};

const PageWithSidebar: FC<PageWithSidebarProps> = ({ children }) => {
  return (
    <VStack>
      <NavBar />
      <Stack w="100%" h="90vh" paddingX={3}>
        {children}
      </Stack>
    </VStack>
  );
};

export default PageWithSidebar;
