import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Parking() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/parking/estacionamento-obra.webp" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="abosolute w-full h-full top-0 left-0">
                    <ButtonUse title="Piso em Cimento Queimado" href="/Building" className="bottom-[13%] left-[40%]" />
                    <ButtonUse title="Paredes e Colunas" href="/Building" className="bottom-[50%] left-[68%]" />
                    <ButtonUse title="Teto com Bolor" href="/Building" className="bottom-[75%] left-[50%]" />
                    </div>
            </Container>
        </div>
    )
}