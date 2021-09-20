import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <h1>🎇 React App 🎇</h1>
      <p>{new Date().toLocaleString()}</p>
    </div>
  );
};

export default App;
