import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";



export default function Hall() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/hall/hall-hosp-1.webp" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" /> 
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Piso" href="/Hospital/Hall" className="bottom-[-5%] left-[10%]" />
                    <ButtonUse title="Painel" href="/Hospital/Hall" className="bottom-[50%] left-[55%]" />
                    <ButtonUse title="Janelas" href="/Hospital/Hall" className="bottom-[35%] left-[90%]" />
                    <ButtonUse title="Estofados" href="/Hospital/Hall" className="bottom-[15%] left-[42%]" />
                    <ButtonUse title="Bancada de Atendimento" href="/Hospital/Hall" className="bottom-[30%] left-[54%]" />
                    <ButtonUse title="Mesa" href="/Hospital/Hall" className="bottom-[5%] left-[55%]" />
                </div>
            </Container>
        </div>
    )
}