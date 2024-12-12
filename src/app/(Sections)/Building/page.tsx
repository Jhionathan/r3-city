import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-24">
                    <h3 className="text-4xl font-normal">Prédio em Obras</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Banheiro" image="/building/bathroom/banheiro-obra.webp" href="/Building/Bathroom" />
                    <CardUse title="Cafeteira" image="/building/cafeteria/cafeteria-obra.webp" href="/Building/Cafe" />
                    <CardUse title="Sala Comercial" image="/building/comercialhall/sala-comecial-obra.webp" href="/Building/Kitchen" />
                    <CardUse title="Elevador" image="/building/elevator/elevador-obra.webp" href="/Building/Corridor" />
                    <CardUse title="Recepção" image="/building/hall/hall-obra.webp" href="/Building/Hall" />
                    <CardUse title="Estacionamento" image="/building/parking/estacionamento-obra.webp" href="/Building/Room" />
                    <CardUse title="Refeitorio" image="/building/square/refeitorio-obra.webp" href="/Building/ServiceRoom" />
                </div>
            </div>
        </Container>
    )
}