import React from "react";

export default props => (
  <div >
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "" ,
        color: props.todo.complete ? "red":""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
  </div>
);
