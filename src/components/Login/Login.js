import React, { useState } from "react";
import './Login.css'
import {Link} from 'react-router-dom'
function Login(){
    const[email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')
    function validate(e){
        e.preventDefault()
        if(email.trim()===""){
            alert('please enter your email')
            return false
        } 
        if(!email.trim().includes("@")){
            alert('Email must have @ symbol')
            return false
        }
        if(pwd.trim()===""){
            alert('please enter your password')
            return false
        }
    }
    return(
        <div className="container">
            <div className="Login d-flex justify-content-center align-items-center">
                <div className="box col-xs-6 col-sm-6 col-md-4">
                    <form onSubmit={validate}>
                        <div className="email mb-2 d-flex flex-column form-group">
                            <label for='email'><b>Email </b></label>
                            <input type="text" placeholder="Enter your registered email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="password mb-2 d-flex flex-column form-group">
                            <label for='password'><b>Password </b></label>
                            <input type="password" placeholder="Enter your registered password" id="password" onChange={(e)=>setPwd(e.target.value)}/>
                        </div>
                        <div className="button mb-2 text-center">
                            <button className="btn btn-primary shadow-none" type="submit" id="loginBtn">Login</button>
                        </div>
                        <div className="signup text-center">
                            <h5 className="text-decoration-underline">Don't have an account?</h5>
                            <Link to="/Register" className="text-decoration-none">
                                <button className="btn btn-dark shadow-none text-white">Signup</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login