import React from "react";
import {
  Avatar,
  Flex,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  HStack,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function AvatarPopover() {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          icon={<AiOutlineUser fontSize="1.5rem" />}
          _hover={{ cursor: "pointer" }}
        />
      </PopoverTrigger>
      <PopoverContent maxW="250px" mr="50px" mt="10px">
        <Flex display="flex" align="start" direction="column" p="15px">
          <ChakraLink
            as={ReactRouterLink}
            to="/profile"
            fontSize="lg"
            fontWeight="regular"
            w="100%"
            _hover={{ textDecor: "none" }}
            mb="5px"
          >
            <HStack align="center" h="75px">
              <Avatar
                name="John Doe"
                _hover={{ cursor: "pointer" }}
                w="60px"
                h="60px"
              />
              <Text
                ml="5px"
                fontWeight="semibold"
                color="primaryTextColor"
                fontSize="20px"
              >
                John Doe
              </Text>
            </HStack>
          </ChakraLink>
          <Divider />
          <Link
            href="#"
            fontSize="lg"
            fontWeight="regular"
            w="100%"
            textAlign="left"
            _hover={{ textDecor: "none", bg: "gray.100" }}
            p="10px"
            borderRadius="10px"
            mt="10px"
          >
            <HStack align="center" color="secondaryTextColor">
              <FontAwesomeIcon icon={faSignOut} />
              <Text fontWeight="semibold" ml="5px" onClick={logoutHandler}>
                Log Out
              </Text>
            </HStack>
          </Link>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}

export default AvatarPopover;
