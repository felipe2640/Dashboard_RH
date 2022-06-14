import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  VStack,
  HStack,
  Menu,
  Avatar,
  Spacer,
} from "@chakra-ui/react";

const MobileNav = ({ ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <HStack>
              <Avatar
                size={"sm"}
                name="Luiz Zlochevsky"
                color="#34423D"
                bg="#B5F1DD"
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">Luiz Zlochevsky</Text>
                <Text fontSize="xs" color="gray.600">
                  meus dados
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}></Box>
            </HStack>
          </Menu>
        </Flex>
      </HStack>
      <Spacer display={{ base: "flex", md: "none" }} />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>
      <Spacer display={{ base: "flex", md: "none" }} />
    </Flex>
  );
};

export default MobileNav;
