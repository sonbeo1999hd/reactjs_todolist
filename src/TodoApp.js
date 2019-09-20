import React from 'react';

import './App.css';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.changeClick = this.changeClick.bind(this);
  }
  changeClick(){
    alert("abc");
  }
  createItems(items){

      return((
          <li key={items.key} className={items.check ? 'check': ''}>{items.text}</li>
      ))
  }
  render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createItems)
      return (
          <div>
              <ul>
                  {listItems }
              </ul>
          </div>
      );
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd(event){
    if(this.inputElement.value !== ""){
      let newItem = {
        text: this.inputElement.value,
        key: Date.now(),
        check: false
      };
      this.setState((prevState) =>{
        return{
          items: prevState.items.concat(newItem)
        }
      })
    }
    this.inputElement.value = "";

    event.preventDefault();
    console.log(this.state.items)
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input type="text" ref={(value) => this.inputElement = value} ></input>
          <input type="submit" value="Add todo"></input>
        </form>
        <TodoList entries={this.state.items}/>
        <div className="footer">
          Show:
          <input type="submit" value="All"></input>
          <input type="submit" value="Active"></input>
          <input type="submit" value="Competed"></input>
        </div>
      </div>
    );
  }
  
}

export default TodoApp;
