import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";

export default function Garage() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/garage/garagem-2.webp" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" /> 
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Limpeza Automotiva" href="/House/Garage" className="bottom-[43%] left-[50%]"/>
                    <ButtonUse title="Piso Aderente" href="/House/Garage" className="bottom-[5%] left-[60%]"/>
                    <ButtonUse title="Piso Rustico" href="/House/Garage" className="bottom-[0%] left-[20%]"/>
                </div>
            </Container>
        </div>
    )
}