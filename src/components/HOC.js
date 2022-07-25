import React, {Component} from "react";
const subjects=(STUDENT)=>{
    console.log(STUDENT);
    class Subject extends Component{
        render(){
            return(
                <STUDENT subjectvalue="Java"></STUDENT>
            )
        }
    }
    return Subject;
}

export default subjects