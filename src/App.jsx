import React, { useState } from "react";
import "./App.scss";

function App() {
  const [date, setDate] = useState(new Date().toLocaleString());

  setInterval(() => {
    const newDate = new Date().toLocaleString();
    setDate(newDate);
  }, 1000);

  return (
    <div>
      <h1>React App</h1>
      <p>{date}</p>
      <div className="footer">
        <p>
          Basic starter project for building React apps with Webpack / Babel /
          Postcss / Sass / Tailwind
        </p>
        <a href="https://github.com/toniG-78/react-webpack-boilerplate-project.git" target="_blank">
          Download Repository
        </a>
      </div>
    </div>
  );
}

export default App;
