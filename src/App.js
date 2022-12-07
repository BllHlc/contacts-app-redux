import './App.css';
import Contacts from './components/Contacts';
import { ChakraProvider, Flex } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <Flex justify={"center"} height={"100vh"}>
        <Contacts />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
