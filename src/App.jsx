import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center text-5xl">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}

export default App;
