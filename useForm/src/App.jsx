/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {useForm} from 'react-hook-form';
import './App.css'


function App() {

  const {register , handleSubmit, formState:{errors , isValid}} = useForm();

  const[fields,setFields] = useState('')
  const[submit,setSubmit] = useState(false)
  const[visible,setVisible] = useState(false)

  const onSubmit = (data) =>{
    <h1>Registered</h1>
    setFields(data);
    setSubmit(true);
    console.log(data);
  }
  
  console.log(errors.Firstname)

  return (
    <>
   <h1> React Form Library</h1>
   <div id="Form-Container">
    <form onSubmit={handleSubmit(onSubmit)}>
      {submit?(<div id="message"> Registered Succesfully!!</div>):null}
      <input type="text" placeholder="FirstName" {...register("Firstname" , {required:"Firstname is required"})}/>
      <span>{errors.Firstname?.message}</span>
      <input type="text" placeholder="LastName"  {...register("Lastname" , {required:"Lastname is required"})}/>
      <span>{errors.Lastname?.message}</span>
      <input type="text" placeholder="Email"  {...register("Email" , {required:"Email is required",
    pattern:{
      value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message:"Invalid Email use'@"
    }
    })}/>

      <span>{errors.Email?.message}</span>
      <div  id="password" >
      <input type={visible ? "text" : "password"} placeholder="Password"  {...register("Password" , {required:"Password is required", 
      
      minLength: {
      value:4,
      message:"Password must be more than 4 characters" 
    },
    maxLength:{
      value:20,
      message:"Password cannot be more than 20 characters"
    }
   })}/>

   <input id="check"type="checkbox" style={{height:"40px"}} onClick={()=> setVisible(!visible)}/>
   </div>
    <span>{errors.Password?.message}</span>
      <button type='submit'>Register</button>

      {/* disabled={!isValid}
      If we want the button to be disabled until the values are valid  */}
    </form>
    </div>
    </>
  )
}

export default App
