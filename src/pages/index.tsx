import React, { ReactNode } from "react";
import Nav from "../components/Nav";

import SiteTable from "../components/SiteTableDesktopColaboradores";
import { Box, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import TabsDesktop from "../components/TabsDesktop";
import { api } from "../lib/api";
import { GetStaticProps } from "next";
import { Hero } from "../components/Hero";

import SiteMobile from "../components/SiteMobile";

type Props = { children: React.ReactNode; roles: any; agents: any };

const Index = ({ children, agents, roles, ...rest }: Props) => {
  return (
    <>
      <Nav children={""}></Nav>
      <Flex display={{ base: "flow", md: "none" }}>
        <SiteMobile items={[agents, roles]} />
      </Flex>

      <Flex display={{ base: "none", md: "flex" }}>
        <Spacer />
        <Spacer />
        <Box>
          <Hero />
          <TabsDesktop children={""} items={[agents, roles]} />
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data1 = await api.get("agents");
  const data2 = await api.get("roles");
  const agents = data1.data;
  const roles = data2.data;
  return { props: { agents, roles } };
};

export default Index;
