import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const useNavigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} =useSelector((state) => state.auth);
   const [loginCreds, setLoginCreds ] = useState({
    email :'eve.holt@reqres.in',
    password:'cityslicka',
   });

   const handleChange = (e) => {
    const {name ,value} = e.target;
    setLoginCreds({
      ...loginCreds,
      [name] : value,
    });
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    login();
   }

  useEffect(() => {}, {isAuth});

  return (
    
    <div>
      Login
      <form  
       onSubmit={handleSubmit}
       style={{
        display:"flex", 
        flexDirection:"column",
        margin:"auto",
        maxWidth:"200px",
        gap:"10px"}}
      >
        <input data-cy="login-email" onChange={handleChange} placeholder="Enter email address..."/>
        <input data-cy="login-password" onChange={handleChange} placeholder="Enter password..."/>
        <button data-cy="login-submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
