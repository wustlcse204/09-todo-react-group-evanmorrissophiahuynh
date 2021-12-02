import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {  
  constructor(props){
        super(props);
        this.state ={ 
          completed: this.props.completed
        }
        // this.handleClick = this.handleClick.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this)

  }

  deleteTodo(event){
    console.log(event.target)
    this.props.deleteEventhandler(this);
  }
  completeTodo(event){
  console.log(event)
  this.setState({completed: !this.state.completed})
  console.log(this.state.completed)
  this.props.completeEventhandler(this.props.id, this.state.completed);

  }
  

  handleClick(e){ 
    e.preventDefault(); 
    e.stopPropagation();
  }

    render() {
      // console.log(this.props)
      let cell1 = this.props.text; 
      var classN = "notChecked"

      if(this.state.completed){ 
         classN = "checked";
      }
    return (

          <li id={this.props.id} > 
            <span id="text" className={classN}>{cell1}</span>
            <i className="fa fa-check" id={this.props.id} onClick={this.completeTodo}></i>
            <i className="fa fa-times" id={this.props.id} onClick={this.deleteTodo}></i>
          </li>
        
    )
    }
  }

export default Todo;