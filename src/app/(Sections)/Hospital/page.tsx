import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Hospital() {
    return (
            <Container>
                <div className="min-h-screen flex flex-col items-center w-full">
                    <div className="my-12">
                        <h3 className="text-4xl font-normal">Hospital</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <CardUse title="Banheiro" image="/hospital/hospitalbathroom.jpeg" href="/Hospital/Bathroom"/>
                        <CardUse title="Corredor" image="/hospital/corredor.jpeg" href="/Hospital/Corridor"/>
                        <CardUse title="Apartamento do Paciente" image="/hospital/quarto.jpeg" href="/Hospital/Room"/>
                        <CardUse title="Recepção" image="/hospital/hospitalrecepcao.jpeg" href="/Hospital/Hall"/>
                        <CardUse title="Sala de Cirurgia" image="/hospital/cirurgia.jpeg" href="/Hospital/RoomSurgery"/>
                        <CardUse title="Fachada Hospital" image="/hospital/facade.jpeg" href="/Hospital/Facade"/>
                    </div>
                </div>
            </Container>
    )
}