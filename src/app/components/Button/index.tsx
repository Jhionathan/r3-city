'use client'
import { Button } from "@/components/ui/button"
import { MapPinCheckInside } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRef } from "react"
import { gsap } from "gsap"

interface ButtonProps {
    title: string
    href: string
    className?: string

}

export default function ButtonUse({ title, href, className }: ButtonProps) {

    const buttonRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(buttonRef.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
        },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "bounce.out",

            })
    })

    return (
        <Link href={href}>
            <Button variant={"outline"}
                className={`absolute text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white ${className}`}
                ref={buttonRef}>
                <MapPinCheckInside className="h-4 w-4 text-white" />
                {title}
            </Button>
        </Link>
    )
}