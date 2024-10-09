import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts/user';

export const getUserPosts = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching user's posts", error);
        throw error;
    }
};
