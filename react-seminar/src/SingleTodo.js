import React, { Component } from "react";

class SingleTodo extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <li>
                {this.props.todo}<button>X</button>
            </li>
        );
    }

}

export default SingleTodo;