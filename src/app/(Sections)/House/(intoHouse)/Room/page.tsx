import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Room() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/room/room.jpeg" alt="quarto" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Espelhos" href="/House/Room" className="bottom-[65%] left-[70%]" />

                    <ButtonUse title="Comoda" href="/House/Room" className="bottom-[16%] left-[20%]" />

                    <ButtonUse title="Movél de Madeira" href="/House/Room" className="bottom-[20%] left-[70%]" />

                    <ButtonUse title="Piso" href="/House/Room" className="bottom-[0%] left-[80%]" />

                    <ButtonUse title="Janela" href="/House/Room" className="bottom-[50%] left-[90%]" />
                </div>
            </Container>
        </div>
    )
}