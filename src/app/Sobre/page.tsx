'use client';

import axios from "axios";
import Plano, { PlanosProps } from "@/components/Plano";
import { useState, useEffect } from "react";



export default function Sobre() {
  const [planos, setPlanos] = useState<PlanosProps[]>([]);
  useEffect(() => {
    axios.get('/api/planos')
      .then(response => setPlanos(response.data))
  }, [])

  return (
    <main className="
    min-h-screen h-full mt-[100px] mb-48 md:mb-8 mx-8 px-2 border-2 border-green-700/50
    bg-white/20 pt-8 pb-8 rounded-xl
    shadow-[0_15px_30px_rgba(11,156,49,_0.5)]
    z-10
    ">
      <h1 className="w-fit text-2xl mx-auto text-violet-900 font-bold py-3">Sobre</h1>
      <section>

        <main className="
        flex
        flex-col
        justify-around
        items-center
        mt-8
        gap-4 
        md:grid-cols-3
        md:grid
       
        ">
          {planos.map((plano: PlanosProps) => (
            <Plano key={plano.id} plano={plano} />
          ))}
        </main>

      </section>
    </main>
  )
}
