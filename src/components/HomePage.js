import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar.jsx";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Box
        mt="200px"
        w="100%"
        centerContent
        h="calc(100vh - 270px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="50px" fontWeight="bold" fontFamily="serif">
          Welcome to Operation Aural Integrity!
        </Text>
        <Text mb="10px" fontSize="30px" fontFamily="serif">
          Customer Portal
        </Text>
        <FormControl
          id="productIdBarcodeId"
          py="10px"
          isRequired
          display="flex"
          w="40%"
          border
          borderWidth="1px"
          borderRadius="100px"
          px="10px"
        >
          <Input
            placeholder="Enter Product ID/Barcode ID"
            mr="20px"
            borderRadius="100px"
          />
          <Button
            color="#fff"
            backgroundColor="#252525"
            _hover={{ bgColor: "#111" }}
            px="2rem"
            py="1rem"
            borderRadius="100px"
          >
            Verify
          </Button>
        </FormControl>
        <Box
          display="flex"
          w="80%"
          h="60%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Card
            maxW="420px"
            h="250px"
            borderRadius="20px"
            p="5px"
            borderTop="1px solid #eee"
          >
            <CardBody fontFamily="Inter, sans-serif">
              <Stack>
                <Flex h="50px" alignItems="center">
                  <Text fontSize="30px" fontWeight="800" mb="5px">
                    T.
                  </Text>
                  <Heading
                    ml="10px"
                    fontSize="22px"
                    fontWeight="semibold"
                    color="primaryTextColor"
                  >
                    Transparency
                  </Heading>
                </Flex>
                <Divider />
                <Text
                  fontSize="18px"
                  textAlign="justify"
                  color="secondaryTextColor"
                  py="8px"
                >
                  Blockchain Scanner (Tezos) will make the transactions
                  pseudo-anonymous as a result consumer knows the address of the
                  seller/provider.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
            maxW="420px"
            h="250px"
            borderRadius="20px"
            p="5px"
            borderTop="1px solid #eee"
          >
            <CardBody fontFamily="Inter, sans-serif">
              <Stack>
                <Flex h="50px" alignItems="center">
                  <Text fontSize="30px" fontWeight="800" mb="5px">
                    A.
                  </Text>
                  <Heading
                    ml="10px"
                    fontSize="22px"
                    fontWeight="semibold"
                    color="primaryTextColor"
                  >
                    Authenticity
                  </Heading>
                </Flex>
                <Divider />
                <Text
                  fontSize="18px"
                  textAlign="justify"
                  color="secondaryTextColor"
                  py="8px"
                >
                  Consumers will know the exact source from which the product is
                  listed thus preventing fraud.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
            maxW="420px"
            h="250px"
            borderRadius="20px"
            p="5px"
            borderTop="1px solid #eee"
          >
            <CardBody fontFamily="Inter, sans-serif">
              <Stack>
                <Flex h="50px" alignItems="center">
                  <Text fontSize="30px" fontWeight="800" mb="5px">
                    T.
                  </Text>
                  <Heading
                    ml="10px"
                    fontSize="22px"
                    fontWeight="semibold"
                    color="primaryTextColor"
                  >
                    Traceability
                  </Heading>
                </Flex>
                <Divider />
                <Text
                  fontSize="18px"
                  textAlign="justify"
                  color="secondaryTextColor"
                  py="8px"
                >
                  Consumers have full access to the transactions being made
                  while maintaining anonymity is an excellent way to trace the
                  activities of the producer and get to know if he/she is a
                  fraud or not.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
