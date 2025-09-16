import { cookies } from "next/headers";
import { getWinToken } from "./auth";

interface ProductDetail {
  id: string;
  technicalInformation: string;
}

const apiLogin = process.env.API_USERNAME;
const apiPassword = process.env.API_PASSWORD;
const API_PRODUCT_URL = process.env.API_PRODUCT_URL;

export default async function getProductDetail(codprod: string): Promise<ProductDetail | null> {
  console.log(`📦 Iniciando busca do produto ${codprod}...`);
  
  if (!apiLogin || !apiPassword || !API_PRODUCT_URL) {
    console.error('❌ Variáveis de ambiente não configuradas:');
    console.error('API_USERNAME:', apiLogin ? 'OK' : 'FALTANDO');
    console.error('API_PASSWORD:', apiPassword ? 'OK' : 'FALTANDO');
    console.error('API_PRODUCT_URL:', API_PRODUCT_URL ? 'OK' : 'FALTANDO');
    return null;
  }

  const cookieStore = await cookies();
  let winToken: string | null = cookieStore.get("tokenWin")?.value ?? null;

  if (!winToken) {
    console.log('🔑 Token não encontrado no cookie, fazendo login...');
    winToken = await getWinToken(apiLogin, apiPassword);

    if (!winToken) {
      console.error("❌ Falha ao obter token");
      return null;
    }
  } else {
    console.log('✅ Token encontrado no cookie');
  }

  try {
    console.log(`🔍 Buscando dados técnicos para produto ${codprod}...`);
    console.log('📍 URL:', `${API_PRODUCT_URL}/${codprod}`);
    
    const response = await fetch(`${API_PRODUCT_URL}/${codprod}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${winToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store", 
    });

    console.log('📡 Status da resposta do produto:', response.status);

    if (!response.ok) {
      const errorMsg = await response.text();
      console.error("❌ Erro ao buscar produto:", response.status, errorMsg);
      
      
      if (response.status === 401) {
        console.log('🔄 Token expirado, tentando renovar...');
        winToken = await getWinToken(apiLogin, apiPassword);
        
        if (winToken) {
          
          const retryResponse = await fetch(`${API_PRODUCT_URL}/${codprod}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${winToken}`,
              "Content-Type": "application/json",
            },
            cache: "no-store", 
          });
          
          if (retryResponse.ok) {
            const retryData: ProductDetail = await retryResponse.json();
            console.log('✅ Produto obtido após renovar token');
            return retryData;
          }
        }
      }
      
      return null;
    }

    const data: ProductDetail = await response.json();
    console.log('✅ Dados técnicos obtidos com sucesso');
    console.log('📄 Dados:', data);
    
    return data;

  } catch (error) {
    console.error("❌ Erro inesperado em getProductDetail:", error);
    return null;
  }
}