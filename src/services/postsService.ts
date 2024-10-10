import axios from 'axios';
import { Post } from '../types/types';

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    const response = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
    return response.data.posts;
};
