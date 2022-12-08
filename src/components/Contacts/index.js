import React from "react";
import Form from "./Form";
import List from "./List";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

const Contacts = () => {
  const contacts = useSelector(contactSelectors.selectTotal);

  return (
    <>
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
    </>

  );
};

export default Contacts;
