import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


export default function Market() {
    return (
       <Container>
        <div className="min-h-screen flex flex-col items-center w-full">
            <div className="my-24">
                <h2 className="text-4xl font-normal">Supermercado</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <CardUse title="Padaria" image="/supermarket/Padaria.jpg" href="/Market/Bakery"/>
                <CardUse title="Açougue" image="/supermarket/Açougue.jpg" href="/Market/Butcher"/>
                {/* <Card className="flex items-center flex-col">
                    <CardHeader>
                        <h3 className="text-center text-lg">Padaria</h3>
                    </CardHeader>
                    <CardContent>
                        <Link href="/Market/Bakery"> 
                            <Image src="/padaria.webp" alt="padaria" width={250} height={250}
                            className="rounded-md"
                            />
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex items-center flex-col">
                    <CardHeader>
                        <h3 className="text-center text-lg">Açougue</h3>
                    </CardHeader>
                    <CardContent>
                        <Link href="/Market/Butcher">
                            <Image src="/açougue.webp" alt="açougue" width={250} height={250}
                            className="rounded-md"
                            />
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex items-center flex-col">
                    <CardHeader>
                        <h3 className="text-center text-lg">Salão de Vendas</h3>
                    </CardHeader>
                    <CardContent>
                        <Link href="/Market/SalesRoom">
                            <Image src="/salao.webp" alt="hero" width={250} height={250}
                            className="rounded-md"
                            />
                        </Link>
                    </CardContent>
                </Card>
                <Card className="flex items-center flex-col">
                    <CardHeader>
                        <h3 className="text-center text-lg">DML</h3>
                    </CardHeader>
                    <CardContent>
                        <Link href="/Market/Dml">
                            <Image src="/DML.webp" alt="hero" width={250} height={250}
                            className="rounded-md"
                            />
                        </Link>
                    </CardContent>
                </Card> */}
            </div>
        </div>
       </Container>
    )
}