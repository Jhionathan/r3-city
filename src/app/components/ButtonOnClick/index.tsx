'use client'
import { Button } from "@/components/ui/button"
import { MapPinCheckInside } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ButtonProps {
    title: string
    onClick: () => void
    className?: string
}

export default function ButtonUse({ title, onClick, className }: ButtonProps) {
    const buttonRef = useRef(null)
    const buttonSpin = useRef(null)

    useEffect(() => {
        gsap.fromTo(buttonRef.current, 
            {
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
    }, [])

    useEffect(() => {
        gsap.fromTo(buttonSpin.current, 
            {
                rotate: 0,
                duration: 5,
                ease: "bounce.out",
            },
            {
                rotate: 360,
                duration: 5,
                ease: "bounce.out",
            }
        )
    }, [])
    const handleClick = () => {
        gsap.to(buttonRef.current, {
            scale: 1.1,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                onClick()
            }
        })
    }

    return (
        <Button 
            variant="outline"
            onClick={handleClick}
            className={`absolute text-white text-lg bg-zinc-600 opacity-90 hover:bg-zinc-700 hover:opacity-100 hover:text-white ${className}`}
            ref={buttonRef}
        >
            <MapPinCheckInside 
                className="h-4 w-4 text-white" 
                ref={buttonSpin}
            />
            {title}
        </Button>
    )
}