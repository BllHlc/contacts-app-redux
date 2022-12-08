import { Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contactSlice';
import { useNavigate } from 'react-router-dom';

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;
    dispatch(
      editContact({
        id: contact.id,
        changes: { name, phone: number }
      })
    );
    navigate("/");
  };

  return (
    <FormControl onSubmit={handleSubmit} as="form" w="100%" px="2">
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
        Update
      </Button>
    </FormControl>
  );
};

export default EditForm;