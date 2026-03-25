export default function PostCard({ post }) {
  return (
    <div style={{border: "1px solid #ccc", padding: 10, marginBottom: 10}}>
      <p>{post.text}</p>
      {post.image && (
        <img src={post.image} alt="" style={{width: "100%"}} />
      )}
    </div>
  );
}