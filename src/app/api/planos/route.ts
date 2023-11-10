import { NextResponse } from "next/server"
import axios from "axios"

export async function GET() {
  const planos = (await axios.get("http://localhost:4003/planos")).data
  if(!planos) return NextResponse.error()
  return NextResponse.json(planos)
}