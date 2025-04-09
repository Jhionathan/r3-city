'use client';
import Container from "../Container";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ButtonUse from "../Button";

export default function Hero() {


    return (
        <div className="relative w-full h-screen">
            <Image src="/city2.jpg" alt="hero" width={1920} height={1080}
                className="w-full h-full object-cover bg-opacity-85">
            </Image>
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Supermercado" href="/Market" className="bottom-[30%] left-[15%]" />

                    <ButtonUse title="Hoteis" href="/Hotel" className="top-[24%] left-[85%]" />

                    <ButtonUse title="Hospitais" href="/Hospital" className="bottom-[80%] left-[24%]" />

                    <ButtonUse title="Restaurante" href="/Restaurant" className="bottom-[40%] left-[36%]" />

                    <ButtonUse title="Industria" href="/Industria" className="top-[33%] left-[56%]" />

                    <ButtonUse title="Casas" href="/House" className="top-[35%] left-[15%]" />

                    <ButtonUse title="Universidade" href="/" className="absolute bottom-[78%] right-[27%]" />

                    <ButtonUse title="Prédio em Obras" href="/Building" className="absolute bottom-[67%] right-[43%]" />

                    <ButtonUse title="Shopping" href="/" className="absolute bottom-[55%] right-[22%]" />
                </div>
            </Container>
        </div>
    )
}