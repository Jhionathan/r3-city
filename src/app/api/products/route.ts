import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')?.trim().toUpperCase() 

    if (!categoria) {
        return NextResponse.json({ error: "Categoria não especificada" }, { status: 400 })
    }

    try {
        console.log("Buscando categoria:", categoria) 

        const products = await prisma.produtos.findMany({
            where: {
                categoria: {
                    equals: categoria,
                    mode: 'insensitive' 
                }
            },
        })
        
        console.log("Produtos encontrados:", products) 
        return NextResponse.json(products)
    } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        return NextResponse.json({ error: "Erro ao buscar produtos" }, { status: 500 })
    }
}