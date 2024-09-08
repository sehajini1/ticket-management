import axios from "axios";
const BASE_URL = "https://dreo2l35cd.execute-api.ap-southeast-1.amazonaws.com/backend"
//const BASE_URL = "https://e3cb-112-134-153-194.ngrok-free.app";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//login
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/login`, {
      username,
      password
    });
    console.log("Request URL:", `${BASE_URL}/admin/login`);
    console.log("Response data:", response.data);

    return response.data;
  } catch (error: any) {
    console.error("Error logging in:", error.message || error.response);
    throw error;
  }
};

// get users
export const fetchUsers = async (page: number, limit: number, status: string) => {
 
  try {
    const response = await axios.get(
      `${BASE_URL}/user/all?page=${page}&limit=${limit}&status=${status}`
      
    );
    console.log(
      "Request URL:",
      `${BASE_URL}/user/all?page=${page}&limit=${limit}&status=${status}`
    );
    console.log("Response data:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching users:", error.message || error.response);
    throw error;
  }
};

//update the user status
export const updateUserStatus = async (userId: number, status: string) => {
  try {
    const response = await axios.patch(`${BASE_URL}/user/${userId}`, {
      status,
    });
    console.log(`Request URL: ${BASE_URL}/user/${userId}`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      `Error updating user ${userId}:`,
      error.message || error.response
    );
    throw error;
  }
};


