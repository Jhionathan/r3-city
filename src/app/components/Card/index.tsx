import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


interface CardProps {
    title: string
    image: string
    href: string
}

export default function CardUse({title, image, href}: CardProps) {
    return (
        <Card>
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







