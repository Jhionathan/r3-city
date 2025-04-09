import Container from "@/app/components/Container";
import Image from "next/image";
import ButtonUse from "@/app/components/Button";

export default function Cafeteria() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/room.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div>
                    <ButtonUse title="Maquina de Cafe" href="/Building" className="bottom-[52%] left-[68%]" />
                    <ButtonUse title="Painel Laminado" href="/Building" className="bottom-[85%] left-[65%]" />
                    <ButtonUse title="Bancada de Granito" href="/Building" className="bottom-[44%] left-[55%]" />
                    <ButtonUse title="Espelho" href="/Building" className="bottom-[54%] left-[50%]" />
                    <ButtonUse title="Mesa Madeira" href="/Building" className="bottom-[40%] left-[18%]" />
                    <ButtonUse title="Vidro" href="/Building" className="bottom-[59%] left-[19%]" />
                    <ButtonUse title="Piso Ceramico" href="/Building" className="bottom-[17%] left-[30%]" />
                </div>
            </Container>
        </div>
    )
}