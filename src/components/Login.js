import React,{useState} from 'react'
// import {Alert} from 'bootstrap';
import Home from "./Home";

function Login(){
    const [emailLogin,setEmailLogin] = useState("");
    const [passwordLogin,setPasswordLogin] = useState("");
    const [flag,setFlag] = useState(false);
    const [home,setHome] = useState(true);
    
    function handleLogin(e){
        e.preventDefault();
        let mail = localStorage.getItem("nidhiemail").replace(/"/g,"");
        let pass = localStorage.getItem("nidhipassword").replace(/"/g,"");
            
        if( !emailLogin || !passwordLogin){
            setFlag(true);
            console.log("empty in login")
        }else if(emailLogin !== mail || passwordLogin !== pass){
            setFlag(true);
        }else{
            setHome(!home);
            setFlag(false);
            console.log("login to home ");

        }

    }

    return(
        <>
        
        <div>
            { home ? (
            <form onSubmit={handleLogin}>
            <h1>Login</h1>
            
            <div className='form-group'>
                <label>Email</label>
                <input type="email"
                className='form-control'
                placeholder='Enter Email'
                onChange={e=>setEmailLogin(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password"
                className='form-control'
                placeholder='Enter Password'
                onChange={e=>setPasswordLogin(e.target.value)}
                />
            </div>
           
            <button type="submit"
             className='btn btn-dark btn-lg btn-block'>Login
            </button>
            {flag && (
                <div color="primary" variant="danger">
                  Please fill correct Info
                </div>
            )}
            </form>
            ) : (
                <Home />
            )}

        </div>  
        </>  
    );
}

export default Login;