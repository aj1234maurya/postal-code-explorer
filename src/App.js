import Input from "./Input";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const API = "https://api.zippopotam.us/in/";

  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});

  async function fetchData(url) {
    try {
      const result = await axios.get(url);
      const data = result.data;
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInput(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
  }
  function handleEnter(event) {
    event.preventDefault();
    fetchData(`${API}${input}`);
  }

  return (
    <div className="main">
      <Header />
      <Input
        inputPostal={input}
        handleChange={handleInput}
        handleSubmit={handleEnter}
      />
      <Display dataList={info} />
      <Footer />
    </div>
  );
}

export default App;
