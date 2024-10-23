import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: ""

    })

    // manage each state error 
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        genderError: ""
    })

    // navigate to dashboard/home on success
    const navigate = useNavigate()


    // check all required validations before form submit
    function validateForm() {
        // Initialize a variable to track if any errors exist
        let hasError = false;

        // Temporary error object to collect all errors
        let tempErrors = { ...error };

        // Validate name
        if (formData.name === '') {
            tempErrors.nameError = "Username is required";
            hasError = true;  // Mark that there's an error
        } else {
            tempErrors.nameError = ""; // Clear error if valid
        }

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

        // Validate gender
        if (formData.gender === '') {
            tempErrors.genderError = "Gender is required";
            hasError = true;  // Mark that there's an error
        } else {
            tempErrors.genderError = ""; // Clear error if valid
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


            // Check if the email already exists (for uniqueness)
            const isEmailExist = storedData.some(user => user.email === formData.email);

            if (isEmailExist) {
                alert("Email already registered! Please use a different email.");
                return;
            }

            // Add new user to the list of stored users
            storedData.push(data);

            // Update localStorage with the new user data
            localStorage.setItem("user", JSON.stringify(storedData));

            // Notify user and redirect to login page (or another page)
            alert("Registered successfully!");
            setFormData({ name: "", email: "", password: "", gender: "" }); // Clear form fields
            navigate('/dashboard'); // Navigate to the home or login page
        }
    };


    return (
        <div className='form-container'>
            <form onSubmit={handleSignup}>
                <h1>Register</h1>
                <div className='input-field'>
                    <label htmlFor='name'>Name</label>
                    <div>
                        <input type='text' id='name' value={formData.name} onChange={(e) => handleFormChange(e)} name='name' />
                        {error.nameError && <div className='error'>{error.nameError}</div>}
                    </div>
                </div>

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

                <div className='input-field'>
                    <label htmlFor='gender'>Gender</label>
                    <div>
                        <div style={{ display: "flex", minWidth: "15.9rem", justifyContent: "flex-start", gap: "1rem" }}>
                            <div className='input-field-radio'>
                                <label htmlFor='male'>Male</label>
                                <input type='radio' id='male' value="male" onChange={(e) => handleFormChange(e)} name='gender' />
                            </div>
                            <div className='input-field-radio'>
                                <label htmlFor='female'>Female</label>
                                <input type='radio' id='female' value="female" onChange={(e) => handleFormChange(e)} name='gender' />
                            </div>
                        </div>
                        {error.genderError && <div className='error'>{error.genderError}</div>}
                    </div>
                </div>

                <button type='submit' className='btn' >Register Now</button>
                <div className='navigate'><div>Already have an account ? </div><Link to='/login'>Login now</Link></div>
            </form>
        </div>
    )
}

export default Signup