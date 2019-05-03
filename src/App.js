import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: `Keep studying don't give up` },
        { id: 2, content: `Learn node.js` },
        { id: 3, content: `Learn React` },
        { id: 4, content: `Learn Angular` },
        { id: 5, content: `Learn Express` },
        { id: 6, content: `Learn CSS/Bootstrap/Materialize` },
        { id: 7, content: `Learn MongoDB` }
      ]
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    console.log(`deleting todo`);
    console.log(this.state.todos.filter((t) => id === t.id));
    const todos = this.state.todos.filter((t) => id !== t.id);
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className='App container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
