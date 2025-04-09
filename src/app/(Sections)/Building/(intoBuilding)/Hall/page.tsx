import ButtonUse from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";


export default function Hall() {
    return (
        <div className="min-h-screen relative">
            <Image src="/building/sala.jpeg" alt="banheiro" width={1920} height={1080} className="w-full h-full object-cover" />
            <Container>
                <div className="abosolute w-full h-full top-0 left-0">
                    <ButtonUse title="Vidro" href="/Building" className="bottom-[66%] left-[20%]" />
                    <ButtonUse title="Porta Madeira" href="/Building" className="bottom-[40%] left-[50%]" />
                    <ButtonUse title="Forro de gesso" href="/Building" className="bottom-[75%] left-[50%]" />
                    <ButtonUse title="Maçaneta e Puxadores de Aluminio" href="/Building" className="bottom-[40%] left-[75%]" />
                    <ButtonUse title="Piso Granilito" href="/Building" className="bottom-[5%] left-[50%]" />

                </div>
            </Container>
        </div>
    )
}