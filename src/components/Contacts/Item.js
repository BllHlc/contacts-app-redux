import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { PhoneIcon, ChatIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(item.id));
    }
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        borderBottom={"1px solid #ccc"}
        py="1"
      >
        <Text fontWeight={"bold"} w={"40%"}
        >{item.name}</Text>
        <Text
          w={"40%"}
          fontWeight="medium"
        >{item.phone}</Text>
        <Flex color={"whatsapp.500"}
          cursor={"pointer"}
          w={"5%"}
          fontSize="1.1rem"
        >
          <PhoneIcon />
        </Flex>
        <Flex color={"blue.300"}
          cursor={"pointer"}
          w={"5%"}
          ms={"2"}
          fontSize="1.2rem"
        >
          <ChatIcon />
        </Flex>
        <Flex color={"orange.500"}
          cursor={"pointer"}
          w={"5%"}
          ms={"2"}
          fontSize="1.2rem"
        // onClick={() => handleEdit()}
        >
          <EditIcon />
        </Flex>
        <Flex color={"red.300"}
          cursor={"pointer"}
          w={"5%"}
          ms={"2"}
          fontSize="1.2rem"
          onClick={() => handleDelete()}
        >
          <DeleteIcon />
        </Flex>
      </Flex>
    </>
  );
};

export default Item;
