import React from 'react';
import { User as UserType } from '../types/types';
import User from './User';

interface UsersProps {
    users: UserType[];
    onUserSelect: (userId: number) => void;
}

const Users: React.FC<UsersProps> = ({ users, onUserSelect }) => {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onSelect={onUserSelect} />
            ))}
        </div>
    );
};

export default Users;
