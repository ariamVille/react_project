import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Singletodo from "./SingleTodo";

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo:[],
      currentTodo : ""
    };
  }

  onInputChange = e => {
    this.setState({currentTodo: e.target.value});
  }

  onClick = () => {
    let todosCopy = this.state.todo.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({
      todo: todosCopy, currentTodo:""
    });
  }

  deleteTodo = i => {
    let todosCopy = this.state.todo.slice();
    todosCopy.splice(i, 1);

    this.setState({ todo: todosCopy });
  }

  render(){
    let bulletedTodos = this.state.todo.map((e, i) => {
      return(
        <Singletodo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });
    return(
      <div>
        <input placeholder="input task" value={this.state.currentTodo} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Add!</button>
        <br/>
        {this.state.todo.length === 0 ? "no todos" : <ul>{bulletedTodos}</ul>}
      </div>
    );
  }

}

export default App;
