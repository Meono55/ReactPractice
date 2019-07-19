import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            number1 : 0,
            number2 : 0,
            result: 0
        }
        this.updateValues = this.updateValues.bind(this)
    }
    updateValues(e){
        // we get the e.target.name (which will be either "number1" or "number2") and use it 
        // to target the key on our 'state' object with the same name using bracket syntax
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    calculateValues(number1, number2){
        this.setState({
            result: (1 * number1) + (1 * number2),
        })
    }
    

    render(){

        return(
            <div>
                <h1>Calculator App</h1>
                <label>Test: </label>
                <input type="text" name="number1"  onChange={this.updateValues}></input>
                <label>Test2:</label>
                <input type="text" name="number2"  onChange={this.updateValues}></input>
                <div>
                    <button onClick={() => this.calculateValues(this.state.number1,this.state.number2)}>Add</button>
                    <h3>Result: {this.state.result}</h3>
                    <Calculator number1={this.state.number1}></Calculator>
                </div>
            </div>
        )
    }
}

class Calculator extends React.Component{
    render() {
        return(
            <div className="Calculator">
                {this.props.number1}
            </div>
        )
    }
}

class Form extends React.Component{

}

ReactDOM.render(<App />, document.getElementById('root'));

// REFERENCE FOR WHAT YOU WANT TO DO: https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15