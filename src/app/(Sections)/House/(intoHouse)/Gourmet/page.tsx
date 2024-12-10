import Container from "@/app/components/Container";
import Image from "next/image";

export default function Gourmet() {
    return (
        <div className="min-h-screen relative">
            <Image src="/house/gourmet/gourmet.webp" alt="banheiro" width={1920} height={1080}
             className="w-full h-full object-cover" />
            <Container>
                <div>

                </div>
            </Container>
        </div>
    )
}