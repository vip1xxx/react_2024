import React from 'react';

function User({ user, onSelectUser }) {
    return (
        <li>
            {user.firstName} {user.lastName}
            <button onClick={() => onSelectUser(user.id)}>Select</button>
        </li>
    );
}

export default User;
