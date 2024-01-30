import React, { Component } from "react";
import Button from "./Button";
import axios from "axios";

class Interface extends Component {
  state = { city: "", weather: null };

  onInput = (e) => {
    this.setState({ city: e.target.value });
    console.log(e.target.value);
  };

  onGetWeatherClick = () => {
    // this.setState(city);
    // const { city } = this.props
    // Call the function passed from the parent component

    // this.props.getWeatherData(this.state.city);
    console.log(this.onGetWeatherClick);
  };

  render() {
    const { weather } = this.props;
    // console.log(this.props);
    console.log(this.state);
    // console.log(weather);

    return (
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={this.state.city}
          onChange={this.onInput}
        />
        <button onClick={this.onGetWeatherClick}>Get Weather</button>
        <>
          <div className="card">
            <h2>Location: {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Description: {weather.weather[0].main}</p>
            {/* <>
              <Button text={"Refresh"} className="refreshBtn" />
            </> */}
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

{
  /* {weather.map((weatherItem, index) => (
          <p key={index}>{weatherItem}</p>
        ))}; */
}

// <div>
// <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={inputChange}
//         />
//         <button type="submit">Get Weather</button>
//       </form>
// <div/>
