'use client'

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <Link href="/">MeuSite</Link>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menu de navegação */}
          <nav
            className={`${
              open ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white md:static md:flex md:space-x-4 md:w-auto md:bg-transparent`}
          >
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/contatos"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Contatos
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/posts"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Posts
            </Link>
            <Link
              href="/client-posts"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Client Posts
            </Link>
            <Link
              href="/sobre"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
