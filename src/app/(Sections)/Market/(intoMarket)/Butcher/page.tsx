import Container from "@/app/components/Container"
import { MapPinCheckInside } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Butcher() {
    return (
        <div className="min-h-screen relative">
            <Image
                src="/açougue-comp.webp" height={1920} width={1080} alt="acougue"
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                        className="absolute bottom-[30%] left-[75%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Vitrine de vidro</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[40%] left-[85%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Parede de Azulejo</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[48%] left-[65%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Bancada de Inox</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[40%] left-[35%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Pia</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[54%] left-[39%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Moedor de Carne</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[48%] left-[25%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Refrigerador</Link>
                    </Button>

                    <Button variant={"outline"}
                        className="absolute bottom-[55%] left-[55%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Tabua de Carne</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}