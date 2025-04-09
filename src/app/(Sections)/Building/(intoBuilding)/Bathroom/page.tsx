import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Bathroom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/bathroom.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover"/>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Pia em Granito" href="/Building" className="absolute bottom-[28%] left-[25%]" />
                    <ButtonUse title="Divisoria" href="/Building" className="absolute bottom-[48%] left-[43%]" />
                    <ButtonUse title="Vaso Sanitario" href="/Building" className="absolute bottom-[28%] left-[59%]" />
                    <ButtonUse title="Piso Porcelanato" href="/Building" className="absolute bottom-[-5%] left-[40%]" />
                    <ButtonUse title="Torneira Inox" href="/Building" className="absolute bottom-[35%] left-[75%]" />
                    <ButtonUse title="Espelho" href="/Building" className="absolute bottom-[58%] left-[24%]" />
                </div>
            </Container>
        </div>
    )
}