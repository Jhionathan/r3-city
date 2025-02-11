import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";


export default function House() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-24">
                    <h2 className="text-4xl font-normal">Restaurante</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Cozinha Industrial" image="/restaurant/cozinha/cozinhaind.jpg" href="/Restaurant/IndustrialKitchen" />
                    <CardUse title="Sanitários" image="/restaurant/bathroom/bathroom.jpg" href="/Restaurant/BathRoom" />
                    <CardUse title="Esterilização" image="/restaurant/esterilizacao/esterelizacao.jpg" href="/Restaurant/Esterilizacao" />
                    <CardUse title="Salão" image="/restaurant/room/salao.jpg" href="/Restaurant/Room" />
                    <CardUse title="Fachada" image="/restaurant/facade/fachada.jpg" href="/Restaurant/Facade" />
                </div>

            </div>
        </Container>
    )
}