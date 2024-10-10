import axios from 'axios';
import { User } from '../types/types';

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data.users;
};
