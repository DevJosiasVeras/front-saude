'use client';

import { useState } from "react";
import User from "./User";
import Link from "next/link";
import { useContextApi } from "@/contexts/ContextApi";




export default function Header() {
  const [userImage, setUserImage] = useState("");
  const {medicosFiltrados, setMedicosFiltradosBusca} = useContextApi();

  const buscaEspecialidade = (e: any) => {
    const especialidade = e.target.value;
    const medicosFiltradosBusca = medicosFiltrados.filter((medico) => {
      if (medico.especialidade.toLowerCase().includes(especialidade.toLowerCase())) {
        return medico;
      }
    });
    setMedicosFiltradosBusca(medicosFiltradosBusca);
  }

  return (
    <header className="p-2 bg-white/50 shadow-2xl rounded-b-xl fixed inset-0 h-16 w-full z-[100]">
      <section className="flex justify-around items-center h-full px-8">
        <div className="cursor-pointer mr-2">
          <Link href='/' ><h1 className="text-2xl text-violet-900 font-bold">My<span className="text-green-700">Plan</span></h1></Link>
        </div>

        <div className="flex justify-center items-center ml-3">
          <Link href={'/Sobre'} className="font-bold text-violet-700">Sobre</Link>
        </div>

        <div className="
        hidden
        md:flex-1 md:flex items-center justify-center">
          <input type="text" 
          disabled={medicosFiltrados.length === 0 ? true : false}
          placeholder="Urologia" 
          className="
          w-2/6
          p-2 
          rounded-lg 
          bg-transparent 
          shadow-2xl
          border border-b-white border-r-white border-opacity-75
          focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent
          disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-700 
           "
           onChange={(e) => {buscaEspecialidade(e)}}
          />
        </div>
        <div>
          <User name="User" image={userImage} />
        </div>
      </section>
    </header>
  )
}