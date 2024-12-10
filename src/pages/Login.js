import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login(form);
            if (response?.data?.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Navigating to /dashboard');
                navigate('/dashboard');
            } else {
                setError('Invalid login. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed. Please try again later.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                /><br />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={form.password} 
                    onChange={handleChange} 
                    required 
                /><br />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
