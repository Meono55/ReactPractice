import React from 'react';
import ReactDOM from 'react-dom';
// class HelloWorld extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             username: 'josemeono'
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e){
//         this.setState({
//             username: e.target.value
//         })
//     }
//     render(){
//         return <div>Hello {this.state.username}! <br></br>
//         Change Name:
//         <input type="text" value={this.state.username} onChange= {this.handleChange}>
//         </input>
//         </div>
//     }
// }

// Parent Component
class FriendsContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name : 'Jose Meono',
            friends : ['John', 'Sherry', 'Bailey', 'Barb', 'Justin'],
        }
        this.addFriend = this.addFriend.bind(this)
    }
    addFriend(friend){
        this.setState((state)=> ({
            friends: state.friends.concat([friend])
        }))
    }
    render(){
        return(
            <div>
                <h3>Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend}></AddFriend>
                <ShowList names={this.state.friends}></ShowList>
            </div>
        )
    }
}

//Child Component
class ShowList extends React.Component{
    render(){
        return(
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map((friend) => {return <li>{friend}</li>})}
                </ul>
            </div>
        )
    }
}

class AddFriend extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newFriends : ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)

    }
    updateNewFriend(e){
        this.setState({
            newFriend : e.target.value
        })
    }
    handleAddNew(){
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend}></input>
                <button onClick={this.handleAddNew}> Add Friend</button>
            </div>
        )
    }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('root'))

// LINK TO TUTORIAL : https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/