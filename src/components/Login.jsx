import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    // manage each state error 
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
    })

    // navigate to dashboard/home on success
    const navigate = useNavigate()


    // check all required validations before form submit
    function validateForm() {
        // Initialize a variable to track if any errors exist
        let hasError = false;

        // Temporary error object to collect all errors
        let tempErrors = { ...error };

        // Validate email
        if (formData.email === '') {
            tempErrors.emailError = "Email is required";
            hasError = true;  // Mark that there's an error
        } else {
            tempErrors.emailError = ""; // Clear error if valid
        }

        // Validate password
        if (formData.password === '') {
            tempErrors.passwordError = "Password is required";
            hasError = true;  // Mark that there's an error
        } else {
            tempErrors.passwordError = ""; // Clear error if valid
        }

        // Update the error state
        setError(tempErrors);

        // Return true if there's an error, otherwise return false
        return hasError;
    }


    // handle the State change 
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // onclick register now 
    const handleSignup = (e) => {
        e.preventDefault(); // Prevent page refresh on form submission

        // Validate form data
        const hasError = validateForm();

        // Proceed only if there are no errors
        if (!hasError) {
            const data = {
                ...formData,
                id: Date.now(),  // Generate unique ID for the user
            };

            // Retrieve any existing users from localStorage or initialize as an empty array
            const storedData = JSON.parse(localStorage.getItem('user')) || [];

            // find user using its filled form info
            const user = storedData.find(user => user.email === formData.email)

            // Notifyy user and redirect to login page (or another page)
            if (user) { // Navigate to the home or login page
                navigate('/')
            } else{
                alert(`${formData.email} is not found`)
                return
            }
        }
    };


    return (
        <div className='form-container'>
            <form onSubmit={handleSignup}>
                <h1>Login </h1>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <div>
                        <input type='text' id='email' value={formData.email} onChange={(e) => handleFormChange(e)} name='email' />
                        {error.emailError && <div className='error'>{error.emailError}</div>}
                    </div>
                </div>

                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <div>
                        <input type='password' id='password' value={formData.password} onChange={(e) => handleFormChange(e)} name='password' />
                        {error.passwordError && <div className='error'>{error.passwordError}</div>}
                    </div>
                </div>


                <button type='submit' className='btn' >Login Now</button>
                <div className='navigate'><div>Not have an account ? </div><Link to='/signup'>Register now</Link></div>
            </form>
        </div>
    )
}

export default Login