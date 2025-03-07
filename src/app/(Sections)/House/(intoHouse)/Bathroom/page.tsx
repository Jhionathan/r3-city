import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Bathroom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/bathroom/bathroom-1.jpeg" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" /> 
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Azulejo" href="/House/Bathroom" className="bottom-[60%] left-[50%]"/>

                    <ButtonUse title="Janela" href="/House/Bathroom" className="bottom-[55%] left-[65%]"/>

                    <ButtonUse title="Box" href="/House/Bathroom" className="bottom-[60%] left-[40%]"/>

                    <ButtonUse title="Ralo" href="/House/Bathroom" className="bottom-[15%] left-[40%]"/>    

                    <ButtonUse title="Vaso Sanitario" href="/House/Bathroom" className="bottom-[30%] left-[57%]"/>

                    <ButtonUse title="Piso" href="/House/Bathroom" className="bottom-[5%] left-[50%]"/>

                    <ButtonUse title="Armario Madeira" href="/House/Bathroom" className="bottom-[35%] left-[23%]"/>

                    <ButtonUse title="Pia" href="/House/Bathroom" className="bottom-[30%] left-[75%]"/>

                    <ButtonUse title="Saboneteira" href="/House/Bathroom" className="bottom-[36%] left-[65%]"/>

                    <ButtonUse title="Espelho" href="/House/Bathroom" className="bottom-[55%] left-[80%]"/>
                </div>
            </Container>
        </div>
    )
}