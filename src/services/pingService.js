import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getPing() {
  
    const response = await axios.get(`${API_URL}/api/ping`);
    return response.data;
   
  }