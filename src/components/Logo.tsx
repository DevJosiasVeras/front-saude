import Link from "next/link";
import { title } from "process";

interface LogoProps {
  title: string;
}


export default function Logo({title}: LogoProps) {
  return (
    <Link href={'/medico'} className='
    hover:animate-pulse
    text-green-500 font-bold text-2xl'>{title}<span className='text-green-900'>+</span></Link>
  )
}