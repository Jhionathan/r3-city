import { Button } from "@/components/ui/button";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";



export async function Hero() {
    return (
        <div className="relative w-full h-screen">
            <Image src="/7.webp" alt="hero" width={1920} height={1080}
            className="w-full h-full object-cover">
            </Image>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <Button variant={"outline"}
                    className="absolute bottom-[24%] left-[25%]">
                        <Link href="/">Supermercado</Link>
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[24%] left-[28%]">
                        Hoteis
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[75%] left-[48%]">
                        Hospitais
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[45%] left-[46%]">
                        Restaurante
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[40%] left-[57%]">
                        Industria
                    </Button>

                    <Button variant={"outline"}
                    className="absolute top-[50%] left-[16%]">
                        Casas
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[70%] right-[26%]">
                        Universidade
                    </Button>

                    <Button variant={"outline"}
                    className="absolute bottom-[80%] right-[17%]">
                        Pos Obras
                    </Button>
                    
                    
                    <Button variant={"outline"}
                    className="absolute bottom-[30%] right-[5%]">
                        Shopping
                    </Button> 
                </div>
            </Container>
        </div>
    )
}