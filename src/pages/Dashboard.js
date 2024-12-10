import React, { useEffect, useState } from 'react';
import { getExpenses } from '../api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import PieChart from '../components/PieChart';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const { data } = await getExpenses();
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    return (
        <div >
            <h1>Dashboard</h1><br/>
            <ExpenseForm setExpenses={setExpenses} />
            <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
            <PieChart expenses={expenses} />
        </div>
    );
};

export default Dashboard;
