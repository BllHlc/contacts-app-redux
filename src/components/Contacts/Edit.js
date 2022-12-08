import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import EditForm from './EditForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';

const Edit = () => {
  const { id } = useParams();
  const contact = useSelector((state) => contactSelectors.selectById(state, id));
  const navigate = useNavigate();

  if (!contact) {
    navigate("/");
    window.location.href = "/";
  }

  return (
    <Flex my={3} flexDirection="column" alignItems="center" w={"100%"} px="3">
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
        marginBottom="5"
        w={"fit-content"}>
        Edit Contact
      </Text>
      <EditForm contact={contact} />
    </Flex>
  );
};

export default Edit;