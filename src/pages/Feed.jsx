import { useEffect, useState } from "react";
import { getPosts } from "../api";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div style={{maxWidth: 600, margin: "0 auto"}}>
      <CreatePost onPostCreated={loadPosts} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}