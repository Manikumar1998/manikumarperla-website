import React from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header branding="Manikumar Perla" />
      <Title
        name="Manikumar"
        lead="I am a software engineer at LINE Corporation"
      />
      <Footer />
    </div>
  );
}

export default App;
