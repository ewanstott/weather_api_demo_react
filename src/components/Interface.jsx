import React, { Component } from "react";
import Button from "./Button";

class Interface extends Component {
  // state = {}
  render() {
    const { weather } = this.props;
    console.log(this.props);
    return (
      <>
        <>Location: {weather.name}</>
        <br />
        <>Temperature: {weather.main.temp}</>
        <br />
        <>Feels like: {weather.main.feels_like}</>
        <br />
        <>{weather.weather[0].main} </>
        <br />
        <>
          <Button text={"Refresh"} className="refreshBtn" />
        </>
      </>
    );
  }
}

export default Interface;

//Map over API URL and spit out HTML
//Make components
//Add button that sorts weather
//HW to include:
// - Components
// - Props
// - State
// - Life cycles
// // - Event handling
// Components: In React, components are modular, reusable building blocks that encapsulate a part of the user interface and its behavior.

// Props: Props (short for properties) are used to pass data from a parent component to a child component in React, allowing communication between them.

// State: State is a mechanism in React components that allows them to manage and maintain their own data, ensuring that the UI reflects the current application state.

// Life Cycles: Component lifecycle methods in React provide hooks at various stages, such as mounting, updating, and unmounting, allowing developers to execute code at specific points in a component's existence.

// Event Handling: In React, event handling involves capturing and responding to user interactions (e.g., clicks, input changes) within the components to trigger specific actions or updates in the application.
