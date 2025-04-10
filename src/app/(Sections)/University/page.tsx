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
                    <CardUse title="Banheiros" image="/university/banheiro.jpeg" href="/Building/Bathroom" />
                    <CardUse title="Corredor" image="/university/corredor.jpeg" href="/Building/Cafeteria" />
                    <CardUse title="Fachada" image="/university/fachada.jpeg" href="/Building/Hall" />
                    <CardUse title="Lanchonete" image="/university/lanchonete.jpeg" href="/Building/Elevator" />
                    <CardUse title="Quadra de Esportes" image="/university/quadra.jpeg" href="/Building/Front" />
                    <CardUse title="Sala de Aula" image="/university/saladeaula.jpeg" href="/Building/Front" />
                    <CardUse title="Secretaria" image="/university/secretaria.jpeg" href="/Building/Front" />
                </div>
            </div>
        </Container>
    )
}