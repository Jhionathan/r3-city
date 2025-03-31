import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";



export default function Lazer() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/serviceroom/service.jpeg" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Mesa de Madeira" href="/House/Lisure" className="bottom-[40%] left-[34%]" />
                    <ButtonUse title="Espreguiadeira" href="/House/Lisure" className="bottom-[25%] left-[78%]" />
                    <ButtonUse title="Porta de Vidro" href="/House/Lisure" className="bottom-[38%] left-[5%]" />
                    <ButtonUse title="Revestimento Externo" href="/House/Lisure" className="bottom-[4%] left-[15%]" />
                </div>
            </Container>
        </div>
    )
}