import React, { Component } from "react";
import Button from "./Button";

class Input extends Component {
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={inputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
    );
  }
}

export default Input;
