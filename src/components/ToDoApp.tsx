import React from 'react';
import AddToDo from './AddToDo';
import Header from './layout/Header';
import ToDos from './ToDos';
import axios from 'axios'

interface TodoItem {
    id: number,
    title: string,
    completed: boolean
}
class ToDoApp extends React.Component {
    state = {
        todos: []
    }

    handleCheckboxChange = (id: number) => {
        console.log('this id is: ', id);
        this.setState({
            todos: this.state.todos.map((todo: TodoItem) => {
                if(todo.id === id ) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    deleteTodoItem = (id: number) => {
        console.log('delete id:', id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({
                todos: this.state.todos.filter((todo: TodoItem) => todo.id !== id)
            })
        );
        // this.setState({
        //         todos: this.state.todos.filter((todo: TodoItem) => todo.id !== id)
        // })
    }

    addTodoItem = (title: string) => {
        console.log('added todo:', title);
        const countToDo = this.state.todos.length;
        const newTodo = {
            id: countToDo + 1,
            title,
            completed: false,
        };
        axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(response => {
             console.log(response.data);
             this.setState({
                todos: [...this.state.todos, response.data]
            });
        });
    }

    componentDidMount() {
        const config = {
            params: {
                _limit: 5
            }
        }
        axios.get('https://jsonplaceholder.typicode.com/todos', config)
        .then(response => this.setState({todos: response.data}))
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