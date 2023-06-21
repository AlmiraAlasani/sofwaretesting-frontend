import axios from 'axios';
import { getToken } from './tokenStorage';

const BASE_URL = 'https://localhost:7282';

export const getIncomes = async () => {
    const token = getToken();
    console.log("asdasdasdasd",token);
    const response = await axios.get(`${BASE_URL}/api/incomes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    return response.data;
};
export const deleteIncomes = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/incomes/${id}`);
    
    return response.data;
};
export const createIncomes = async (todo) => {
    const response = await axios.post(`${BASE_URL}/api/incomes`, todo);
    return response.data;
};

// expenses


export const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}/api/expenses`);
    return response.data;
};
export const deleteExpenses = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/expenses/${id}`);
    return response.data;
};
export const createExpenses = async (todo) => {
    const response = await axios.post(`${BASE_URL}/api/expenses`, todo);
    return response.data;
};


//account balance


export const getBalanceByID = async () => {
    const response = await axios.get(`${BASE_URL}/api/accounts/1`);
    return response.data;
};