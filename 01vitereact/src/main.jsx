import { createRoot } from "react-dom/client";
//import React from "react";
import App from "./App.jsx";

function MyApp() {
  const username = "Abhi";
  return (
    <div>
      <h1>my custom app! | {username}</h1>
      <App />
    </div>
  );
}
//const anotherUserName = "Sam";
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google!
//   </a>
// );

// const reactElement = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "a",
//     {
//       href: "https://www.google.com",
//       target: "_blank",
//     },
//     "Click me to go to google"
//   ),
//   React.createElement(
//     "p",
//     null,
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptates modi, iure quas aperiam dolor quia cum eos similique ullam. Mollitia placeat accusamus et dolor facere illum dolorum quae error.",
//     <br />,
//     anotherUserName
//   )
// );

//createRoot(document.getElementById("root")).render(<MyApp />);
createRoot(document.getElementById("root")).render(<MyApp />);
