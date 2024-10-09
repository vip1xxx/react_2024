import React, { useState, useEffect } from 'react';
import User from './User';
import { getUsers } from '../services/userService';

function Users({ onSelectUser }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <User key={user.id} user={user} onSelectUser={onSelectUser} />
                ))}
            </ul>
        </div>
    );
}

export default Users;
