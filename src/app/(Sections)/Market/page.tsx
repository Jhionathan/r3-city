import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";


export default function Market() {
    return (
       <Container>
        <div className="min-h-screen flex flex-col items-center w-full">
            <div className="my-12">
                <h2 className="text-4xl font-normal">Supermercado</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <CardUse title="Padaria" image="/supermarket/Padaria.jpg" href="/Market/Bakery"/>
                <CardUse title="Açougue" image="/supermarket/açougue-2.jpeg" href="/Market/Butcher"/>
                <CardUse title="Salão de Vendas" image="/supermarket/room.jpeg" href="/Market/SalesRoom"/>
                <CardUse title="DML" image="/supermarket/dml.jpeg" href="/Market/Dml"/>
            </div>
        </div>
       </Container>
    )
}