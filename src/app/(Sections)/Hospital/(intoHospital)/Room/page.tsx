import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";



export default function Room() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/quarto.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[-5%] left-[80%]" />
                    <ButtonUse title="Poltrona" href="/House/Facade" className="bottom-[20%] left-[78%]" />
                    <ButtonUse title="Cama Paciente" href="/House/Facade" className="bottom-[30%] left-[50%]" />
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[-5%] left-[80%]" />
                    <ButtonUse title="Equipamentos" href="/House/Facade" className="bottom-[47%] left-[34%]" />
                    <ButtonUse title="Movéis de Madeira" href="/House/Facade" className="bottom-[10%] left-[10%]" />
                </div>
            </Container>
        </div>
    )
}