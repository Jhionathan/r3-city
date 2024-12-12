'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CardProps {
    title: string
    image: string
    href: string
}

export default function CardUse({ title, image, href }: CardProps) {

    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current

        gsap.fromTo(card, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "back.inOut",
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "back.inOut",
        }
        )
    }, [])

    return (
        <Card ref={cardRef}>
            <CardHeader>
                <h3>{title}</h3>
            </CardHeader>
            <CardContent>
                <Link href={href}>
                    <Image src={image} alt={title} width={250} height={250} className="rounded-md" />
                </Link>
            </CardContent>
        </Card>
    )
}







