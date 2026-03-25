const DATABASE_URL="http://127.0.0.1:8000"

export const getPosts = async () => {
    const res = await fetch(`${DATABASE_URL}/posts`);
    return res.json();
};

export const createPost = async (formData) => {
    const res = await fetch(`${DATABASE_URL}/posts`, {
        method: "POST",
        body: formData,
    });
    return res.json();
}