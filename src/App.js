import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Contacts from './components/Contacts';
import Edit from './components/Contacts/Edit';

function App() {
  return (
    <ChakraProvider>
      <Flex justify={"center"} height={"100vh"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          padding="5"
          paddingTop="1"
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="gray.100"
          mt="16"
          w={"600px"}
          minWidth={"600px"}
          flexDirection="column"
          height="fit-content"
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </BrowserRouter>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
