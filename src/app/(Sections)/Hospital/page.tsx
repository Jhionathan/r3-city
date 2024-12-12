import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Hospital() {
    return (
            <Container>
                <div className="min-h-screen flex flex-col items-center w-full">
                    <div className="my-24">
                        <h3 className="text-4xl font-normal">Hospital</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <CardUse title="Banheiro" image="/hospital/bathroom/banheiro-hosp.webp" href="/Hospital/Bathroom"/>
                        <CardUse title="Corredor" image="/hospital/corridor/corredor.webp" href="/Hospital/Corridor"/>
                        <CardUse title="Quarto" image="/hospital/room/quarto-hosp.webp" href="/Hospital/Room"/>
                        <CardUse title="Hall" image="/hospital/hall/hall-hosp-1.webp" href="/Hospital/Hospital"/>
                        <CardUse title="Quarto" image="/hospital/room/quarto-hosp.webp" href="/Hospital/Hospital"/>
                        <CardUse title="Fachada Hospital" image="/hospital/facade/fachada-hosp.webp" href="/Hospital/Facade"/>
                    </div>
                </div>
            </Container>
    )
}