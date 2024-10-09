import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import { getUserPosts } from './services/postService';

function App() {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (selectedUserId) {
            const fetchPosts = async () => {
                const userPosts = await getUserPosts(selectedUserId);
                setPosts(userPosts);
            };
            fetchPosts();
        }
    }, [selectedUserId]);

    return (
        <div className="App">
            <h1>Users and their Posts</h1>
            <Users onSelectUser={setSelectedUserId} />

            {selectedUserId && (
                <div>
                    <h2>Posts by User {selectedUserId}</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
