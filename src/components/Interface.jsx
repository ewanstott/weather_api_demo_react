import React, { Component } from "react";
import axios from "axios";

class Interface extends Component {
  state = { city: "", weather: null };

  render() {
    const { weather, onInput, onGetWeatherClick } = this.props;
    console.log(this.state);

    return (
      <div>
        <div className="getWeatherBtn">
          <input type="text" placeholder="Enter city name" onChange={onInput} />
          <button onClick={onGetWeatherClick}>Get Weather</button>
        </div>
        <>
          <div className="card">
            <h2>Location: {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Description: {weather.weather[0].main}</p>
          </div>
        </>
      </div>
    );
  }
}

export default Interface;

//Go through Todo demo again

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
