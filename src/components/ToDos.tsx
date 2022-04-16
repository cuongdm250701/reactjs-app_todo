import React from 'react'
import ToDoItems from './ToDoItem';

interface ToDoItem {
    id: number,
    title: string,
    completed: boolean
}


interface IProps {
    todos: ToDoItem[];
    handleChange(id: number): void
    deleteTodo(id: number): void
}

class ToDos extends React.Component<IProps> {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo: ToDoItem) =>(
                        <ToDoItems
                            key={todo.id}
                            todo={todo}
                            handleChange={this.props.handleChange}
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDos;