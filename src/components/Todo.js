import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [users,setusers]=useState([]);
    const[name, setName]=useState("");
    const[editIndex,setEditIndex]=useState(-1);
    const addUser=()=>{
                 if(editIndex!==-1){
                    const userList=[...users];
                    userList[editIndex]=name;
                    if(name!==""){
                    setusers(userList);
                    setEditIndex(-1);
                    }
                 }
                 else if(name!==""){
                    const newUser=[...users,name];
                    setusers(newUser)
                 }
        setName("");
    }
    const editUser=(index)=>{
     setEditIndex(index);
     setName(users[index]);
    }
    const deleteUser=(userIndex)=>{
        const updateUser=users.filter((user,index)=>
        index!==userIndex);
        setusers(updateUser);
    }
  return (
    <div className='todo'>
        <h2 className='heading'>To Do App</h2>
        <div className='add-user'> 
         <input type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)} className='input-user' placeholder='write Your Task ✍️'/>
                <i className="fa-solid fa-plus fa-xl add" onClick={addUser} ></i>
        </div>

        <div className='user-list'>
            {users.map((user,index)=>(
                <div key={index} className='task'>
              <input type='checkbox' className='checkbox'/>
              <p>{user}</p>
              <i className="fa-solid fa-pen-to-square fa-xl edit" onClick={()=>editUser(index)}> </i>
              <i className="fa-solid fa-trash fa-lg delete"onClick={()=>deleteUser(index)}></i>
                </div>
            ))}
        </div>
   
        </div>


  
  )
}

export default Todo