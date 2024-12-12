import Container from "@/app/components/Container";
import Image from "next/image";
import ButtonUse from "@/app/components/Button";


export default function Facade() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/facade/fachada-hosp.webp" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[0%] left-[70%]" />
                    <ButtonUse title="Vidros" href="/House/Facade" className="bottom-[60%] left-[45%]" />
                    <ButtonUse title="Fachada"  href="/House/Facade" className="bottom-[90%] left-[50%]" />
                </div>
            </Container>
        </div>
    )
}