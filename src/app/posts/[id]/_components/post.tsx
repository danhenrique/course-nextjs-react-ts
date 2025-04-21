import { PostsProps } from "../../page";


export async function Post({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 6000)); // Simulate a delay

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostsProps = await response.json();

  return (
    <div className="border rounded-lg shadow-md p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
      <p className="text-gray-700">{data.body}</p>
      <p className="text-sm text-gray-500 mt-4">User ID: {data.userId}</p>
    </div>
  );
}
