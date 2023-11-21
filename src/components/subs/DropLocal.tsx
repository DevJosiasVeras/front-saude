"use client";

import { useContextApi } from "@/contexts/ContextApi";
import Select from 'react-select';
import { useState } from "react";


import Estados from "@/utils/Estados.json";
import Cidades from "@/utils/Cidades.json";


interface cidadeProps {
  Estado: string;
  ID: string;
  Nome: string;
}

export default function DropLocal({disabled} : {disabled: boolean}) {

  const {setLocalAtendimento, setEstagio, localAtendimento} = useContextApi();
  const [cidades, setCidades] = useState<cidadeProps[]>([])
  const setCidade = (idEstado: string) => {
    const cidadesFiltradas = Cidades.filter(cidade => cidade.Estado === idEstado)
    setCidades(cidadesFiltradas)
  }


  return (
    <section 
    className="h-full flex flex-col justify-center items-center gap-3 border border-gray-200 p-3 rounded-lg">
      <Select
      isDisabled={disabled}
      onChange={(e) => {
      setCidade(e.value)
      setLocalAtendimento({...localAtendimento, estado: e?.label})
      }} 
      placeholder="Selecione o estado"
      options={[{label: 'Estados', options: Estados.map((estado) => {return {value: estado.ID, label: estado.Nome}})}]}
      className='max-w-[250px] text-gray-600 min-w-full w-[250px]'
    />

    <Select
      isDisabled={disabled}
      onChange={(e) => {
      setEstagio(2)
      setLocalAtendimento({...localAtendimento, cidade: e?.label})
      }} 
      placeholder="Selecione a cidade"
      options={[{label: 'Cidades', options: cidades.map((cidade) => {return {value: cidade.ID, label: cidade.Nome}})}]}
      className='max-w-[250px] text-gray-600 min-w-full w-[250px]' />
    </section>
  )
}