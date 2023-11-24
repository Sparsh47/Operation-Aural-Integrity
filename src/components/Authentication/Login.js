import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ visible, handleVisiblity }) => {
  const [show, setshow] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => {
    setshow(!show);
  };

  const inputStyles = {
    borderRadius: "5px",
    h: "60px",
    p: "20px",
  };

  const handleSubmit = async () => {
    setloading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      setloading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      toast({
        title: "Login Succesfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "botton",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
      history.push("/landing");
    } catch (err) {
      toast({
        title: "An Error Occured!",
        description: err.response.data.error,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "botton",
      });
      setloading(false);
    }
  };

  return (
    <VStack
      spacing="5px"
      px="40px"
      display={visible === false ? "block" : "none"}
    >
      <Box display="flex" flexDirection="column">
        <Text textAlign="center" fontSize="xl" fontWeight="normal" pt="10px">
          Continue to verify product ID
        </Text>
      </Box>
      <FormControl id="email" py="10px" isRequired>
        <Input
          value={email}
          placeholder="Enter Product ID/Barcode ID"
          onChange={(e) => setemail(e.target.value)}
          sx={inputStyles}
        ></Input>
      </FormControl>
      <FormControl id="password" py="10px" isRequired>
        <InputGroup>
          <InputRightElement h="100%" w="4.5rem"></InputRightElement>
        </InputGroup>
      </FormControl>
      <Flex w="100%" align="center" justify="center" py="25px">
        <Button
          w="100%"
          bg="ctaColor"
          _hover={{ bg: "ctaHover" }}
          color="white"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Verify
        </Button>
      </Flex>
    </VStack>
  );
};

export default Login;
