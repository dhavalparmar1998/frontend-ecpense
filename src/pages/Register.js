import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form);
            navigate('/');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" onChange={handleChange} required /><br/>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
