
import getProductDetail from "../../lib/getProductDetail";

interface ProductPageProps {
  params: {
    codigo: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { codigo } = params;
  const product = await getProductDetail(codigo);
  console.log(product);

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>❌ Produto não encontrado</h1>
        <p>Código: {'3228'}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>✅ Detalhes do Produto</h1>
      <ul>
        <li><strong>ID:</strong> {product.id}</li>
        <li><strong>Nome:</strong> {product.technicalInformation}</li>
      </ul>
    </div>
  );
}