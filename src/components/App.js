import React from 'react'

import Header from './Header'
import Form from './Form'
import ToDoCont from './toDoCont'
import ToDoItem from './toDoItem'

import "../styling/App.css"


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      item: '',
      data: []
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event){
    const val = event.target.value

    this.setState({
       item: val
    })

  }

  handleSubmit(event){
    event.preventDefault()

    this.setState(prevState => {
      return {
        ...prevState,
            data: [...prevState.data,<ToDoItem item={prevState.item} />]
      }
    })

    this.setState({item:''})
  }

  render(){
    return(
      <div>
        <Header />
        <Form handleSubmit={this.handleSubmit} handleInput={this.handleInput} item={this.state.item} />
        <ToDoCont data={this.state.data} />
      </div>
    )
  }
}

export default App