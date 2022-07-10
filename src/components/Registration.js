import React,{useState} from 'react'
// import {Alert} from 'bootstrap';
import Login from './Login';
function Registration(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [profession,setProfession] = useState("");

    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true);
    
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password || !phone || !profession){
            setFlag(true);
        }else{
            setFlag(false)
            localStorage.setItem("nidhiemail", JSON.stringify(email));
            localStorage.setItem("nidhipassword", JSON.stringify(password));
            console.log("saved in local storage");
            
            setLogin(!login);

        }

    }
    function handleClick() {
        setLogin(!login);
    }

    return(
        <>
        
        <div>
        {" "}
          {login ? (

                <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text"
                    className='form-control'
                    placeholder='Enter Full Name'
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email"
                    className='form-control'
                    placeholder='Enter Email'
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type="password"
                    className='form-control'
                    placeholder='Enter Password'
                    onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input type="phone"
                    className='form-control'
                    placeholder='Enter Phone no'
                    onChange={e=>setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Choose your Profession</label>
                    <select
                    onChange={(e) => setProfession(e.target.value)}
                    >
                    <option>Select</option>
                    <option>Artist</option>
                    <option>Photographer</option>
                    <option>Team Player</option>
                    <option>Full Stack</option>
                    </select>
                </div>

                <button type="submit"
                className='btn btn-dark btn-lg btn-block'>Register
                </button>
                <p onClick={handleClick} className="forgot-password text-rigth">Already registered {" "} login ? </p>
                {/* // alert tag is from bootstrap */}
                
                {flag && (
                    <div color="primary" variant="danger">
                        Please fill every field
                    </div>
                )}
                </form>
            ) : (
                <Login />
              )}    
            
        </div>   
        </> 
    );
}

export default Registration