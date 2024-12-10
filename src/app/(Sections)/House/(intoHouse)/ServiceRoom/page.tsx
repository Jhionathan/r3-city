import Image from "next/image"
import ButtonUse from "@/app/components/Button"
import Container from "@/app/components/Container"

export default function ServiceRoom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/serviceroom/service.webp" alt="banheiro" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Porta" href="/House/ServiceRoom" className="bottom-[20%] left-[22%]" />
                    <ButtonUse title="Pia" href="/House/ServiceRoom" className="bottom-[35%] left-[47%]" />
                    <ButtonUse title="Azuleijo" href="/House/ServiceRoom" className="bottom-[47%] left-[40%]" />
                    <ButtonUse title="Maquina de Lavar" href="/House/ServiceRoom" className="bottom-[18%] left-[34%]" />
                    <ButtonUse title="Passar Roupa" href="/House/ServiceRoom" className="bottom-[30%] left-[70%]" />
                    <ButtonUse title="Bancada" href="/House/ServiceRoom" className="bottom-[37%] left-[34%]" />
                    <ButtonUse title="Roupas Brancas" href="/House/ServiceRoom" className="bottom-[55%] left-[67%]" />
                    <ButtonUse title="Ármario de Fórmica" href="/House/ServiceRoom" className="bottom-[60%] left-[35%]" />
                    <ButtonUse title="Piso Aderente" href="/House/ServiceRoom" className="bottom-[-6%] left-[40%]" />
                </div>
            </Container>
        </div>
    )
}