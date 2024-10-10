import React, { useEffect, useState } from 'react';
import { getUsers } from './services/usersService';
import { getUserPosts } from './services/postsService';
import Users from './components/Users';
import { Post, User } from './types/types';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        if (selectedUserId !== null) {
            (async () => {
                const postsData = await getUserPosts(selectedUserId);
                setPosts(postsData);
            })();
        }
    }, [selectedUserId]);

    return (
        <div>
            <h1>Users</h1>
            <Users users={users} onUserSelect={setSelectedUserId} />

            {selectedUserId && (
                <div>
                    <h2>Posts of User {selectedUserId}</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
