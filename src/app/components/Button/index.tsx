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
    function?: () => void
}

export default function ButtonUse({ title, href, className }: ButtonProps) {

    const buttonRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(buttonRef.current, {
            y: 5,
            x: 0,
            opacity: 0.5,
            duration: 1,
            ease: "elastic",

        },
            {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "bounce.out",

            }
        )
    })

    const buttonSpin = useRef(null)

    useEffect(() => {
        gsap.fromTo(buttonSpin.current, {
            rotate: 0,
            duration: 5,
            ease: "bounce.out",
        },
            {
                rotate: 360,
                duration: 5,
                ease: "bounce.out",
            })
    })

    return (
        <Link href={href}>
            <Button variant={"outline"}
                onClick={() => { }}
                className={`absolute text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white ${className}`}
                ref={buttonRef}>
                <MapPinCheckInside className="h-4 w-4 text-white" />
                {title}
            </Button>
        </Link>
    )
}

