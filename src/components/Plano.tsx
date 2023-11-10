import Image from "next/image";

export interface PlanosProps {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  valor: number;
  status: boolean;
}

export default function Plano({ plano }: { plano: PlanosProps}) {
  return (
    <div 
    key={plano.id}
    className="
    bg-white/50
    rounded-xl
    shadow-2xl
    p-4
    flex
    flex-col
    items-center
    justify-center
    gap-4
    min-w-[200px]
    min-h-[300px]
    md:w-full
    md:h-full
    md:mx-auto
    hover:scale-90
    md:cursor-pointer
    ">
        <Image 
        width={100}
        height={100}
        src={plano.imagem}
        alt={plano.nome}
        priority 
        className="
        bg-cover
        bg-center
        bg-no-repeat
        rounded-full 
        border-2 border-green-700/50
        shadow-2xl
        "
        />
        <p className="
        text-violet-900
        font-bold
        text-xl
        ">{plano.nome}</p>
        <p className="
        text-violet-700
        font-bold
        text-lg

        ">{plano.descricao}</p>
        <p className="
        text-green-700
        font-bold
        text-lg
        ">R$ {plano.valor}</p>
        <p className="flex items-center justify-center gap-4 font-bold">SITUAÇÃO: <div className={` w-4 h-4 rounded-full ${plano.status ? 'bg-green-600' : 'bg-red-600' }`} /> </p>
      </div>
  )
}