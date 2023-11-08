import { useState } from 'react'
import './Register.css'
function Register(){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[gender,setGender]=useState('')
    const[createpwd,setCreatepwd]=useState('')
    const[confirmpwd,setConfirmpwd]=useState('')
    const passwordRegex=/^[A-Z]{1}[a-z]{1,10}[!@#$%^&*()_+{}:;<>,.?~/\-=|]{1,5}[0-9]{1,5}$/
    function validate(e){
        e.preventDefault()
        if(name.trim()===""){
            alert('Please Enter name')
            return false
        }
        if(email.trim()===""){
            alert('please enter email')
            return false
        } 
        if(!email.trim().includes("@")){
            alert('Email must have @ symbol')
            return false
        }
        if(mobile.trim()===""){
            alert('please enter mobile number')
            return false
        }
        if(mobile.trim().length>10 || mobile.trim().length<10){
            alert('please Enter ten numbers only')
            return false
        }
        if(isNaN(mobile)){
            alert("Mobile number must be numbers")
            return false
        }
        if(!gender){
            alert('please select gender')
            return false
        }
        if(createpwd===""){
            alert('please enter password')
            return false
        }
        if(!passwordRegex.test(createpwd)){
            alert('password should be 1 uppercase upto 10 lowecases upto 5 symbols upto 5 numbers')
            return false
        }
        if(confirmpwd===""){
            alert('please confim password')
            return false
        }
        if(createpwd!==confirmpwd){
            alert('password does not match')
            return false
        }
    }
    return(
        <div className="container">
            <div className="Register d-flex justify-content-center align-items-center ">
                <div className="box col-xs-4 col-sm-4 col-md-4">
                    <form onSubmit={validate}>
                        <div className="name mb-2 d-flex flex-column form-group">
                            <label for='name'><b>Name </b></label>
                            <input type="text" placeholder="Enter your name" id="name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="email mb-2 d-flex flex-column form-group">
                            <label for='name'><b>Email </b></label>
                            <input type="text" placeholder="Enter your email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mobile mb-2 d-flex flex-column form-group">
                            <label for='mobile'><b>Mobile number </b></label>
                            <input type="tel" placeholder="Enter your mobile number" id="mobile" onChange={(e)=>setMobile(e.target.value)}/>
                        </div>
                        <div className="gender mb-2 d-flex form-group">
                            <label for='gender'><b>Gender </b></label>
                            <input type="radio" id="male" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)}/>Male
                            <input type="radio" id="female" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)}/>Female
                            <input type="radio" id="other" name="gender" value="Other" onChange={(e)=>setGender(e.target.value)}/>Other
                        </div>
                        <div className="createPassword mb-2 d-flex flex-column form-group">
                            <label for="createPassword"><b>Create Password</b></label>
                            <input type='password' placeholder='Create your password' id="createPassword" onChange={(e)=>setCreatepwd(e.target.value)}/>
                        </div> 
                        <div className="confirmPassword mb-2 d-flex flex-column form-group">
                            <label for="confirmPassword"><b>Confirm Password </b></label>    
                            <input type='password' placeholder='ReEnter your password' id="confirmPassword" onChange={(e)=>setConfirmpwd(e.target.value)}/>
                        </div> 
                        <div className="button text-center">
                            <button className="btn btn-primary shadow-none" type="submit" id="regBtn">Register</button>
                        </div>                           
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register