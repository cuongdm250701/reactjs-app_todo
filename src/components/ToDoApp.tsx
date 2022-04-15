import React from 'react';
import Header from './layout/Header';
import ToDos from './ToDos';

class ToDoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Set up development enviroment',
                completed: true
            },
            {
                id: 2,
                title: 'Develop website and add content',
                completed: true
            },
            {
                id: 3,
                title: 'Deploy to live server',
                completed: true
            },
        ]
    }
    render() {
        return (
            <div className="container">
                < Header/>
                < ToDos todos = {this.state.todos}/>
            </div>
        )
    }
}

export default ToDoApp;