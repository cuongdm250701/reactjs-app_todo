import React from 'react'
import ToDoItems from './ToDoItem';

interface ToDoItem {
    id: number,
    title: string,
    completed: boolean
}


interface IProps {
    todos: ToDoItem[];
}

class ToDos extends React.Component<IProps> {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo: ToDoItem) =>(
                        <ToDoItems key={todo.id} todo={todo}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDos;