import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  Avatar,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import ButtonSecondaryMenu from "../ButtonSecondaryMenu";
import React from "react";
import SiteTableDesktopColaboradores from "../SiteTableDesktopColaboradores";
import SiteTableDesktopCargo from "../SiteTableDesktopCargo";

type Props = { children: React.ReactNode; items: any };

const Type = {
  Colaboradores: {
    columns: [
      {
        accessor: "image",
        Cell: ({ cell: { value } }) => <Avatar src={value} />,
      },
      {
        Header: "Nome completo",
        accessor: "name",
      },
      {
        Header: "Departamento",
        accessor: "department",
      },
      {
        Header: "Cargo",
        accessor: "role",
      },
      {
        Header: "Unidade",
        accessor: "branch",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) =>
          value == "active" ? (
            <Badge ml="1" colorScheme="green">
              Ativo
            </Badge>
          ) : (
            <Badge ml="1">Inativo</Badge>
          ),
      },
      {
        Header: " ",
        accessor: "agent_id",
        Cell: ({ cell: { value } }) => <ButtonSecondaryMenu />,
      },
    ],
  },
  Cargo: {
    columns: [
      {
        Header: "Cargo",
        accessor: "name",
      },
      {
        Header: "Departamento",
        accessor: "departament",
      },
      {
        Header: "Colaboradores",
        accessor: "agents_quantity",
        isNumeric: true,
      },
      {
        Header: " ",
        accessor: "agent_id",
        Cell: ({ cell: { value } }) => <ButtonSecondaryMenu />,
      },
    ],
  },
};

const TabsDesktop = ({ children, items, ...rest }: Props) => {
  return (
    <>
      <Tabs>
        <TabList color="#A3B8B0">
          <Tab>Colaboradores</Tab>

          <Tab>Cargo</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SiteTableDesktopColaboradores
              items={items[0]}
              columnsItens={Type.Colaboradores}
            />
          </TabPanel>
          <TabPanel>
            <SiteTableDesktopCargo items={items[1]} columnsItens={Type.Cargo} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TabsDesktop;
