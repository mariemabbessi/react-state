import React, { Component } from "react";
import Timing from "./Timing";
import mariem from "./mariem.jpg";

class App extends Component {
  state = {
    Person: {
      fullName: "Mariem Abbessi",
      bio: "I'm student Fullstack Js",
      imgSrc: mariem,

      profession: "Architect",
    },
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowPerson}>click here</button>
        {this.state.show && (
          <div>
            <img src={this.state.Person.imgSrc} alt=""></img>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>

            <h1>{this.state.Person.profession}</h1>
            <br></br>
            <Timing />
          </div>
        )}
      </div>
    );
  }
}
export default App;
