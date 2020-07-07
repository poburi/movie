import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm constructor");
  }
  
  render() {
    console.log("I'm rendering");
    return (
      <div>
       <h3>Hi</h3>
      </div>
    );
  }
}

export default App;
