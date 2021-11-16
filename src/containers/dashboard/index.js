import React  from 'react';
import Tasklist from "../../components/tasklist";
import classes from "./dashboard.module.css";

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [],
        }
        this.addNew = this.addNew.bind(this);
    }

    delTodo(keyT) {
        const filterItem = this.state.items.filter( (list) =>
        list.key!== keyT);

        this.setState({items: filterItem});
    }


    addNew() {
        
        console.log(this._inputElement.value);

        //push to an array
        if (this._inputElement.value !== "") {

            const newItem = {
                title: this._inputElement.value,
                key: Date.now()
            }


            //Method 1
            //get the current items and concat the newItem
            // this.setState((prevState)=> {
            //     return {items: prevState.items.concat(newItem)};
            // }, () => console.log(this.state.items));

            //Method 2 - Deconstructing
            this.setState({items: [...this.state.items, newItem]}, ()=>console.log(this.state.items));


            //to change the input immediately
            // this.setState({items: this._inputElement.value}, ()=> console.log('current array',this.state.items));
        }

    }

    render() {





        return (
            <div style={dashboardStyle}>
                <div className={classes.form}>
                <input type="text" placeholder="Add Task" 
                ref={(a) => this._inputElement = a}>

                </input>

                <button onClick={this.addNew}>Add</button>
                </div>
                <div>

                    {
                        this.state.items.map( (list) => 
                            <Tasklist title={list.title}  delTodo={()=>{this.delTodo(list.key)}}/>

                        )
                    }
                
                </div>
                
            </div>
        )
    }
}

const dashboardStyle = {
    display:"flex", flexDirection:"column",
    alignItems:"center"
}

export default Dashboard;
