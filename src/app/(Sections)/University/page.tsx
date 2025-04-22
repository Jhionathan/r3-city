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
                    <CardUse title="Banheiros" image="/university/banheiro.jpeg" href="/University/Bathroom" />
                    <CardUse title="Corredor" image="/university/corredor.jpeg" href="/University/Corredor" />
                    <CardUse title="Fachada" image="/university/fachada.jpeg" href="/University/Fachada" />
                    <CardUse title="Lanchonete" image="/university/lanchonete.jpeg" href="/University/Lanchonete" />
                    <CardUse title="Quadra de Esportes" image="/university/quadra.jpeg" href="/University/Quadra" />
                    <CardUse title="Sala de Aula" image="/university/saladeaula.jpeg" href="/University/Sala" />
                    <CardUse title="Secretaria" image="/university/secretaria.jpeg" href="/University/Secretaria" />
                </div>
            </div>
        </Container>
    )
}