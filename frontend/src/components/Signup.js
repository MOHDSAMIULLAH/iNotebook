import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({showAlert}) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: ""}) 
  let navigate = useNavigate();
  // let history = useHistory();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password, cpassword} = credentials;
      const response = await fetch("https://inotebook-2n1q.onrender.com/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          navigate("/");
          showAlert("Account created successfully","success");
          // history.push("/");

      }
      else{
        showAlert("Invalid credentials","danger");
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <div className='container mt-2'>
      <h2 className='my-2'>Create an account to use iNotebook...</h2>
      <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
          </div>
          
          <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Signup