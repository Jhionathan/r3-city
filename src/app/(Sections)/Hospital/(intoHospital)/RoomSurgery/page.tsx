import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";



export default function RoomSurgery() {
    return (
        <div className="min-h-screen relative">
            <Image src="/hospital/cirurgia.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Luminaria" href="/House/Facade" className="bottom-[68%] left-[55%]" />
                    <ButtonUse title="Piso" href="/House/Facade" className="bottom-[0%] left-[74%]" />
                    <ButtonUse title="Bancadas de inox" href="/House/Facade" className="bottom-[30%] left-[60%]" />
                    <ButtonUse title="Vidros" href="/House/Facade" className="bottom-[49%] left-[15%]" />
                </div>
            </Container>
        </div>)

}