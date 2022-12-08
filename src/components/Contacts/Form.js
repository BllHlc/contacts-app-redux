import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;
    dispatch(addContact({ id: nanoid(), name, phone: number }));
    setName("");
    setNumber("");
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w={"100%"}
      px="3"
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        marginBottom="5"
        w={"fit-content"}
      >
        Contact App
      </Text>
      <FormControl onSubmit={handleSubmit} as="form" w="100%">
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          my="2"
        />
        <Input
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          my="2"
        />
        <Button
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          w="100%"
          color="white"
          type="submit"
          onClick={handleSubmit}
          _hover={{
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            boxShadow: "xl",
          }}
          disabled={!name || !number}
        >
          Add
        </Button>
      </FormControl>
    </Flex>
  );
};

export default Form;
