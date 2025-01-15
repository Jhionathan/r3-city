import { useRef, useEffect, Children } from "react"
import { gsap } from "gsap"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog"
import { AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";
import { MapPinCheckInside } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import Link from "next/link";

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



interface ButtonProps {
    title: string
    className?: string
    DialogTitle: string
    DialogDescription: string
    children: React.ReactNode
}

export default function ButtonAlertDialog({ DialogTitle, DialogDescription, title, className, children }: ButtonProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className={`absolute text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white ${className}`}>{title}
                    <MapPinCheckInside className="h-4 w-4 text-white" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="min-w-screen">
                <AlertDialogHeader>
                    <AlertDialogTitle>{DialogTitle}</AlertDialogTitle>
                    <AlertDialogDescription>{DialogDescription}</AlertDialogDescription>
                </AlertDialogHeader>
                    {children}
                <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                    <AlertDialogAction><Link href="https://r3suprimentos.com.br/">Ir para o Site</Link></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}