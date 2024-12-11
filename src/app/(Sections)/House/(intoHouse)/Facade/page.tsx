import Image from "next/image"
import Container from "@/app/components/Container"
import ButtonUse from "@/app/components/Button"

export default function Facade() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/facade/fachada.webp" alt="banheiro" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[0%] left-[70%]" />
                    <ButtonUse title="Porta" href="/House/Facade" className="bottom-[25%] left-[58%]" />
                    <ButtonUse title="Calçada" href="/House/Facade" className="bottom-[-5%] left-[10%]" />
                </div>
            </Container>
        </div>
    )
}