import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-14">
                    <h3 className="text-4xl font-normal">Shopping</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Praça de Alimentação" image="/shopping/alimentacao.jpeg" href="/Shopping/Praca" />
                    <CardUse title="Banheiro" image="/shopping/banheiro.jpeg" href="/Shopping/Banheiro" />
                    <CardUse title="Cinema" image="/shopping/cinema.jpeg" href="/Shopping/Cinema" />
                    <CardUse title="Corredores" image="/shopping/corredor.jpeg" href="/Shopping/Corredores" />
                    <CardUse title="Fachada" image="/shopping/fachada.jpeg" href="/Shopping/Fachada" />
                    <CardUse title="Hall" image="/shopping/hall.jpeg" href="/Shopping/Hall" />
                </div>
            </div>
        </Container>
    )
}