import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div>
      <NavBar></NavBar>
      { alertVisible && <Alert onClose={() => setAlertVisible(false)}><h1>My alert</h1></Alert>}
      <Button color= {"secondary"} onClick={() => setAlertVisible(true)}> Click me</Button>
      <Hero title={"Tharusha"} body={"blah blah blah balbh b acha bancm"} ></Hero>
    </div>
    
    
  );
}

export default App;
