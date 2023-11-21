'use client';

import { Medico, useContextApi } from "@/contexts/ContextApi";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Plano() {
  const {
    medicosFiltrados,
    medicosFiltradosBusca
  } = useContextApi();

  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    if (medicosFiltradosBusca.length === 0) {
      setMedicos(medicosFiltrados);
    } else {
      setMedicos(medicosFiltradosBusca);
    }
  }, [medicosFiltradosBusca]);

  useEffect(() => {
    setMedicos(medicosFiltrados);
  }, [medicosFiltrados]);


  return (
    <div className="
    w-full
    h-full
    flex flex-col
    items-center
    justify-center
    gap-4
    p-4 
    ">
      {medicos.map((medico) => (
        <div className="
        flex items-center
        gap-4
        bg-gray-100
        rounded-xl
        shadow-md
        p-4
        w-full
        ">
          <Image src={medico.imagem} width={100} height={100} alt="" className="
          bg-cover
          rounded-full
          bg-white
          shadow-2xl
          "/>
          <div className="flex flex-col items-start justify-center gap-2 flex-1">
            <h1 className="text-2xl font-bold">{medico.nome}</h1>
            <p className="text-lg">{medico.especialidade}</p>
            <p className="text-lg">{medico.localAtendimento}</p>
          </div>

          <div className="
          flex flex-col
          items-center
          justify-center
          gap-2
          mr-4
          ">
            <h1>{medico.endereco}</h1>
            <h1>{medico.telefone}</h1>
          </div>

          <div>
            <button className="
            flex items-center justify-center
            bg-green-700
            text-white
            font-bold
            text-xl
            rounded-xl
            shadow-2xl
            p-2
            hover:bg-green-600
            disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-700
            ">
              Agendar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}