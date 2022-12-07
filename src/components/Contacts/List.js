import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactSelectors, clearContacts } from "../../redux/contactSlice";
import Item from "./Item";

const List = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.selectAll);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(clearContacts());
    }
  };

  return (
    <Flex flexDirection={"column"} width={"100%"} p="3">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb="3"
      />
      {filteredContacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
      {contacts.length > 0 && (
        <Button
          colorScheme="red"
          w="fit-content"
          mt="4"
          onClick={() => handleDeleteAll()}
        >
          Clear All
        </Button>
      )}
    </Flex>
  );
};

export default List;
