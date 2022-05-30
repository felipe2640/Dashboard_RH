import {
  Box,
  CloseButton,
  Text,
  Flex,
  useColorModeValue,
  BoxProps,
} from "@chakra-ui/react";

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
