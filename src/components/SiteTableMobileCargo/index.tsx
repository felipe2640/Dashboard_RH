import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useBoolean,
  HStack,
  Text,
  Flex,
  Heading,
  Button,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from "react";

type Props = {
  items: any;
  name: string;
  department: string;
};

const SiteTableMobileCargo = ({ items, ...rest }: Props) => {
  const data = items[1].roles;
  const [flag, setFlag] = useBoolean();

  return (
    <>
      {Object.entries(data as unknown as any[]).map(([key, value]) => {
        return (
          <Accordion
            bg="white"
            allowToggle
            _hover={{ boxShadow: "10px 10px  #B5F1DD" }}
            key={key}
          >
            <AccordionItem>
              <AccordionButton onClick={setFlag.toggle}>
                <Box flex="1" textAlign="left">
                  <HStack p={2}>
                    <Flex>
                      <Box p="4">
                        <Heading fontSize="sm">Cargo</Heading>
                        <Text mt={2} fontSize="sm">
                          {value.name}
                        </Text>
                      </Box>

                      {flag ? (
                        <Box p="4" ml="2rem">
                          <Heading fontSize="sm">Department</Heading>
                          <Text mt={2} fontSize="sm">
                            {value.departament}
                          </Text>
                        </Box>
                      ) : (
                        ""
                      )}
                    </Flex>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <HStack p={2}>
                  <Flex>
                    <Box p="4">
                      <Heading fontSize="sm">Status</Heading>
                      <Text mt={2} fontSize="sm">
                        {value.agents_quantity}
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

export default SiteTableMobileCargo;
