import Container from "@/app/components/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


export default function Market() {
    return (
       <Container>
        <div className="min-h-screen flex flex-col items-center w-full">
            <div className="my-32">
                <h2 className="text-4xl font-normal">Supermercado</h2>
            </div>
            <div className="flex gap-4 items-center">
                <Card className="flex items-center flex-col">
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
                </Card>
            </div>
        </div>
       </Container>
    )
}