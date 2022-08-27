import React, {useState,useRef} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const enteredUname=useRef('');
    const enteredUage=useRef('');
    const [error,SetError]=useState();
    
    const addUserHandler = (event) => {
      event.preventDefault();
      if(enteredUname.current.value.trim().length === 0 || enteredUage.current.value.trim().length === 0){
       SetError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
       })
        return;
      }
      if(+enteredUage.current.value<1){
        SetError({
          title: 'Invalid age',
          message: 'Please enter a valid age (> 0).',
        });
        return;
      }
      props.OnAdd(enteredUname.current.value,enteredUage.current.value);
      enteredUage.current.value='';
      enteredUname.current.value=''
    };
  
    
  
  

    const errorHandler=()=>{
      SetError(null);
    }
  
    return (
      <div>
        {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
        />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUname}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredUage}/>
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
      </div>
    );
  };
  
  export default AddUser;