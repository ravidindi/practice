import React ,{useState}from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList'

function App() {

  const [userList,setUserList]=useState([]);
  
  const addUserHandler=(enteredUsername,enteredAge)=>{
    setUserList((prevList)=>{
      return [...prevList,{name:enteredUsername,
      age:enteredAge,
  id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser OnAdd={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;