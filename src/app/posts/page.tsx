//'use client'
import { Button } from "@/components/button";
import { Metadata } from "next";
import Link from "next/link";
import { Post, PostProps } from "./_components/post";

interface PostsResponse {
  posts: PostProps[];
}

// Server Component
export default async function Posts() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2 seconds delay
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
            <Post key={post.id} post={post} />
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
