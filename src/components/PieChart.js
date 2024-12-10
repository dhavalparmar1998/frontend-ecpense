import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register required elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
    const categoryData = expenses.reduce((acc, { category, amount }) => {
        acc[category] = (acc[category] || 0) + amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                data: Object.values(categoryData),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Colors for the slices
            },
        ],
    };

    return (
        <div>
            <h3>Expense Distribution</h3>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
