import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import lightBulb from './bulb.svg'
import { motion } from "framer-motion";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false)
      document.body.style.backgroundColor = "white";
    }
    if (!darkMode) {
      setDarkMode(true)
      document.body.style.backgroundColor = "#36454F";
    }
  }

  return (
    <div className="App">
      <div className='bulb-div'>
        <img onClick={toggleMode} src={lightBulb} alt='Rajat' className='bulb' />
      </div>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Add your Todo list
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
