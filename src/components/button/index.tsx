'use client';

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Sem nome");
  const [idade, setIdade] = useState(68);

  function handleChangeName() {
    setIdade(idade + 1);
    setNome("Steve Wozniak - Idade " + idade);
  };

  return (
    <div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleChangeName}>
        Alterar nome
      </button>
      <h3>Valor: {nome}</h3>
    </div>
  );
}
