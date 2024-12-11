import Image from "next/image"
import ButtonUse from "@/app/components/Button"
import Container from "@/app/components/Container"

export default function Kitchen() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/kitchen/cozinha.webp" alt="banheiro" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Coifa" href="/House/Kitchen" className="bottom-[50%] left-[49%]" />
                    <ButtonUse title="Janela" href="/House/Kitchen" className="bottom-[39%] left-[58%]" />
                    <ButtonUse title="Geladeira" href="/House/Kitchen" className="bottom-[20%] left-[15%]" />
                    <ButtonUse title="Azuleijo" href="/House/Kitchen" className="bottom-[30%] left-[88%]" />
                    <ButtonUse title="Microondas" href="/House/Kitchen" className="bottom-[35%] left-[28%]" />
                    <ButtonUse title="Louça e Utensilios" href="/House/Kitchen" className="bottom-[65%] left-[40%]" />
                    <ButtonUse title="Pia de Inox" href="/House/Kitchen" className="bottom-[28%] left-[60%]" />
                    <ButtonUse title="Marmore" href="/House/Kitchen" className="bottom-[27%] left-[69%]" />
                    <ButtonUse title="Fogão" href="/House/Kitchen" className="bottom-[18%] left-[80%]" />
                    <ButtonUse title="Piso" href="/House/Kitchen" className="bottom-[-5%] left-[70%]" />


                    
                </div>
            </Container>
        </div>
    )
}