import React, { useState } from 'react';
import { addExpense } from '../api';

const ExpenseForm = ({ setExpenses }) => {
    const [form, setForm] = useState({ category: '', amount: '', comments: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting Form:', form);
        try {
            const { data } = await addExpense(form);
            console.log('API Response:', data);
            setExpenses((prev) => [data, ...prev]);
        } catch (error) {
            console.error('Error Adding Expense:', error);
            alert('Failed to add expense. Please check your input and try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="category" 
                type="text" 
                placeholder="Category" 
                value={form.category} 
                onChange={handleChange} 
                required 
            /><br/>
            <input 
                name="amount" 
                type="number" 
                placeholder="Amount" 
                value={form.amount} 
                onChange={handleChange} 
                required 
            /><br/>
            <input 
                name="comments" 
                type="text" 
                placeholder="Comments" 
                value={form.comments} 
                onChange={handleChange} 
            /><br/>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
