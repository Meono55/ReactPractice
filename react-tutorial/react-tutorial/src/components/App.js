import React from 'react';
import Table from '../components/Table'
import Form from './Form';
class App extends React.Component {
    state = {
        characters : []
    }

    removeCharacter = index => {
        const {characters} = this.state
        
        this.setState({
            characters : characters.filter((characters, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render(){
        return (
            <div className="container">
              <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
              <Form handleSubmit={this.handleSubmit}></Form>
            </div>
          )
    }
}

export default App