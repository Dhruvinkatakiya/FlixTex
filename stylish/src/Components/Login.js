import React, { useState, useEffect } from 'react';
import bg from '../../src/Assests/bg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    const emailErrors = validateEmail(values.email);
    const passwordErrors = validatePassword(values.password);

    setErrors({
      email: emailErrors.email || '',
      password: passwordErrors || '',
    });
  }, [values.email, values.password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
   
     localStorage.setItem("email", values.email)
  
    if (!errors.email && !errors.password) {
      try {
        const res = await axios.post('http://localhost:8081/login', values);
        if (res.data === "Success") {
          alert("Login Successfully...");
          navigate('/home');
        } else {
          alert("Incorrect username or password.");
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      }
    }
  };
  
  

  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-10" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(8px)' }}>
        <nav className="absolute top-0 right-0 m-10  ">
          <Link to="/home" className="text-2xl text-white hover:text-red-500 backdrop-blur-2 bg-black px-3 py-0 rounded-md">Home</Link>
        </nav>
        <div className="max-w-md bg-black w-full p-8 backdrop-blur-sm bg-opacity-40 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-semibold text-white mb-8 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
              <input type="email" id="email" name="email" value={values.email} className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Email" onChange={handleInput} />
              {errors.email && <span className="text-danger text-yellow-500">{errors.email}</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">Password</label>
              <input type="password" id="password"  maxLength={8} name="password" value={values.password} className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Password" onChange={handleInput} />
              {errors.password && <span className="text-danger text-yellow-500">{errors.password}</span>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn-primary bg-white text-black text-md hover:text-red-600 hover:bg-white font-semibold py-2 px-10 w-30 rounded">Login</button>
            </div>
          </form>
          {errors.login && <span className="text-danger text-yellow-500">{errors.login}</span>}
          <div className="mt-4 text-center">
            <span className="text-white">Don't have an account?</span>
            <Link to="/signup" className="text-white hover:text-yellow-500 ml-1">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
