import Container from "@/app/components/Container";
import Image from "next/image";
import ButtonUse from "@/app/components/Button";
import { Button } from "react-day-picker";

export default function Hospital() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/corredor.jpeg" alt="banheiro" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[0%] left-[50%]" />
                    <ButtonUse title="Porta" href="/House/Facade" className="bottom-[39%] left-[74%]" />
                    <ButtonUse title="Mural" href="/House/Facade" className="bottom-[45%] left-[68%]" />
                    <ButtonUse title="Vidros" href="/House/Facade" className="bottom-[43%] left-[62%]" />
                    <ButtonUse title="Maçaneta de Portas" href="/House/Facade" className="bottom-[38%] left-[53%]" />
                    <ButtonUse title="Monitores de Led" href="/House/Facade" className="bottom-[42%] left-[37%]" />
                    <ButtonUse title="Bancada de Madeira" href="/House/Facade" className="bottom-[33%] left-[25%]" />
                </div>
            </Container>
        </div>
    )
}