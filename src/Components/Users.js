import React from 'react'
import Card from './Card'

const Users = ({ users }) => {
  return (
    <div>
        <center><h1>User List</h1></center>
      {users.map((user) => (
          <Card user={user}/>
      ))}
    </div>
  )
};

export default Users