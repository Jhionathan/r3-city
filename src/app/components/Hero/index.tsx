'use client';
import Container from "../Container";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ButtonUse from "../Button";

export default function Hero() {


    return (
        <div className="relative w-full h-screen">
            <Image src="/7.webp" alt="hero" width={1920} height={1080}
                className="w-full h-full object-cover bg-opacity-85">
            </Image>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Supermercado" href="/Market" className="bottom-[24%] left-[22%]" />

                    <ButtonUse title="Hoteis" href="/" className="top-[24%] left-[25%]" />

                    <ButtonUse title="Hospitais" href="/" className="bottom-[75%] left-[48%]" />

                    <ButtonUse title="Restaurante" href="/" className="bottom-[41%] left-[45%]" />

                    <ButtonUse title="Industria" href="/" className="top-[50%] left-[55%]" />

                    <ButtonUse title="Casas" href="/House" className="top-[50%] left-[15%]" />

                    <ButtonUse title="Universidade" href="/" className="absolute bottom-[70%] right-[26%]" />

                    <ButtonUse title="Pós Obra" href="/" className="absolute bottom-[80%] right-[16%]" />

                    <ButtonUse title="Shopping" href="/" className="absolute bottom-[30%] right-[2%]" />
                </div>
            </Container>
        </div>
    )
}