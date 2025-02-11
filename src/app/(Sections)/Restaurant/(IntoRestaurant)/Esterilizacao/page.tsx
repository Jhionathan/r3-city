'use client'

import Container from "@/app/components/Container"
import Image from "next/image"
import ButtonUse from "@/app/components/ButtonOnClick";
import { useRef, useState, useEffect } from "react";

interface Product {
    id: number
    codprod: string
    nome: string
    categoria: string
}


export default function Esterilizacao() {
    const [selectedSection, setSelectedSection] = useState("geladeiras")
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
            <Image
                src="/restaurant/esterilizacao/esterilizacao1.jpg" height={1920} width={1080} alt="vitrine"
                className="w-full h-full object-cover" />
            <Container>
                <div className="absolute w-full h-screen top-0 left-0">
                    <ButtonUse title="Pia" onClick={() => (handleButtonClick("pia-esterilizacao"))} className="bottom-[28%] left-[15%]" />
                    <ButtonUse title="Diluidores" onClick={() => (handleButtonClick("diluidores"))} className="bottom-[35%] left-[75%]"/>
                    <ButtonUse title="Bancada" onClick={() => (handleButtonClick("bancada-esterilizacao"))} className="bottom-[25%] left-[25%]"/>
                    <ButtonUse title="Lixeira" onClick={() => (handleButtonClick("lixeira-esterilizacao"))} className="bottom-[16%] left-[89%]"/>
                    <ButtonUse title="Piso" onClick={() => (handleButtonClick("piso-banheiro"))} className="bottom-[-3%] left-[48%]"/>
                    <ButtonUse title="Azuleijo" onClick={() => (handleButtonClick("azuleiro-esterilizacao"))} className="bottom-[60%] left-[67%]"/>
                    <ButtonUse title="Higigene das Mãos" onClick={() => (handleButtonClick("higiene-das-maos-esterilizacao"))} className="bottom-[45%] left-[7%]"/>

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
                                    className="w-52 h-52 flex items-center justify-center gap-2 flex-col overflow-hidden border bg-white border-slate-200 p-1 rounded-md shadow-md"
                                >
                                    <div className="h-36 overflow-hidden w-full flex items-center justify-center">
                                        <Image 
                                            src={`https://r3suprimentos.agilecdn.com.br/${item.codprod}.jpg`} 
                                            alt={item.nome.toUpperCase()} 
                                            width={120} 
                                            height={120}
                                            className="hover:scale-95 transition-all duration-500"
                                        />
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


// 