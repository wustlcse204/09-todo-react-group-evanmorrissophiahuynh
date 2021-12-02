import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

const apikey = "a2cb9a-7cbaf2-ce715a-4f654b-0fc018";

class App extends Component{
constructor(props) {
super(props);
console.log(this.props)

this.state = {
todos: [],
input: '',
}
this.deleteEventhandler = this.deleteEventhandler.bind(this);
this.showmainpage = this.showmainpage.bind(this);
this.showformpage = this.showformpage.bind(this);
this.addEventhandler = this.addEventhandler.bind(this);
this.completeEventhandler = this.completeEventhandler.bind(this);
this.onChange = this.onChange.bind(this);
this.sortEventhandler = this.sortEventhandler.bind(this);
}
onClick() {
this.setState({
showComponent: true,
});
}

deleteEventhandler(todo){
console.log(todo)
let self = this;
fetch('https:cse204.work/todos/' + todo.props.id, {
method: 'DELETE',
headers: {
'X-API-KEY': apikey,
'Content-Type': 'application/json'
}
})

const remainingTodos = self.state.todos.filter((todos) => {
// Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
if (todos.id !== todo.props.id) {
return todo;
}
});
self.setState({todos: remainingTodos});
}

onChange(event){
this.setState({
input: event.target.value
});
}




addEventhandler(event){
console.log(event.target)
console.log("enter here")
event.preventDefault();
const self = this;
let data = {
text: self.state.input
}
console.log(data)

// fetch('https:cse204.work/todos', {
// method: 'POST',
// headers: {
// 'X-API-KEY': apikey,
// 'Content-Type': 'application/json',
// // 'Accept': 'application/json'
// },
// body: JSON.stringify(data),
// }).then(response => console.log(response.text()))

var xhttp2 = new XMLHttpRequest();

// Response handler
xhttp2.onreadystatechange = function() {

// Wait for readyState = 4 & 200 response
if (this.readyState == 4 && this.status == 200) {
// getToDo();
// parse JSON response
var todo = JSON.parse(this.responseText);
console.log(todo);
self.setState({
todos: [...self.state.todos, todo],
input: ''
});

} else if (this.readyState == 4) {
// this.status !== 200, error from server
console.log(this.responseText);
}
};

xhttp2.open("POST", "https://cse204.work/todos", true);

xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", apikey);
xhttp2.send(JSON.stringify(data));
}

completeEventhandler(id, completion){

console.log("enter complete")
let self = this;
console.log(id, completion)

let data = {
completed: completion
}

// event.preventDefault;
// console.log(target_complete)

var xhttp4 = new XMLHttpRequest();

xhttp4.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
self.setState({completed: data.completed});
}
else if (this.readyState == 4) {
// this.status !== 200, error from server
console.log(this.responseText);
}
};
// document.getElementsByTagName("")
xhttp4.open("PUT", "https://cse204.work/todos/"+ id, true);
// event.target.parentNode.id
xhttp4.setRequestHeader("Content-type", "application/json");
xhttp4.setRequestHeader("x-api-key", apikey);
xhttp4.send(JSON.stringify(data));



}

componentDidMount() {
fetch('https:cse204.work/todos', {
method: 'GET',
headers: {
'X-API-KEY': apikey,
'Content-Type': 'application/json'
}
}).then((response) => response.json())
.then((json) => {
this.setState({
todos: json,
});
})
}

showformpage() {
this.setState({showPage: true});
}

showmainpage(){
this.setState({showPage: false});
}

sortEventhandler(event){
// event.preventDefault;
console.log("enter sorting")
var todos = this.state.todos;
todos.sort(function (a,b){
return a.text.localeCompare(b.text);
});
this.setState({todos:todos})

}

render() {
return(
<div className="main">
<div className="buttonsort">
<button className="sortbutton" onClick={this.sortEventhandler}>SORT ALPHABETICALLY</button>
</div>

<NewTodo addEventhandler={this.addEventhandler} onChange={this.onChange} input={this.state.input}></NewTodo>
<div className="header">
<div id="left-header"><h2>To-Do:</h2></div>
<div id="right-header">
{/* <i className="fa fa-plus fa-2x" onClick={this.showformpage}></i> */}
</div>
</div>

<ol id="todos">
{/* <NewTodo /> */}
{/* <NewTodo addEventhandler={this.addEventhandler} onChange={this.onChange} input={this.state.input} /> */}
{this.state.todos.map((todo) =>
<Todo key={todo.id} id={todo.id} completed={todo.completed} completeEventhandler={this.completeEventhandler}
text={todo.text} deleteEventhandler={this.deleteEventhandler} />
)}
</ol>
</div>
)
}
}

export default App;

