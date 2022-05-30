import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Text,
  Flex,
  Box,
  HStack,
  Spacer,
  PopoverCloseButton,
  PopoverHeader,
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";

import { ViewIcon, DeleteIcon } from "@chakra-ui/icons";
import { setValues } from "framer-motion/types/render/utils/setters";
import { useState } from "react";

interface IfirstChildProps {
  name: string;
  updateName: (arg: string) => void;
}

const MenuMobile: React.FC<IfirstChildProps> = ({ name, updateName }) => {
  return (
    <Flex justifyContent="center" m={4}>
      <Popover isLazy>
        <PopoverTrigger>
          <Button
            w="194px"
            variant="ghost"
            rightIcon={<BsThreeDotsVertical />}
            justifyContent="space-between"
            fontWeight="normal"
            fontSize="sm"
          >
            {name}
          </Button>
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverHeader fontWeight="semibold">Categorias</PopoverHeader>

          <PopoverCloseButton />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
                onClick={() => updateName("Colaborador")}
              >
                Colaborador
              </Button>
              <Button
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
                onClick={() => updateName("Cargo")}
              >
                Cargo
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default MenuMobile;
