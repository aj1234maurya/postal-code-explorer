import Input from "./Input";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const API = `https://api.zippopotam.us/`;

  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const clearData = () => {
    setInfo({});
  };

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }

  async function fetchData(url) {
    if (selectedCountry && input) {
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        const data = result.data;
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  function handleInput(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
  }
  function handleEnter(event) {
    event.preventDefault();
    fetchData(`${API}${selectedCountry}/${input}`);
  }

  return (
    <div className="main">
      <Header />
      <Input
        inputPostal={input}
        handleChange={handleInput}
        handleSubmit={handleEnter}
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
      />
      <div className="displayDiv">
        <Display dataList={info} clearData={clearData} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
