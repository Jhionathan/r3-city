import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Bathroom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/bathroom/banheiro-2.webp" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" /> 
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Azulejo" href="/House/Bathroom" className="bottom-[45%] left-[10%]"/>

                    <ButtonUse title="Janela" href="/House/Bathroom" className="bottom-[55%] left-[3%]"/>

                    <ButtonUse title="Box" href="/House/Bathroom" className="bottom-[70%] left-[29%]"/>

                    <ButtonUse title="Ralo" href="/House/Bathroom" className="bottom-[13%] left-[23%]"/>    

                    <ButtonUse title="Vaso Sanitario" href="/House/Bathroom" className="bottom-[20%] left-[69%]"/>

                    <ButtonUse title="Piso" href="/House/Bathroom" className="bottom-[5%] left-[60%]"/>

                    <ButtonUse title="Armario Madeira" href="/House/Bathroom" className="bottom-[19%] left-[50%]"/>

                    <ButtonUse title="Pia" href="/House/Bathroom" className="bottom-[36%] left-[38%]"/>

                    <ButtonUse title="Saboneteira" href="/House/Bathroom" className="bottom-[36%] left-[65%]"/>

                    <ButtonUse title="Espelho" href="/House/Bathroom" className="bottom-[50%] left-[50%]"/>
                </div>
            </Container>
        </div>
    )
}