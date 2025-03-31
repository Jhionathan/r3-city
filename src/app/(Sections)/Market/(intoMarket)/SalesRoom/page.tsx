import { MapPinCheckInside } from "lucide-react";
import Container from "@/app/components/Container"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function SalesRoom() {
    return (
        <div className="min-h-screen relative">
            <Image
                src="/supermarket/room.jpeg" height={1920} width={1080} alt="vitrine" priority
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                        className="absolute bottom-[50%] left-[50%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Gondolas</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[45%] left-[10%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Prateleiras</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[13%] left-[40%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Caixa de Supermercado</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[60%] left-[48%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Piso</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}