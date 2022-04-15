import React from 'react'

class ToDoItems extends React.Component<any> {
    
    
    render() {
        // console.log('{this.props.key}', this.props.todo.id);
        return (
            <li className = 'todo-item' key={this.props.todo.id}>
                <input 
                type ='checkbox'
                checked={this.props.todo.completed}
                onChange={() => console.log("clicked")}
                />
                {this.props.todo.title}
            </li>
        )
    }
}

export default ToDoItems;