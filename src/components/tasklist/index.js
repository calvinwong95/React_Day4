import React from 'react';
import classes from "./tasklist.module.css";

export class Tasklist extends React.Component {

    

    render() {
        return (
            <div  className={classes.task_holder} onClick={this.props.delTodo}>
                <h2 >{this.props.title}</h2>
                <h2 >{this.props.keyT}</h2>
            </div>
        )
    }
}

export default Tasklist;
