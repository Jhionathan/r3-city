'use client'

import Image from "next/image"
import ButtonUse from "@/app/components/Button"
import Container from "@/app/components/Container"
import { Card, CardTitle } from "@/components/ui/card"
import { MapPinCheckInside, X } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface Card {
    id: number;
    title: string;
}


const prodcutsData: Record<string, Card[]> = {
    porta: [
        { id: 6670, title: "LIMPA VIDROS 5 LITROS SPARTAN", },
        { id: 6352, title: "PAPEL TOALHA INTERFOLIADO FOLHA SIMPLES T20IS 2000 FOLHAS" },
        { id: 2923, title: "ENXAGUANTE BUCAL HALITO PURO 1 LITROS", },
        { id: 5317, title: "SABONETE LIQUIDO 5 LITROS ALL CLEAN ANTISSEPTICO", },
        { id: 5328, title: "DETERGENTE DESENGORDURANTE 5 LITROS ALCALINO INSPECTOS", },

    ],
    pia: [
        { id: 4812, title: "SABONETE LIQUIDO 5 LITROS DESENGRAXANTE ALL CLEAN", },
        { id: 4441, title: "SABONETE LIQUIDO REXONA S/FRANGANCIA 5 LITROS" },
        { id: 4249, title: "ALCOOL GEL 500ML GIOVANNA BABY CLASS", },
        { id: 5322, title: "DETERGENTE YPE 500ML NEUTRO", },
        { id: 3160, title: "LIMPADOR MULTIUSO 500ML VEJA", },

    ],
    // pia: [
    //     { id: 1, title: "Teste", description: "Teste" },
    //     { id: 2, title: "Teste", description: "Teste" },
    // ],
    // azuleijo: [
    //     { id: 3, title: "Teste", description: "Teste" },
    //     { id: 4, title: "Teste", description: "Teste" },
    // ],
    // maquinaDeLavar: [
    //     { id: 5, title: "Teste", description: "Teste" },
    //     { id: 6, title: "Teste", description: "Teste" },
    // ]
}


export default function ServiceRoom() {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionSelect = (area: string) => {
        setSelectedOption(area);
    }


    const burronRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(burronRef.current, {
            y: 0,
            x: 5,
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
        })
    })
    return (
        <>
            <div className="min-h-screen min-w-screen relative">
                <Image src="/house/serviceroom/service.webp" alt="banheiro" width={1920} height={1080}
                    className="w-full h-full object-cover" />
                <Container>
                    <div className="absolute w-full h-screen top-0 left-0">

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"
                                    ref={burronRef}
                                    className="absolute bottom-[20%] left-[22%] text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white">
                                    <MapPinCheckInside className="h-4 w-4 text-white" />
                                    Porta</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="min-w-screen">
                                <AlertDialogCancel className="absolute top-2 right-2"><X className="h-4 w-4" /></AlertDialogCancel>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Portas</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Com esses produtos você pode limpar a porta da sua casa.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <div className="grid grid-cols-4 gap-4">
                                    {prodcutsData.porta.map((item) => (
                                        <div key={item.id} className="flex flex-col items-center gap-4">
                                            <div className="h-[250px] overflow-hidden">
                                            <Image src={`https://r3suprimentos.agilecdn.com.br/${item.id}.jpg`} alt={item.title} width={250} height={250}
                                                className="rounded-sm object-cover hover:scale-105 transition-all duration-500" />
                                            </div>
                                            <CardTitle className="text-center font-normal">{item.title}</CardTitle>
                                        </div>
                                    ))}
                                </div>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                                    <AlertDialogAction><Link href="https://r3suprimentos.com.br/">Ir para o Site</Link></AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline"
                                    ref={burronRef}
                                    className="absolute bottom-[35%] left-[47%] text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white">
                                    <MapPinCheckInside className="h-4 w-4 text-white" />
                                    Pia</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="min-w-screen">
                                <AlertDialogCancel className="absolute top-2 right-2"><X className="h-4 w-4" /></AlertDialogCancel>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Portas</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Com esses produtos você pode limpar a Pia da sua casa.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <div className="grid grid-cols-4 gap-4">
                                    {prodcutsData.pia.map((item) => (
                                        <div key={item.id} className="flex flex-col items-center gap-4">
                                            <div className="h-[250px] overflow-hidden">
                                            <Image src={`https://r3suprimentos.agilecdn.com.br/${item.id}.jpg`} alt={item.title} width={250} height={250}                                               className="rounded-sm object-cover hover:scale-105 transition-all duration-500" />
                                            </div>
                                            <CardTitle className="text-center font-normal">{item.title}</CardTitle>
                                        </div>
                                    ))}
                                </div>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                                    <AlertDialogAction><Link href="https://r3suprimentos.com.br/">Ir para o Site</Link></AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Button variant="outline" onClick={() => handleOptionSelect("Porta")}></Button>

                        {/* <ButtonUse title="Porta" href="ServiceRoom" className="bottom-[20%] left-[22%]" /> */}
                        {/* <ButtonUse title="Pia" href="/House/ServiceRoom" className="bottom-[35%] left-[47%]" /> */}
                        <ButtonUse title="Azuleijo" href="/House/ServiceRoom" className="bottom-[47%] left-[40%]" />
                        <ButtonUse title="Maquina de Lavar" href="/House/ServiceRoom" className="bottom-[18%] left-[34%]" />
                        <ButtonUse title="Passar Roupa" href="/House/ServiceRoom" className="bottom-[30%] left-[70%]" />
                        <ButtonUse title="Bancada" href="/House/ServiceRoom" className="bottom-[37%] left-[34%]" />
                        <ButtonUse title="Roupas Brancas" href="/House/ServiceRoom" className="bottom-[55%] left-[67%]" />
                        <ButtonUse title="Ármario de Fórmica" href="/House/ServiceRoom" className="bottom-[60%] left-[35%]" />
                        <ButtonUse title="Piso Aderente" href="/House/ServiceRoom" className="bottom-[-6%] left-[40%]" />
                    </div>
                </Container>
            </div>
            <div className="w-full h-full">
                {selectedOption && prodcutsData[selectedOption] && (        
                    <div className="p-6 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Produtos para {selectedOption}</h2>
                            <Button 
                                variant="ghost" 
                                onClick={() => setSelectedOption(null)}
                                className="hover:bg-gray-100"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {prodcutsData[selectedOption].map((product) => (
                                <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
                                    <CardTitle className="text-lg">{product.title}</CardTitle>
                                </Card>
                            ))}
                        </div>
                    </div>

                )}
            </div>
        </>
    )
}