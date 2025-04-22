import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-14">
                    <h3 className="text-4xl font-normal">Indústria</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Banheiro" image="/industria/banheiro.jpeg" href="/Industria/Banheiro" />
                    <CardUse title="Cozinha" image="/industria/cozinha.jpeg" href="/Industria/Cozinha" />
                    <CardUse title="Fachada" image="/industria/fachada.jpeg" href="/Industria/Fachada" />
                    <CardUse title="Sala de Reunião" image="/industria/reuniao.jpeg" href="/Industria/SalaReuniao" />
                    <CardUse title="Recepção" image="/industria/recepcao.jpeg" href="/Industria/Recepcao" />
                    <CardUse title="Sala de Call Center" image="/industria/sac.jpeg" href="/Industria/CallCenter" />
                    <CardUse title="Área de Envase" image="/industria/prod.jpeg" href="/Industria/Envase" />
                    <CardUse title="Área de Produção" image="/industria/producao.jpeg" href="/Industria/Producao" />

                </div>
            </div>
        </Container>
    )
}