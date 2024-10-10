import React from 'react';
import { User as UserType } from '../types/types';

interface UserProps {
    user: UserType;
    onSelect: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onSelect }) => {
    return (
        <div>
            <p>{user.firstName} {user.lastName}</p>
            <button onClick={() => onSelect(user.id)}>View Posts</button>
        </div>
    );
};

export default User;
