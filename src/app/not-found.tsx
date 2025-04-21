import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <FaceFrownIcon className="h-24 w-24 text-blue-500 mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 mb-2">Oops!</h1>
      <p className="text-xl text-gray-600 mb-6">
        A página que você procura se perdeu no multiverso 😵‍💫
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Voltar para o início
      </Link>
      <p className="text-sm text-gray-500 mt-6">
        Código de erro: <span className="font-mono">404</span>
      </p>
    </div>
  );
}
