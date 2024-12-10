import React from 'react';
import { deleteExpense } from '../api';

const ExpenseTable = ({ expenses, setExpenses }) => {
    const handleDelete = async (id) => {
        try {
            await deleteExpense(id);
            setExpenses((prev) => prev.filter((exp) => exp._id !== id));
        } catch (error) {
            alert('Failed to delete expense');
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Comments</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((exp) => (
                    <tr key={exp._id}>
                        <td>{exp.category}</td>
                        <td>{exp.amount}</td>
                        <td>{exp.comments}</td>
                        <td>
                            <button onClick={() => handleDelete(exp._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
