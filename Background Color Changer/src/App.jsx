import { useState } from "react";
import Btn from "./components/button";

function App() {
  const [clr, setClr] = useState("olive");

  const clr1 = "violet";
  const clr2 = "orange";
  const clr3 = "pink";

  const changeColor = (color) => {
    console.log("Changing color to:", color); // Debug log
    setClr(color);
  };
  
  
  return (
    <div className="flex flex-col items-center h-screen bg-sky-800" style={{ backgroundColor: clr }}>
      <header className="flex justify-center p-5 w-full">
        <div className="inline-flex justify-center gap-4 border-black">
          <Btn onClick={() => changeColor(clr1)} bgColor={clr1} textColor="black" />
          <Btn onClick={() => changeColor(clr2)} bgColor={clr2} textColor="black" />
          <Btn onClick={() => changeColor(clr3)} bgColor={clr3} textColor="black" />
        </div>
      </header>
    </div>
  );
}

export default App;
