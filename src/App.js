import "./css/globals.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import TopCardList from "./components/top-cards-list";
import Overview from "./components/overview";
import Switch from "./components/switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkmode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        ></Switch>
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
