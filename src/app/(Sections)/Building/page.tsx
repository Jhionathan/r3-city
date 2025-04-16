import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-12">
                    <h3 className="text-4xl font-normal">Prédio em Obras</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Banheiro" image="/building/bathroom.jpeg" href="/Building/Bathroom" />
                    <CardUse title="Cafeteira" image="/building/room.jpeg" href="/Building/Cafeteria" />
                    <CardUse title="Sala Comercial" image="/building/sala.jpeg" href="/Building/Hall" />
                    <CardUse title="Elevador" image="/building/elevador.jpeg" href="/Building/Elevator" />
                    <CardUse title="Recepção" image="/building/salao.jpeg" href="/Building/Front" />
                    <CardUse title="Estacionamento" image="/building/estacionamento.jpeg" href="/Building/Parking" />
                    <CardUse title="Refeitorio" image="/building/praca.jpeg" href="/Building/Room" />
                </div>
            </div>
        </Container>
    )
}