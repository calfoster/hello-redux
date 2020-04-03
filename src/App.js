// import React, { Component } from "react";
// import HelloWorld from "./HelloWorld";

// class App extends Component {
//   render() {
//     return <HelloWorld tech={store.getState().tech} />
//   }
// }

// export default App;

import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;