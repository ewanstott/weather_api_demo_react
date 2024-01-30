import React, { Component } from "react";
import Spinner from "./components/Spinner";
import "./App.css";
import axios from "axios";
import Interface from "./components/Interface";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

//WRITE THIS OUT AGAIN

class App extends Component {
  // state = {};
  state = {
    weather: null,
    city: "London", // Add a city property to the state
  };

  onInput = (e) => {
    this.setState({ city: e.target.value });
    console.log(e.target.value);
  };

  onGetWeatherClick = () => {
    // this.setState(city);
    // const { city } = this.props
    // Call the function passed from the parent component

    // this.props.getWeatherData(this.state.city);
    this.getWeatherData();
  };

  // invoked immediately after a component is inserted into the DOM, making it suitable for performing actions such as data fetching or setting up subscriptions.
  getWeatherData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=adef24c0d24a95065818997a98ddd457
    `
    );
    console.log(data);

    this.setState({ weather: data }); //store weather data in state above ^^
  };

  async componentDidMount() {
    this.getWeatherData();
  }

  render() {
    console.log(this.state);
    //If there is weather (truthy), show weather, Otherwise, show spinner.
    return (
      <>
        <Header />
        {this.state.weather ? (
          <Interface
            weather={this.state.weather}
            onInput={this.onInput}
            onGetWeatherClick={this.onGetWeatherClick}
          /> //send weather into interface component (passing the weather property from the component's state (this.state.weather) as a prop to another component. It allows the child component to access and use the weather data from the parent component's state. )
        ) : (
          <Spinner />
        )}
        <Footer />
      </>
    );
  }
}

export default App;

//Notes
// this.state refers to the internal state of a component, while this.props refers to the properties passed to a component. When you set the state using this.setState({...}), you're updating the internal state of the component.
// When you pass data from a parent component to a child component, you use props. In React, props are a way to pass data from a parent component to a child component. When you pass data as a prop, it becomes accessible in the child component through this.props. It doesn't directly affect the state of the child component; instead, it provides a way for the child component to receive and use external data.
// So, this.state is used to manage internal component state, and this.props is used to receive data passed down from a parent component. If you pass data from the state of a parent component to a child component, it will typically be done through props.
