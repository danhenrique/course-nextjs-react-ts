'use client'
import { use, useEffect, useState } from "react";

export default function ClientPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, []);


  return (
    <div>
      <h1 className="text-3xl font-bold underline">Client Component</h1>
      <p className="text-lg text-gray-700">
        Aqui estão alguns posts interessantes!
      </p>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {posts.map((post: any) => (
            <div key={post.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
              <p className="text-sm text-gray-500 mt-2">Author ID: {post.userId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}