import React, {Component} from "react"

import "../styling/Form.css"

class Form extends Component{
    constructor(){
        super()
        this.state = {
            item: ''
        }
    }

    render(props){
        return (
            <form onSubmit={this.props.handleSubmit}> 
                <input
                    placeholder="Enter to-do item"
                    value={this.props.item}
                    onChange={this.props.handleInput}
                />

                <button>Add</button>
            </form>
        )
    }
}

export default Form 