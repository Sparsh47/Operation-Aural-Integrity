import { Flex, Heading, Image } from "@chakra-ui/react";
import { navStyles, linksStyles, hoverStyles } from "./navbarStyles";
import Logo from "../../images/logo.jpg";

function Navbar() {
  return (
    <Flex sx={navStyles}>
      <Image src={Logo} alt="logo" w="4em" />
      <Heading
        p="5px"
        fontSize="40px"
        fontWeight="semibold"
        fontFamily="'Goldman', sans-serif"
      >
        Runtime Terror
      </Heading>
      {/* <Flex h="70%" align="center">
        <Flex sx={linksStyles}>
          <Flex justify="center" align="center">
            <Button
              w="100%"
              bg="#252525"
              color="white"
              _hover={{ bgColor: "#111" }}
            >
              Verify
            </Button>
          </Flex>
        </Flex>
      </Flex> */}
    </Flex>
  );
}

export default Navbar;
