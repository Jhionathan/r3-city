import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";


export default function Room() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/room.jpeg" alt="quarto" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso em Cimento Queimado" href="/Building" className="bottom-[13%] left-[40%]" />
                </div>
            </Container>
        </div>
    )
}