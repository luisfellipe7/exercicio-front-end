import React, { Component } from 'react'
import Users from './Components/Users'


class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Users users={this.state.users} />
    )
  }
}

export default App;
