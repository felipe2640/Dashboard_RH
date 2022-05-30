import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#E5E5E5",
        color: "black",
        fonts: "Poppins",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
      p: {
        fonts: {
          heading: "Poppins 600",
          body: `Poppins 400`,
          mono: "Poopins 400",
        },
      },
    },
  },
  fonts: {
    heading: "Poppins 600",
    body: `Poppins 400`,
    mono: "Poopins 400",
  },
  breakpoints,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              color: "#A3B8B0",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transform: "scale(0.85) translateY(-24px)",
            },
          },
        },
      },
    },
  },
});

export default theme;
