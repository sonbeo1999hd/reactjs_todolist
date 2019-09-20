import React, { Component } from 'react';
import './App.css';
class TodoList extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleClick(){
    //     this.setState(state => ({
    //         check: !state.check
    //     }));
    // }
    createItems(items){
        // onClick={this.handleClick} className={`${this.state.check ? 'check':''}`}
        return((
            <li key={items.key} >{items.text}</li>
        ))
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createItems)
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;