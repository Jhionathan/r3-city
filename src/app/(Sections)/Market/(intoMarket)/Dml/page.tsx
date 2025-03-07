import { MapPinCheckInside } from "lucide-react";
import Container from "@/app/components/Container"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Dml() {
    return (
        <div className="min-h-screen relative">
            <Image
                src="/supermarket/dml.jpeg" height={1792} width={1024} alt="vitrine"
                className="w-full h-full object-contain" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                        className="absolute bottom-[50%] left-[80%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Aventais</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[30%] left-[50%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Maquina de Lavar</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[33%] left-[14%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Prateleiras</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[0%] left-[48%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Piso Concreto Queimado</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[80%] left-[48%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Paredes de Azulejo</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}