import React, { useState } from "react";
import { ExampleComponent } from "./ExampleComponent";
import "./styles.css";
import { i18n } from "./translations/i18n";

export default function App() {
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <button value="arab" onClick={handleOnclick}>
        Arabic
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <button value="es" onClick={handleOnclick}>
        Spanish
      </button>
      <button value="zh" onClick={handleOnclick}>
        Chinese
      </button>
      <ExampleComponent lang={language} />
    </div>
  );
}
