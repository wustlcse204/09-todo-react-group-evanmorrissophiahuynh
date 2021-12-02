import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {  
    render() {
    return (

    <form id="add-task2" onSubmit={this.props.addEventhandler}>  
    <div className="textbox">  
        <label htmlFor="task" className="labelTask"></label>
        <input type="text" id="task" placeholder="ToDo..." value={this.props.input} onChange={this.props.onChange}/>
    </div>
    <div >
      <button className="btn" onClick={this.props.addEventhandler}>ADD</button>
    </div>
    
    </form>

      
    );
  }
}

export default NewTodo;