import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex bgClip="text" m={6}>
    <Heading fontSize="32px" color="#34423D">
      Organização
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
