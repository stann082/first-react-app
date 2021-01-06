import React, { Component } from "react";
import Products from "./Products";

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}

export default App;
