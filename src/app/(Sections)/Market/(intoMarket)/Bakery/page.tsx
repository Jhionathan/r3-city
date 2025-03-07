import Container from "@/app/components/Container"
import { Button } from "@/components/ui/button";
import { MapPinCheckInside } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

export default function Bakery() {
    return (
        <div className="min-h-screen relative">
            <Image
                src="/supermarket/Padaria.jpg" height={1920} width={1080} alt="padaria"
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                        className="absolute bottom-[17%] left-[90%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Piso granilite</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[30%] left-[55%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Vitrine de vidro</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[40%] left-[25%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Maquina de lavar-louças</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[51%] left-[60%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Vidros</Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}