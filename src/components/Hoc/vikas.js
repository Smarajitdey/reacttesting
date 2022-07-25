import React from "react";
import subject from "../HOC"

class Vikas extends React.Component {
    state = {
        marks: 0,
    }
    
    render(){
        return(
            <>
            <span>Vikas's no {this.state.marks}, {this.props.subjectvalue}</span>
            </>
        )
    }
}

export default subject(Vikas);