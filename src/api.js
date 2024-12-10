import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });


API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);

export const addExpense = (data) => API.post('/expenses', data);
export const getExpenses = () => API.get('/expenses');
export const updateExpense = (id, data) => API.put(`/expenses/${id}`, data);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
