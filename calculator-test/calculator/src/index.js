import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            number1 : '',
            number2 : '',
            result: '',
        }
    }
    updateValues(e){

    }
    

    render(){

        return(
            <div>
                <h1>Calculator App</h1>
                <label>Test: </label>
                <input type="text" name="number1" value={this.state.number1} onChange={this.updateValues}></input>
                <label>Test2:</label>
                <input type="text" name="number2" value={this.state.number2} onChange={this.updateValues}></input>
                {/* <label>Test2: </label>
                <input type="text" name="input2" value={this.state.number2} onChange={this.updateValues}></input> */}
            </div>
        )
    }
}

class Calculator extends React.Component{

}

class Form extends React.Component{

}

ReactDOM.render(<App />, document.getElementById('root'));

// REFERENCE FOR WHAT YOU WANT TO DO: https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15