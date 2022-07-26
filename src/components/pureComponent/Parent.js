import React, {Component} from "react";
import {Child1} from "./Child1";
import Child2 from "./Child2";

let user = [
    {
        Name: "a",
        id: 1
    },
    {
        Name: "b",
        id: 2
    },
    {
        Name: "c",
        id: 3
    }
]

export class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Sujit"
        }
        //this.ChangeParentName = this.ChangeParentName.bind(this);
    }
    // ChangeParentName = (usrName) => {
    //     this.setState({
    //         name: usrName
    //     })
    // }
    ChangeParentName = (usrName) => () => {
        this.setState({
            name: usrName
        })
    }

     createLoop = user.map((item) =>
            <li>{item.Name}</li>
        );
    
    todoItems = user.map((todo) => <li key={todo.id}>{todo.Name}</li>);
    render(){
        return(
            <>
            <Child1 />
            <Child2 />
            <p>{this.state.name}</p>
            {/* <button onClick={() => this.ChangeParentName("Arjun")}>Change Parent Name</button> */}
            <button onClick={this.ChangeParentName("Arjun")}>Change Parent Name</button>
            <ul>
                {
                user.map((todo, index) => 
                <li key={index}>{todo.Name}</li>
                )
                }
            </ul>
            </>
            
        )
    }
}