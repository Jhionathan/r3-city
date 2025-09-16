'use client'

import { useEffect, useState } from "react";
import { getProductDetailsAction } from "@/lib/action";
import getProductDetail from "../../../lib/getProductDetail";
import ProductTechInfo from "../ProductTechInfo";

interface ProductDetailsClientProps {
  codprod: string;
}

interface ProductDetail {
  technicalInformation: string;
  technicalData: string;
}



export function ProductDetailsClient({ codprod }: ProductDetailsClientProps) {
  const [productDetails, setProductDetails] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    async function loadDetails() {
      try {
        setLoading(true);
        setError(null);
        
 
        const response = await fetch(`/api/getTecnical/${codprod}`, {
          cache: 'no-store'
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao buscar produto');
        }

        const details = await response.json();
        setProductDetails(details);
      } catch (err) {
        console.error('Erro ao carregar detalhes:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setProductDetails(null);
      } finally {
        setLoading(false);
      }
    }

    loadDetails();
  }, [codprod]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-2 w-48"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <p className="text-sm text-gray-500">
        Nenhuma informação técnica disponível para este produto.
      </p>
    );
  }

  return (
    <div className="text-sm md:text-base">
      {/* <h3 className="text-lg font-bold mb-2">Informações Técnicas:</h3>
      <p className="whitespace-pre-wrap">{productDetails.technicalInformation}</p>
      <hr/>
      <p>{productDetails.technicalData}</p> */}
      <ProductTechInfo technicalInformation={productDetails.technicalInformation} technicalData={productDetails.technicalData} />
    </div>
  );
}