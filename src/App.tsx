import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";
import GodModes from "./components/GodModes";
import NavigationBar from "./components/NavigationBar";
import Help from "./components/Help";

function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>("Home");

  const components: { [key: string]: any } = {
    Home: <Home />,
    About: <About />,
    Links: <Links />,
    GodModes: <GodModes />,
    Help: <Help />,
  };

  return (
    <div>
      <NavigationBar setCurrentPage={setSelectedComponent} />
      <div id="spacerTop" className="h-10 m:h-12" />
      <div className="flex justify-center font-robotoCondensed">
        {components[selectedComponent]}
      </div>
    </div>
  );
}

export default App;
