import axios from "axios";

const BASE_URL = "/backend";

// get usersdd
export const fetchUsers = async (page: number, limit: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/all?page=${page}&limit=${limit}`
    );
    console.log(
      "Request URL:",
      `${BASE_URL}/user/all?page=${page}&limit=${limit}`
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
