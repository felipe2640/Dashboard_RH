import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("#f8faf9", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <MobileNav />
    </Box>
  );
}
