import logo from "../../logo.svg";
import "./App.css";
import { useState } from "react";

import { Nav } from "../Nav";
import { Carosel } from "../Carosel";
import { Button } from "../Button";
import { heading } from "../../libs/data";

function App() {
  const [Background, setBackground] = useState("");

  function toggleBg() {
    setBackground("blue");
  }

  return (
    <div className="App">
      <Nav colo={Background} />
      <Button toggle={toggleBg} />
      {heading.map((item) => {
        return <Carosel key={item.id} text={item.heading} link={item.src} />;
      })}
    </div>
  );
}

export default App;
