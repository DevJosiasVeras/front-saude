'use client';
import { useState } from "react";
import DropPlanos from "./subs/DropPlanos";
import { useContextApi } from "@/contexts/ContextApi";
import DropLocal from "./subs/DropLocal";
import TipoBusca from "./subs/TipoBusca";

export default function Busca() {
  const {estagio, setMedicosFiltrados, medicos, localAtendimento, plano} = useContextApi();

  const filtrarMedicos = () => {
    const medicosFiltrados = medicos.filter(medico => {
      if (medico.plano === plano && medico.localAtendimento === localAtendimento.cidade) {
        return medico
      }
    })
    setMedicosFiltrados(medicosFiltrados)
  }


  return (
    <section className="
    flex items-center justify-center
    mt-8 
    min-w-[80%] min-h-[150px] bg-white p-6 rounded-xl shadow-2xl">
      <ul className="
      grid grid-cols-2 
      md:flex 
      md:flex-row
      md:items-center
      md:justify-center
      md:gap-12
      w-full h-full">
        <div className="h-[90px] bg-gray-200 w-px "/>
        <DropPlanos disabled={estagio >= 0 ? false : true} />
        <div className="h-[90px] bg-gray-200 w-px "/>
        <DropLocal disabled={estagio >= 1 ? false : true} />
        <div className="h-[90px] bg-gray-200 w-px "/>
        <TipoBusca disabled={estagio >= 2 ? false : true} />
        <div className="h-[90px] bg-gray-200 w-px "/>
        <button
        disabled={estagio >= 3 ? false : true}
        className="
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
        "
        onClick={() => {
          filtrarMedicos()
        }}
        >
          Buscar
        </button>
        <div className="h-[90px] bg-gray-200 w-px "/>
      </ul>
    </section>
  )
}