import { Button } from "@/components/ui/button"
import { MapPinCheckInside } from "lucide-react"
import Link from "next/link"

interface ButtonProps {
    title: string
    href: string
    className?: string
}

export default function ButtonUse( { title, href, className }: ButtonProps ) {
    return (
        <Button variant={"outline"}
        className={`absolute  bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 ${className}`}>
            <MapPinCheckInside className="h-4 w-4 text-white" />
            <Link href={href} className="text-white text-lg">{title}</Link>
        </Button>
    )
}