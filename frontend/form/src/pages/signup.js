import React, { useState } from 'react';
import './loginSignup.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                console.log('Signup successful');
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='logform'>
            <div className='loginSignup'>
                <h1 className='projectName'>NCHLOD</h1>
                <h5>Nepal Cultural Heritage Linked Open Data</h5>
            </div>
            <div className='loginform'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Username" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                    <Link to='/login' className='signtext'>Already have an account</Link>
                    <button type="submit" className='login'>Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
