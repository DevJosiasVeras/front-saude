"use client";

import { useContextApi } from "@/contexts/ContextApi";
import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button,
  Select, SelectItem
} from "@nextui-org/react";
import { useState } from "react";

import { FaArrowUp } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";


export default function TipoBusca({disabled} : {disabled: boolean}) {

  const [isOpen, setIsOpen] = useState(false);
  const {setTipoBusca, setEstagio} = useContextApi();

  return (
    <Dropdown placement="bottom" type="menu" closeOnSelect={false} >
      <DropdownTrigger>
          <button
          disabled={disabled} 
          className="
          disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none disabled:pointer-events-none
          flex items-center justify-center gap-3
          p-2 text-gray-700 hover:text-violet-700 transition-colors" onClick={() => setIsOpen((open) => !open)}>
           <div className="text-2xl">
            <RiHealthBookFill/>
           </div>
            <section>
              <h1 className="text-xl font-bold">Tipo de busca</h1>
              <span className="text-sm font-light">Qual atendimento?</span>
            </section>
            <div className={`${isOpen ? 'rotate-180': ""}`}>
              <FaArrowUp />
            </div>
          </button>
      </DropdownTrigger>

        <DropdownMenu 
        variant="flat" className="p-2 min-h-[150px] min-w-[250px] flex items-center justify-center bg-white rounded-xl mt-10">
          <DropdownItem className="bg-white text-gray-700 flex w-full flex-wrap md:flex-nowrap gap-4">
            <div className="w-[250px] flex flex-col items-center justify-around h-[150px] py-4">
              <span className="text-gray-600 text-lg">Qual tipo de estabelecimento</span>
              <Select 
              onChange={(e) => {
                setTipoBusca(e.target.value)
                setEstagio(3)
              }}
              label=""
              defaultSelectedKeys={["Internação Hospitalar"]}
              className="max-w-xs border border-gray-300 p-2 rounded-md">
              <SelectItem key={"Internação Hospitalar"} value={"Internação Hospitalar"} className="text-gray-700 bg-white rounded-md hover:bg-slate-500 hover:text-white transition-colors " >
                Internação Hospitalar
              </SelectItem>
              <SelectItem key={"Pronto Socorro"} value={"Pronto Socorro"} className="text-gray-700 bg-white  hover:bg-slate-500 hover:text-white transition-colors " >
                Pronto Socorro
              </SelectItem>
              <SelectItem key={"Consultórios/clínicas Especializadas/terapias"} value={"Consultórios/clínicas Especializadas/terapias"} className="text-gray-700 bg-white  hover:bg-slate-500 hover:text-white transition-colors " >
                Consultórios/clínicas Especializadas/terapias
              </SelectItem>
              <SelectItem key={"Hospital Dia Isolado"} value={"Hospital Dia Isolado"} className="text-gray-700 bg-white rounded-b-md hover:bg-slate-500 hover:text-white transition-colors " >
                Hospital Dia Isolado
              </SelectItem>
              </Select>
            </div>
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}