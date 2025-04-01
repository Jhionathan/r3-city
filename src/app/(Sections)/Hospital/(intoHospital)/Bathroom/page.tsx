import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";


export default function Bathroom() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/hospitalbathroom.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Azulejo" href="/Hospital/Bathroom" className="bottom-[45%] left-[10%]" />
                    <ButtonUse title="Pia" href="/Hospital/Bathroom" className="bottom-[36%] left-[42%]" />
                    <ButtonUse title="Espelhos" href="/Hospital/Bathroom" className="bottom-[50%] left-[45%]" />
                    <ButtonUse title="Lixeiras" href="/Hospital/Bathroom" className="bottom-[20%] left-[27%]" />
                    <ButtonUse title="Piso" href="/Hospital/Bathroom" className="bottom-[-5%] left-[60%]" />
                    <ButtonUse title="Vaso Sanitario" href="/Hospital/Bathroom" className="bottom-[29%] left-[70%]" />
                    <ButtonUse title="Divisoria de Vidros" href="/Hospital/Bathroom" className="bottom-[40%] left-[65%]" />
                    <ButtonUse title="Higienização das Mãos" href="/Hospital/Bathroom" className="bottom-[35%] left-[26%]" />
                    <ButtonUse title="Limpeza de Dispensores" href="/Hospital/Bathroom" className="bottom-[49%] left-[21%]" />

                </div>
            </Container>
        </div>
    )
}