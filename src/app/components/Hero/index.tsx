import { Button } from "@/components/ui/button";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { MapPinCheckInside } from 'lucide-react';

export async function Hero() {
    return (
        <div className="relative w-full h-screen">
            <Image src="/7.webp" alt="hero" width={1920} height={1080}
            className="w-full h-full object-cover bg-opacity-85">
            </Image>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                    className="absolute bottom-[24%] left-[22%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link className="text-white text-lg" href="/Market">Supermercado</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[24%] left-[25%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white"/>
                        <Link href="/" className="text-white text-lg">Hoteis</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[75%] left-[48%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Hospitais</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[41%] left-[45%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Restaurante</Link>  
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[43%] left-[57%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Industria</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[50%] left-[15%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Casas</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[70%] right-[26%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Universidade</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[80%] right-[16%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className="h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Pos Obras</Link>
                    </Button>
                    
                    <Button variant={"outline"}
                    className="absolute bottom-[30%] right-[2%] bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100">
                        <MapPinCheckInside className=" h-4 w-4 text-white" />
                        <Link href="/" className="text-white text-lg">Shopping</Link>
                    </Button> 
                </div>
            </Container>
        </div>
    )
}