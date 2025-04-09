import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function Building() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-14">
                    <h3 className="text-4xl font-normal">Hotel</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Academia" image="/hotel/academia.jpeg" href="/Building/Bathroom" />
                    <CardUse title="Hall" image="/hotel/hall.jpeg" href="/Building/Cafeteria" />
                    <CardUse title="Quarto de Hotel" image="/hotel/quarto.jpeg" href="/Building/Hall" />
                    <CardUse title="Restaurante" image="/hotel/restaurante.jpeg" href="/Building/Elevator" />
                    <CardUse title="Salão" image="/hotel/salao.jpeg" href="/Building/Front" />
                </div>
            </div>
        </Container>
    )
}