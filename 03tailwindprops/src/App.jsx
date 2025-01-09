import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let user1 = {
    userName: "Abhi",
    age: 21,
  };
  let user2 = {
    userName: "Sam",
    age: 22,
  };

  return (
    <>
      <h1 className="flex bg-green-300 p-10 rounded-2xl text-black mb-4">
        Tailwind CSS
      </h1>
      <div className="flex space-x-4">
        <Card courseName="Chai Aur React" someObj={user1} />
        <Card courseName="Chai Aur React" someObj={user2} />
      </div>
    </>
  );
}

export default App;
