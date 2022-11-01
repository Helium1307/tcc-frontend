import { Flex, HStack } from "@chakra-ui/react";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";

type PageWithSidebarProps = PropsWithChildren & {
  children: ReactNode;
};

const PageWithSidebar: FC<PageWithSidebarProps> = ({ children }) => {
  return (
    <HStack>
      <Sidebar />
      <Flex>{children}</Flex>
    </HStack>
  );
};

export default PageWithSidebar;
