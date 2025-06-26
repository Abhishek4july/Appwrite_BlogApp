import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const userData = useSelector((state) => state.auth.userData);

useEffect(() => {
    if (userData) {
        appwriteService.getPostsByUser(userData.$id)
            .then((posts) => {
                setPosts(posts || []);
            })
            .catch((error) => {
                console.error("Error fetching user posts:", error);
                setPosts([]);
            })
            .finally(() => setLoading(false));
    } else {
        setPosts([]);
        setLoading(false);
    }
}, [userData]);

    return (
        <div className="w-full py-8">
            <Container>
                {loading ? (
                    <div className="w-full flex justify-center items-center h-48">
                        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
