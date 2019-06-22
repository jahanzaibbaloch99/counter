import React , {Component} from 'react';
import ReactDOM from "react-dom";
import NewResult from "./Result"

class Counter extends React.Component{
    constructor (props) {
         super(props)
         this.state= {
            count:0,
        }
    }
    
    incrementHandler = () => {
        this.setState(
            {
                count: this.state.count+1

            }
        )
    };

    decrementHandler = () => {
        this.setState(
            {
                count:this.state.count-1
            }
            
        )
    };



    render() {
        return(
            <div>
                <button onClick={this.incrementHandler} type="button" > Counter + </button>
                <button onClick={this.decrementHandler} type="button" > Counter - </button>

                <NewResult result={this.state.count} />
            </div>
        )
    }
};

export default Counter;