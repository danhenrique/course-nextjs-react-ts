import { Suspense } from "react";
import { PostsProps } from "../page";
import { Post } from "./_components/post";

export default async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  //await new Promise((resolve) => setTimeout(resolve, 6000)); // Simulate a delay

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold underline">Post {id}</h1>
      {/* <Suspense fallback={<h1>CARREGANDO...</h1>}> */}
      <Post id={id} />
      {/* </Suspense> */}
    </div>
  );
}
