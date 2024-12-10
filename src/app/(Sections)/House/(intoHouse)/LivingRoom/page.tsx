import Image from "next/image"
import Container from "@/app/components/Container"
import ButtonUse from "@/app/components/Button"
export default function LivingRoom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/livingroom/sala-1.png" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" /> 
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Cortinas" href="/House/LivingRoom" className="bottom-[55%] left-[42%]"/>
                    <ButtonUse title="Vidro" href="/House/LivingRoom" className="bottom-[55%] left-[52%]"/>
                    <ButtonUse title="Mesa Marmore" href="/House/LivingRoom" className="bottom-[46%] left-[50%]"/>
                    <ButtonUse title="Movél de Madeira" href="/House/LivingRoom" className="bottom-[50%] left-[35%]"/>
                    <ButtonUse title="Mesa de Vidro" href="/House/LivingRoom" className="bottom-[20%] left-[50%]"/>
                    <ButtonUse title="Piso Marmore" href="/House/LivingRoom" className="bottom-[30%] left-[40%]"/>
                </div>
            </Container>
        </div>
    )
}