import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Front() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/hall/hall-obra.webp" alt="Recepção" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="abosolute w-full h-full top-0 left-0">
                    <ButtonUse title="Piso Marmore" href="/Building" className="bottom-[13%] left-[40%]" />
                    <ButtonUse title="Corrimão Aço inox" href="/Building" className="bottom-[50%] left-[68%]" />
                    <ButtonUse title="Escada em Marmore" href="/Building" className="bottom-[40%] left-[64%]" />
                    <ButtonUse title="Vidraças" href="/Building" className="bottom-[70%] left-[20%]" />
                    <ButtonUse title="Espelhos" href="/Building" className="bottom-[40%] left-[53%]" />
                    <ButtonUse title="Painel Vinilico" href="/Building" className="bottom-[40%] left-[20%]" />
                    <ButtonUse title="Balcão em Fórmica" href="/Building" className="bottom-[29%] left-[48%]" />
                    <ButtonUse title="Esquadrilha em Aluminio" href="/Building" className="bottom-[65%] left-[55%]" />
                </div>
            </Container>
        </div>
    )
}