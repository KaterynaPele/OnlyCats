import { useState } from "react";
import { createPost } from "../api";

export default function CreatePost({ onPostCreated }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", text);
    if (image) formData.append("image", image);

    await createPost(formData);
    setText("");
    setImage(null);
    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Post</button>
    </form>
  );
}