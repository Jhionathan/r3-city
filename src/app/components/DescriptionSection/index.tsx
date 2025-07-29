'use client'

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";


export default function DescriptionSection(nome: string, codprod: string) {


    return (
        <div className="h-36 overflow-hidden w-full flex items-center justify-center">
            <Drawer>
                <DrawerTrigger>
                    <Image
                        src={`https://r3suprimentos.agilecdn.com.br/${codprod}.jpg`}
                        alt={nome.toUpperCase()}
                        width={120}
                        height={120}
                        className="hover:scale-95 transition-all duration-500"
                    />
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerTitle>{nome.toUpperCase()}</DrawerTitle>
                        {/* <DrawerDescription>Produto de alta qualidade</DrawerDescription> */}
                    </div>
                    <div className="flex items-center justify-start">
                        <div className="w-96 h-96">
                            <Image
                                src={`https://r3suprimentos.agilecdn.com.br/${codprod}.jpg`}
                                alt={nome.toLocaleUpperCase()}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full h-20">
                            <p>DESINFETANTE E LIMPADOR DESENGORDURANTE ALCALINO CLORADO, ESPECIALMENTE DESENVOLVIDO PARA O TRABALHO DE LIMPEZA PESADA EM: AZULEJOS, LADRILHOS, BOXES, BANHEIRAS, PIAS, PISOS FRIOS, CORTINAS DE CHUVEIROS E OUTRAS SUPERFÍCIES SIMILARES ENCONTRADAS EM BANHEIROS E OUTROS AMBIENTES COMUNS.</p>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerFooter>
                            <Button>
                                <Link href={'/'} />
                                Ver o produto no Site
                            </Button>
                            <DrawerClose asChild>
                                <Button variant={'outline'} >Cancelar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}