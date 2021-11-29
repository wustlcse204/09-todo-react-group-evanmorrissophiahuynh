import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {  
    render() {
    return (
    //   <div className="App">
    //     <h1>Evan Morris, Sophia Huynh TODO App</h1>
    //   </div>
    <form id="add-task2">
    <i className="fa fa-window-close fa-2x" id="close_button"></i>
    <div className="formdata">
        <div>
            <p className="formTitle">Add A Task:</p>
        </div>
    <div>
        <label for="task" className="labelTask"></label>
        <input type="text" id="task" placeholder="ToDo..." />
    </div>
    <div>
      <button className="btn">ADD</button>
    </div>
    
    </div>
    </form>

      
    );
  }
}

export default NewTodo;