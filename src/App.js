import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const Appwrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

function App() {
  return (
    <Appwrapper>
      <Flex justify={"center"}>
        <Title color={"green"}>Console cmd 2022. ©Etibar</Title>
      </Flex>
      <Flex direction={"column"} margin={"10px 0"}>
        <Console color={"green"}/>
        <Button outline color={"green"} align={"flex-end"}>Send</Button>
      </Flex>
    </Appwrapper>
  );
}

export default App;
