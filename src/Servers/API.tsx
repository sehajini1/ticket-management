import axios from 'axios';

const BASE_URL = '/backend';

// get users 
export const fetchUsers = async (page: number, limit: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/all?page=${page}&limit=${limit}`);
      console.log("Request URL:", `${BASE_URL}/user/all?page=${page}&limit=${limit}`);
      console.log("Response data:", response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching users:', error.message || error.response);
      throw error;
    }
  };
  
