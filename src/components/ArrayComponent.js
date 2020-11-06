import React, { Component } from "react";


class ArrayComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            arr: [1, 2, 3]
        }
    }

    render(){
        const arrContent = this.state.arr.map( (arrElement, index) => {
            return (
                <p>arr[{index}]: {arrElement}</p>
            )
        } )
        return [
            <h2>This is object 1 [h2] </h2>,
            <p>This is object 2 [p] </p>,
            <div> This is object 3 [div] </div>,
            arrContent
        ] 
    }
}

export default ArrayComponent