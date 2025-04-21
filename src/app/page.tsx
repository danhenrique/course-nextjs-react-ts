import { Metadata } from "next";

export const revalidate = 10; // seconds

export default function Home() {
    const n = Math.random() * 10;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">HOME</h1>
      <h2>Número gerado: {n}</h2>
    </div>
  )
}
