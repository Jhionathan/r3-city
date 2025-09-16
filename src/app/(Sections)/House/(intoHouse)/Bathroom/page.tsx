'use client'

import ButtonUse from "@/app/components/ButtonOnClick";
import Container from "@/app/components/Container";
import DescriptionSection from "@/app/components/DescriptionSection";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

interface Product {
    id: number
    codprod: string
    nome: string
    categoria: string
}

export default function Bathroom() {

    const [selectedSection, setSelectedSection] = useState("armario-madeira-banheiro")
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const productsRef = useRef<HTMLDivElement>(null)

    const handleButtonClick = (section: string) => {
        const normalizedSection = section.trim().toUpperCase()
        setSelectedSection(normalizedSection)
        productsRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            console.log("Buscando produtos para categoria:", selectedSection)
            try {
                const response = await fetch(`/api/products?categoria=${selectedSection}`)
                console.log("Status da resposta:", response.status)
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos')
                }
                const data = await response.json()
                console.log("Dados recebidos:", data)
                setProducts(data)
            } catch (error) {
                console.error("Erro ao carregar produtos:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [selectedSection])

    return (
        <div className="min-h-screen relative">
            <Image src="/house/bathroom/bathroom.jpeg" alt="banheiro" width={1920} height={1080}
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Azulejo" onClick={() => (handleButtonClick("azulejo-banheiro"))} className="bottom-[60%] left-[50%]" />
                    <ButtonUse title="Janela" onClick={() => (handleButtonClick("janela-banheiro"))} className="bottom-[55%] left-[65%]" />
                    <ButtonUse title="Box" onClick={() => (handleButtonClick("box-banheiro"))} className="bottom-[60%] left-[40%]" />
                    <ButtonUse title="Ralo" onClick={() => (handleButtonClick("ralo-banheiro"))} className="bottom-[15%] left-[40%]" />
                    <ButtonUse title="Vaso Sanitario" onClick={() => (handleButtonClick("vaso-sanitario-banheiro"))} className="bottom-[30%] left-[57%]" />
                    <ButtonUse title="Piso" onClick={() => (handleButtonClick("piso-banheiro-casa"))} className="bottom-[5%] left-[50%]" />
                    <ButtonUse title="Armario Madeira" onClick={() => (handleButtonClick("armario-madeira-banheiro"))} className="bottom-[35%] left-[23%]" />
                    <ButtonUse title="Pia" onClick={() => (handleButtonClick("pia-banheiro-casa"))} className="bottom-[30%] left-[75%]" />
                    <ButtonUse title="Saboneteira" onClick={() => (handleButtonClick("saboneteira-banheiro"))} className="bottom-[36%] left-[65%]" />
                    <ButtonUse title="Espelho" onClick={() => (handleButtonClick("espelho-banheiro"))} className="bottom-[55%] left-[80%]" />
                </div>
                <div className="w-full flex flex-col justify-center mb-14" ref={productsRef}>
                    <div className="w-full flex items-center justify-center mt-10">
                        <h3 className="text-xl font-semibold capitalize">{selectedSection}</h3>
                    </div>
                    <div className="mt-10 grid grid-cols-6 gap-4 mx-auto my-auto">
                        {isLoading ? (
                            <div className="col-span-6 text-center">Carregando produtos...</div>
                        ) : products.length > 0 ? (
                            products.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-52 h-[300px] flex items-center justify-center gap-2 flex-col overflow-hidden border bg-white border-slate-200 p-1 rounded-md shadow-md"
                                >
                                    <div className="h-56 overflow-hidden w-full flex items-center justify-center">
                                    <DescriptionSection nome={item.nome} codprod={item.codprod} />
                                    </div>
                                    <div className="h-14 w-full">
                                        <p className="text-slate-600 text-xs font-mono text-center">
                                            {item.nome.toUpperCase()}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-6 text-center">
                                Nenhum produto encontrado para esta categoria.
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}