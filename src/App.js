import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';



class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <h1>Evan Morris, Sophia Huynh TODO App</h1>
      // </div>
      <div className="main">
            <div className="header"> 
                <div id="left-header"><h2>To-Do:</h2></div>
                <div id="right-header">
                    <i className="fa fa-plus fa-2x"></i>
                </div>
            </div>

            <div class="task-list">
                <table id="table">
                  Hello
                </table>
            </div>
            
            <Todo />
            {/* <hr> */}
            
        </div>
      
    );
  }
}

export default App;
