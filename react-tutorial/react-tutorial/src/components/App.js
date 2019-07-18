import React from 'react';
import Table from '../components/Table'
class App extends React.Component {
    state = {
        characters : [{
            name: 'Charlie',
            job: 'Janitor'
        },
        {
            name: 'Mac',
            job: 'Bouncer'
        },
        {
            name: 'Dee',
            job: 'Aspiring Actress'
        },
        {
            name: 'Dennis',
            job: 'Bartender'
        },
        {
            name: 'Jose',
            job: 'Developer'
        },]
    }

    removeCharacter = index => {
        const {characters} = this.state
        
        this.setState({
            characters : characters.filter((characters, i) => {
                return i !== index
            }),
        })
    }

    render(){
        return (
            <div className="container">
              <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
            </div>
          )
    }
}

export default App