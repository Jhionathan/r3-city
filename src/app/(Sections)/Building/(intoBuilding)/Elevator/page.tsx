import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";


export default function Elevator() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/elevador.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div>
                    <ButtonUse title="Espelho" href="/Building" className="bottom-[50%] left-[50%]" />
                    <ButtonUse title="Piso Granito" href="/Building" className="bottom-[18%] left-[40%]" />
                    <ButtonUse title="Parede e Corrimão Aço inox" href="/Building" className="bottom-[60%] left-[70%]" />
                </div>
            </Container>

        </div>
    )
}