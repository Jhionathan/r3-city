import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";


export default function House() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-32">
                    <h2 className="text-4xl font-normal">Casa</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">

                    <CardUse title="Banheiro" image="/house/bathroom/banheiro-2.webp" href="/House/Bathroom" />

                    <CardUse title="Garagem" image="/house/garage/garagem-2.webp" href="/House/Garage" />
                    
                    <CardUse title="Gourmet" image="/house/gourmet/gourmet.webp" href="/House/Gourmet" />

                    <CardUse title="Quarto" image="/house/room/quarto-1.png" href="/House/Room" />

                    <CardUse title="Sala" image="/house/livingroom/sala-1.png" href="/House/LivingRoom" />

                    <CardUse title="Area de Servico" image="/house/serviceroom/service.webp" href="/House/ServiceRoom" />

                    <CardUse title="Fachada" image="/house/facade/fachada.webp" href="/House/Facede" />

                    <CardUse title="Cozinha" image="/house/kitchen/cozinha.webp" href="/House/Kitchen" />

                    <CardUse title="Area de Lazer" image="/house/leisure/lazer.webp" href="/House/Lisure" />

                </div>

            </div>
        </Container>
    )
}