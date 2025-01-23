import { useState } from 'react'
import './App.css'
import UserRegistration from './components/UserRegistration'
import UserList from './components/UserList'


const App = () => {
    const [users, setUsers] = useState([])

    const addUser = (newUser) => {
      setUsers((prev) => [...prev, newUser])
    }

  return (
    <div className="App">
      <UserRegistration onAddUser={addUser}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
