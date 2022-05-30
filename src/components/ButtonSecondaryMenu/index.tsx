import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";

import { ViewIcon, DeleteIcon } from "@chakra-ui/icons";

export default function ServerSecondaryOptions() {
  return (
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            bg="transparent"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<ViewIcon />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                Ver colaborador
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<DeleteIcon />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Excluir
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
