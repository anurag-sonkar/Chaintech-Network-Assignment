import React, { useState } from 'react'
import { useUserAuth } from '../context/UserContext'

function Modal({ setShow }) {
    // Get user data and fetchUser method from UserContext
    const { user, fetchUser } = useUserAuth()

    // State to hold the form data, pre-filled with the current user details
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        gender: user.gender

    })

    // Handle changes in the form inputs and update formData accordingly
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle the update button click, update the user in localStorage, refresh the user in context, and close the modal
    const handleupdate = (e) => {
        e.preventDefault()
        // Save the updated user data to localStorage
        localStorage.setItem('user', JSON.stringify(formData))
        alert("Data Updated Successfully")
        // Update the user context with the latest data
        fetchUser()
        setShow(false) // c=close the model
    }
    return (
        <div className='modal'>
            {/* Close button for the modal */}
            <span className='edit' onClick={() => setShow(false)}>❌</span>
            <h1 className='update-heading'>Update Profile</h1>

            {/* Form to update user details */}
            <div className='edit-form'>
                <div className='input-field'>
                    <input type='text' value={formData.name} placeholder='Username' name='name' onChange={(e) => handleFormChange(e)} />
                    <input type='text' value={formData.email} placeholder='Email' name='email' onChange={handleFormChange} />
                </div>

                {/* Gender selection (radio buttons) */}
                <div className='input-field'>
                    <label htmlFor='gender'>Gender</label>
                    <div className='input-field-radio'>
                        <div style={{ display: "flex", minWidth: "15.9rem", justifyContent: "flex-start", gap: "1rem" }}>
                            {/* Male radio button */}
                            <div className='input-field-radio'>
                                <label htmlFor='male'>Male</label>
                                <input type='radio' id='male' value="male" onChange={(e) => handleFormChange(e)} name='gender' checked={formData.gender === 'male'} />
                            </div>
                            {/* FeMale radio button */}
                            <div className='input-field-radio'>
                                <label htmlFor='female'>Female</label>
                                <input type='radio' id='female' value="female" onChange={(e) => handleFormChange(e)} name='gender' checked={formData.gender === 'female'} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Update button to submit the form */}
                <button type='submit' className='btn' onClick={(e) => handleupdate(e)}>Update</button>

            </div>
        </div>
    )
}

export default Modal