import React from "react";
import Form from "./Form";
import List from "./List";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

const Contacts = () => {
  const contacts = useSelector(contactSelectors.selectTotal);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      padding="5"
      paddingTop="1"
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      mt="16"
      maxWidth={"600px"}
      flexDirection="column"
      height="fit-content"
    >
      <Form />
      <List />
      <Flex
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        mt="3"
      >
        {" "}
        Total Contacts: {contacts}{" "}
      </Flex>
    </Flex>
  );
};

export default Contacts;
