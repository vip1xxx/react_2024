import axios from 'axios';

const API_URL = 'https://dummyjson.com/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;
    }
};
