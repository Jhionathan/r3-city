import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function House() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-32">
                    <h2 className="text-4xl font-normal">Casa</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <CardUse title="Banheiro" image="/house/bathroom/banheiro-2.webp" href="/House/Bathroom" />

                    <CardUse title="Garagem" image="/house/garage/garagem-2.webp" href="/House/ServiceRoom" />
                    
                    <CardUse title="Gourmet" image="/house/gourmet/gourmet.webp" href="/House/LivingRoom" />

                    <CardUse title="Quarto" image="/house/room/quarto-1.png" href="/House/Kitchen" />

                    <CardUse title="Sala" image="/house/livingroom/sala-1.png" href="/House/Kitchen" />

                    <CardUse title="Cozinha" image="/house/serviceroom/service.webp" href="/House/Kitchen" />

                </div>

            </div>
        </Container>
    )
}