import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";


export default function House() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-12">
                    <h2 className="text-4xl font-normal">Casa</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">

                    <CardUse title="Banheiro" image="/house/bathroom/bathroom.jpeg" href="/House/Bathroom" />

                    <CardUse title="Garagem" image="/house/garage/garage.jpeg" href="/House/Garage" />
                    
                    <CardUse title="Gourmet" image="/house/gourmet/gourmet.webp" href="/House/Gourmet" />

                    <CardUse title="Quarto" image="/house/room/quarto-1.png" href="/House/Room" />

                    <CardUse title="Sala" image="/house/livingroom/sala-1.png" href="/House/LivingRoom" />

                    <CardUse title="Area de Servico" image="/house/serviceroom/service.jpeg" href="/House/ServiceRoom" />

                    <CardUse title="Fachada" image="/house/facade/facade.jpeg" href="/House/Facade" />

                    <CardUse title="Cozinha" image="/house/kitchen/kitchen.jpeg" href="/House/Kitchen" />

                    <CardUse title="Area de Lazer" image="/house/leisure/lazer.jpeg" href="/House/Lisure" />

                </div>

            </div>
        </Container>
    )
}