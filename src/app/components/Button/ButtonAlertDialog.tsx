import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog"
import { AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Button } from "@/components/ui/button";
import { MapPinCheckInside } from "lucide-react";
import Link from "next/link";


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
                    <div className="grid grid-cols-4 gap-4">
                        {children}
                    </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                    <AlertDialogAction><Link href="https://r3suprimentos.com.br/">Ir para o Site</Link></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}