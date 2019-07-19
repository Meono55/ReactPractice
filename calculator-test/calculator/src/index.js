/* eslint no-eval: 0 */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            number1 : '',
            result: '',
            count: props.count
        }
        // this.updateValues = this.updateValues.bind(this)
    }
    // updateValues(e){
    //     // we get the e.target.name (which will be either "number1" or "number2") and use it 
    //     // to target the key on our 'state' object with the same name using bracket syntax
    //     this.setState({
    //         [e.target.name] : e.target.value 
    //     })
    // }

    onClick = button => {
        console.log(button)
        if(button === "="){
            this.calculateValues()
        }
        else if(button === "CLEAR"){
            this.setState({
                result: '',
            })
        }
        else{
            this.setState({
                result : this.state.result + button
            })
        }
        
    }
    calculateValues(){
        this.setState({
            result: eval(this.state.result),
        })
    }
    

    render(){

        return(
            <div>
                <h1>Calculator App:</h1>
                <div>
                    <Result result={this.state.result}></Result>
                    <Calculator onClick={this.onClick}></Calculator>
                    
                </div>
            </div>
        )
    }
}

class Calculator extends React.Component{
    render() {
        return(
            <div className="Calculator" >
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <br></br>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <br></br>
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <br></br>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br></br>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <br></br>
                <button name="CLEAR" onClick={e => this.props.onClick(e.target.name)}>CLEAR</button>

            </div>
        )
    }
}

class Result extends React.Component{
    render() {
        let {result} = this.props
        return(
            <div className="result">
                <p>{result}</p>
            </div>
        )
    }
}

App.defaultProps = {
    count: 1
};

ReactDOM.render(<App />, document.getElementById('root'));

// REFERENCE FOR WHAT YOU WANT TO DO: https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15