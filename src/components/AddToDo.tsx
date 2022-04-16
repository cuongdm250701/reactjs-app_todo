import React from 'react'

interface MyProps {
    addTodo(title: string): void
}
class AddToDo extends React.Component<MyProps> {
    state = {
        title:''
    }
    
    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        })
    }

    onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(this.state.title !== '') {
            this.props.addTodo(this.state.title);
        }
    }
    render() {
        return (
            <div>
                <form className='form-container' onSubmit={(e) => this.onSubmitForm(e)}>
                    <input 
                        type='text'
                        placeholder='Add todo...' 
                        className='input-text' 
                        value={this.state.title}
                        onChange={(e) => this.onInputChange(e)}
                    />
                    <input type='submit' value='submit' className='input-submit'/>
                </form>
            </div>
        )
    }
}

export default AddToDo;