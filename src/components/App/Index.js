import logo from "../../logo.svg";
import "./App.css";

import { Nav } from "../Nav";
import { Carosel } from "../Carosel";
import { heading } from "../../libs/data";

function App() {
  return (
    <div className="App">
      <Nav />
      {heading.map((item) => {
        return <Carosel text={item.heading} link={item.src} />;
      })}
    </div>
  );
}

export default App;


