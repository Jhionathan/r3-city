import { NextRequest } from "next/server";
import getProductDetail from "@/lib/getProductDetail";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ codigo: string }> } 
) {
  try {
    const { codigo } = await context.params; 
    
    if (!codigo) {
      return Response.json({ error: "Código do produto é obrigatório" }, { status: 400 });
    }

    const product = await getProductDetail(codigo);
    
    if (!product) {
      return Response.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    console.error("Erro na API de produto:", error);
    return Response.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}