import React from 'react'

class ToDoItems extends React.Component<any> {
    
    
    render() {
        const {id, title, completed} = this.props.todo
        return (
            <li className = 'todo-item' id={id}>
                <input 
                type ='checkbox'
                checked={completed}
                onChange={() => this.props.handleChange(id)}
                />
                <span className={completed ? 'completed' : ''}>
                    {title}
                </span>
                <button className='btn-style' onClick={() => this.props.deleteTodo(id)}>X</button>
            </li>
        )
    }
}

export default ToDoItems;