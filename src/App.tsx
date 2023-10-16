import Container from "react-bootstrap/Container";

import Heading from "./components/Heading";
import Instructors from ."/components/instructors";
import Students from './components/students';
import Users from "./components/Users";
import Whiteboard from "./components/Whiteboard";

function App(): JSX.Element {
  

  return (
    <Container>
      <Heading />
      <Instructors />
      <Students />
      <Whiteboard />
      <Users />
    </Container>
  );
}

export default App;
