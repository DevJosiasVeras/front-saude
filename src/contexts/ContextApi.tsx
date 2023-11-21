'use client';


import { useState, useContext, createContext, Dispatch, SetStateAction } from "react";

interface localAtendimento {
  estado?: string;
  cidade?: string;
}

export interface Medico {
  id: number;
  nome: string;
  especialidade: string;
  plano: string;
  localAtendimento: string;
  endereco: string;
  telefone: string;
  imagem: string;
}


interface ContextApiProps {
  plano: string;
  setPlano: Dispatch<SetStateAction<string>>;
  estagio: number;
  setEstagio: Dispatch<SetStateAction<number>>;
  localAtendimento: localAtendimento;
  setLocalAtendimento: Dispatch<SetStateAction<localAtendimento>>;
  tipoBusca: string;
  setTipoBusca: Dispatch<SetStateAction<string>>;
  medicos: Medico[];
  setMedicos: Dispatch<SetStateAction<Medico[]>>;
  medicosFiltrados: Medico[];
  setMedicosFiltrados: Dispatch<SetStateAction<Medico[]>>;
  medicosFiltradosBusca: Medico[];
  setMedicosFiltradosBusca: Dispatch<SetStateAction<Medico[]>>;
}

const ContextApi = createContext({} as ContextApiProps);

export function ContextApiProvider({ children }: { children: React.ReactNode }) {
  const [plano, setPlano] = useState("");
  const [estagio, setEstagio] = useState(0);
  const [localAtendimento, setLocalAtendimento] = useState<localAtendimento>({estado: "", cidade: ""});
  const [tipoBusca, setTipoBusca] = useState("");
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [medicosFiltrados, setMedicosFiltrados] = useState<Medico[]>([]);
  const [medicosFiltradosBusca, setMedicosFiltradosBusca] = useState<Medico[]>([]);
  return (
    <ContextApi.Provider value={{ 
    plano, setPlano, 
    estagio, setEstagio, 
    localAtendimento, setLocalAtendimento, 
    tipoBusca, setTipoBusca, 
    medicos, setMedicos,
    medicosFiltrados, setMedicosFiltrados,
    medicosFiltradosBusca, setMedicosFiltradosBusca
    }}>
      {children}
    </ContextApi.Provider>
  )
}

export const useContextApi = () => useContext(ContextApi);


