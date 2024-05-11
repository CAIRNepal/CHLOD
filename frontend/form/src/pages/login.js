import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            console.log(response);
            if (response.ok) {
                console.log('Login successful');
            } else {
                console.log('Invalid username or password');
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
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Link to='/signup' className='signtext'>Create new account</Link>
                    <button type="submit" className='login'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;