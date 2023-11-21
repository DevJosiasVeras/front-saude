'use client';

import Busca from "@/components/Busca";
import Plano from "@/components/Plano";
import { useContextApi } from "@/contexts/ContextApi";
import axios from "axios";
import { useEffect } from "react";


export default function Home() {

  const {setMedicos} = useContextApi();

  useEffect(() => {
    axios.get("/api/medicos").then(res => setMedicos(res.data))
  }, [])

  return (
    <main className="
    min-h-screen h-full mt-[100px] mb-48 md:mb-8 mx-8 px-2 border-2 border-green-700/50
    bg-white/20 pt-8 pb-8 rounded-xl
    shadow-[0_15px_30px_rgba(11,156,49,_0.5)]
    ">
      <h1
      className="
      flex justify-center items-center gap-2
      text-5xl
      font-bold
      text-white
      bg-gradient-to-r from-violet-900 to-green-700
      rounded-xl
      shadow-2xl
      p-2
      mb-4
      hover:from-green-600 hover:to-violet-900
      transition-colors
      cursor-pointer
      
      "
      >
        Bem vindo ao
        <div>
          <span className="text-green-700 font-bold">My</span>
          <span className="text-violet-900 font-bold">Plan</span>
        </div> 
      </h1>
      <div className="">
        <section className="flex items-center justify-center">
          <Busca />
        </section>
        <section className="
        mt-8
        grid grid-cols-1
        md:flex md:flex-col md:items-center md:justify-center md:gap-12
        w-full h-full
        ">
          <Plano />
        </section>
      </div>
    </main>
  )
}
