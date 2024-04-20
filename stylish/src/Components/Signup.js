import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../src/Assests/bg.jpg';
import axios from 'axios';

function SignUp() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        mobileNo: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
    });

    const [errors, setErrors] = useState({}); // State to hold validation errors
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Clear any previous errors
        setErrors({});
    
        // Validation logic
        let errors = {};
        const { email, password, confirmPassword } = values;
    
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (!/[a-z]/.test(password)) {
            errors.password = 'Password must contain at least one lowercase letter';
        } else if (!/[A-Z]/.test(password)) {
            errors.password = 'Password must contain at least one uppercase letter';
        } else if (!/\d/.test(password)) {
            errors.password = 'Password must contain at least one digit';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
    
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        // Add validation for other fields if necessary

        setErrors(errors);
    
        // If there are no errors, proceed with sign up
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8081/signup', values);
                console.log("Registered successfully..!", response.data);
                alert('Registered successfully..!');
                navigate('/');
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    // Email already exists in the database
                    setErrors({ email: 'Email already exists' });
                } else {
                    console.error('Error occurred while signing up:', error);
                }
            }
        }
    };
    
    return (
        <div className="flex justify-center items-center min-h-screen py-10" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(8px)' }}>
            <nav className="absolute top-0 right-0 m-10">
                <Link to="/home" className="text-2xl text-white hover:text-red-500 backdrop-blur-2 bg-black px-3 py-0 rounded-md">Home</Link>
            </nav>
            <div className="max-w-md w-full p-8 backdrop-blur-sm bg-black bg-opacity-40 rounded-lg shadow-2xl">
                <h2 className="text-4xl font-semibold text-white mb-8 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                        <input type="email" id="email" name="email" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Email" onChange={handleChange} />
                        {errors.email && <span className="text-yellow-500">{errors.email}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">Password</label>
                        <input type="password" maxLength={8} id="password" name="password" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Password" onChange={handleChange} />
                        {errors.password && <span className="text-yellow-500">{errors.password}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">Confirm Password</label>
                        <input type="password" maxLength={8} id="confirmPassword" name="confirmPassword" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Confirm Password" onChange={handleChange} />
                        {errors.confirmPassword && <span className="text-yellow-500">{errors.confirmPassword}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2">Mobile No.</label>
                        <input type="tel" maxLength={10} id="mobile" name="mobile" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Mobile No." onChange={handleChange} />
                        {/* {errors.confirmPassword && <span className="text-yellow-500">{errors.confirmPassword}</span>} */}
                    </div>
                     
                    <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium text-white mb-2">Address</label>
                        <input type="address"  id="address" name="address" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Address" onChange={handleChange} />
                        {/* {errors.confirmPassword && <span className="text-yellow-500">{errors.confirmPassword}</span>} */}
                    </div>

                    {/* New Fields in One Line */}
                    <div className="mb-6 flex justify-between">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="city" className="block text-sm font-medium text-white mb-2">City</label>
                            <input type="text" id="city" name="city" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter City" onChange={handleChange} />
                            {/* Add validation error message if needed */}
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="state" className="block text-sm font-medium text-white mb-2">State</label>
                            <input type="text" id="state" name="state" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter State" onChange={handleChange} />
                            {/* Add validation error message if needed */}
                        </div>
                    </div>
                    <div className="mb-6 flex justify-between">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="country" className="block text-sm font-medium text-white mb-2">Country</label>
                            <input type="text" id="country" name="country" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Country" onChange={handleChange} />
                            {/* Add validation error message if needed */}
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="pincode" className="block text-sm font-medium text-white mb-2">Pincode</label>
                            <input type="text" id="pincode" name="pincode" className="form-control rounded-md py-2 px-4 w-full" placeholder="Enter Pincode" onChange={handleChange} />
                            {/* Add validation error message if needed */}
                        </div>
                    </div>
                    {/* End of New Fields in One Line */}
                    <div className="flex justify-center">
                        <button type="submit" className="btn-primary bg-white text-black text-md hover:text-red-600 hover:bg-white font-semibold py-2 px-10 w-30 rounded">Sign Up</button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-white">Already have an account?</span>
                    <Link to="/" className="text-yellow-400 hover:text-white ml-1">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
