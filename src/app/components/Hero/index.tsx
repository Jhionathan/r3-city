'use client';
import Container from "../Container";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ButtonUse from "../Button";

export default function Hero() {


    return (
        <div className="relative w-full h-screen">
            <Image src="/city-1.png" alt="hero" width={1920} height={1080}
                className="w-full h-full object-cover bg-opacity-85">
            </Image>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Supermercado" href="/Market" className="bottom-[30%] left-[15%]" />

                    <ButtonUse title="Hoteis" href="/" className="top-[24%] left-[75%]" />

                    <ButtonUse title="Hospitais" href="/Hospital" className="bottom-[83%] left-[38%]" />

                    <ButtonUse title="Restaurante" href="/Restaurant" className="bottom-[38%] left-[66%]" />

                    <ButtonUse title="Industria" href="/" className="top-[40%] left-[50%]" />

                    <ButtonUse title="Casas" href="/House" className="top-[35%] left-[15%]" />

                    <ButtonUse title="Universidade" href="/" className="absolute bottom-[70%] right-[37%]" />

                    <ButtonUse title="Prédio em Obras" href="/Building" className="absolute bottom-[70%] right-[48%]" />

                    <ButtonUse title="Shopping" href="/" className="absolute bottom-[30%] right-[2%]" />
                </div>
            </Container>
        </div>
    )
}