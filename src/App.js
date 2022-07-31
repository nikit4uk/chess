import React, {Component} from "react";
import './App.css';
import Board from "./components/Board/Board";

export default class App extends Component {
  render() {
    return (
      <main>
        <Board />
      </main>
    );
  }
}
