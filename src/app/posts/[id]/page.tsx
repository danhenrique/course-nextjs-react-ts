import { Suspense } from "react";
import { Post, PostProps } from "../_components/post";

export default async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  //await new Promise((resolve) => setTimeout(resolve, 6000)); // Simulate a delay
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: PostProps = await response.json();

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold underline">Post {id}</h1>
      {/* <Suspense fallback={<h1>CARREGANDO...</h1>}> */}
      <Post post={post} showLink={false} />
      {/* </Suspense> */}
    </div>
  );
}
