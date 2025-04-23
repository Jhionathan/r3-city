import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-14">
                    <h3 className="text-4xl font-normal">Universidade</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Praça de Alimentação" image="/shopping/alimentacao.jpeg" href="/Shopping/Praca" />
                    <CardUse title="Banheiro" image="/shopping/banheiro.jpeg" href="/Building/Cafeteria" />
                    <CardUse title="Cinema" image="/shopping/cinema.jpeg" href="/Building/Hall" />
                    <CardUse title="Corredores" image="/shopping/corredor.jpeg" href="/Building/Elevator" />
                    <CardUse title="Fachada" image="/shopping/fachada.jpeg" href="/Building/Front" />
                    <CardUse title="Hall" image="/shopping/hall.jpeg" href="/Building/Front" />
                </div>
            </div>
        </Container>
    )
}