import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = update => {
    this.setState({
      todoToShow: update
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        
        
      </div>
    );
  }
}
