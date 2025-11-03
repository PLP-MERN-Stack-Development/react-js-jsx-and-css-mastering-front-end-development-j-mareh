import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Search filter
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posts (JSONPlaceholder)</h2>

      <div className="mb-4 flex gap-2">
        <input
          placeholder="Search posts"
          value={query}
          onChange={handleSearch}
          className="flex-1 px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white dark:bg-gray-900 border rounded shadow"
          >
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
