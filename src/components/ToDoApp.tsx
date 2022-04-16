import React from 'react';
import AddToDo from './AddToDo';
import Header from './layout/Header';
import ToDos from './ToDos';

class ToDoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Set up development enviroment',
                completed: false
            },
            {
                id: 2,
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: 3,
                title: 'Deploy to live server',
                completed: false
            },
        ]
    }

    handleCheckboxChange = (id: number) => {
        console.log('this id is: ', id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id ) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    deleteTodoItem = (id: number) => {
        console.log('delete id:', id)
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    addTodoItem = (title: string) => {
        console.log('added todo');
        const countToDo = this.state.todos.length;
        const newTodo = {
            id: countToDo + 1,
            title,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    render() {
        return (
            <div className="container">
                < Header/>
                <AddToDo addTodo={this.addTodoItem}/>
                < ToDos
                    todos={this.state.todos}
                    handleChange={this.handleCheckboxChange}
                    deleteTodo={this.deleteTodoItem}
                />
            </div>
        )
    }
}

export default ToDoApp;