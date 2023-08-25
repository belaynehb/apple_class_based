import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
