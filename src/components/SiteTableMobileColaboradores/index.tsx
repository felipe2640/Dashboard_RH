import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Avatar,
  HStack,
  Text,
  Flex,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from "react";

type Props = {
  items: any;
};

const SiteTableMobileColaboradores = ({ items, ...rest }: Props) => {
  const data = items[0].items;
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        return (
          <Accordion
            bg="white"
            allowToggle
            _hover={{ boxShadow: "10px 10px  #B5F1DD" }}
            key={key}
          >
            <AccordionItem>
              <AccordionButton _focus={{}}>
                <Box flex="1" textAlign="left">
                  <Heading fontSize="sm">Nome Completo</Heading>

                  <HStack alignItems="flex-center" ml="2" mt="2">
                    <Avatar
                      size={"sm"}
                      name="Luiz Zlochevsky"
                      color="#34423D"
                      bg="#B5F1DD"
                    />

                    <Text fontSize="sm" alignItems="flex-center">
                      {value.name}
                    </Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <HStack p={2}>
                  <Flex>
                    <Box p="4">
                      <Heading fontSize="sm">Departamento</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.department}
                      </Text>
                    </Box>
                    <Box p="4" ml="10">
                      <Heading fontSize="sm">Cargo</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.role}
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
                <HStack p={2}>
                  <Flex>
                    <Box p="4">
                      <Heading fontSize="sm">Unidade</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.department}
                      </Text>
                    </Box>
                    <Box p="4" ml="10">
                      <Heading fontSize="sm">Unidade</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.branch}
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
                <HStack p={2}>
                  <Flex>
                    <Box p="4">
                      <Heading fontSize="sm">Status</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.status}
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
                <Center>
                  <Button
                    leftIcon={<PlusSquareIcon color="#1DD195" />}
                    size="md"
                    height="48px"
                    bg="white"
                    width="200px"
                    border="2px"
                    borderColor="#B5F1DD"
                  >
                    Ações
                  </Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default SiteTableMobileColaboradores;
