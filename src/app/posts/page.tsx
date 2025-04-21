//'use client'
import { Button } from "@/components/button";
import { Metadata } from "next";
import Link from "next/link";

export interface PostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsResponse {
  posts: PostsProps[];
}

// Server Component
export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 10,
    }
  });
  const data: PostsResponse = await response.json();

  async function handleSearchUser(formData: FormData) {
    'use server'
    const userId = formData.get("userId");
    console.log(`Searching posts created by user with ID: ${userId}...`);

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: PostsResponse = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">POSTS</h1>
      <p className="text-lg text-gray-700">
        Aqui estão alguns posts interessantes!
      </p>

      <Button />

      <form action={handleSearchUser} className="my-4">
        <input
          type="text"
          name="userId"
          placeholder="Digite o ID do usuário"
          className="border p-2 rounded mr-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Buscar Usuário
        </button>
      </form>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {data.posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
              <p className="text-sm text-gray-500 mt-2">Author ID: {post.userId}</p>
              <Link href={`/posts/${post.id}`} className="text-blue-500">Ver</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Specific Metadata for this page */
export const metadata: Metadata = {
  title: "Aula Next.js - Posts",
  description: "Posts - Aprendendo do zero com Next.js",
  openGraph: {
    title: "Aula Next.js",
    description: "Aprendendo do zero com Next.js",
    images: ['https://sujeitoprogramador.com/steve.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
};