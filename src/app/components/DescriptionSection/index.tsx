import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { ProductDetailsClient } from "../../components/ProductDetailsClient";
import { Info, ExternalLink, X } from "lucide-react";

interface DescriptionSectionProps {
  nome: string;
  codprod: string;
}

export default function DescriptionSection({ nome, codprod }: DescriptionSectionProps) {
  return (
    <div className="w-full flex items-center justify-center py-6">
      <Drawer>
        <DrawerTrigger asChild>
          <div className="group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 bg-gradient-to-br from-white to-gray-50 border border-gray-100">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={`https://r3suprimentos.agilecdn.com.br/${codprod}.jpg`}
                alt={nome}
                width={140}
                height={140}
                className="rounded-xl h-36 w-36 object-contain group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                  <Info className="w-3 h-3 mr-1" />
                  Ver detalhes
                </Badge>
              </div>
            </div>
          </div>
        </DrawerTrigger>

        <DrawerContent className="max-h-[90vh] rounded-t-3xl shadow-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t-4 border-blue-500">
          <DrawerHeader className="text-center pb-2 relative">
            <div className="absolute top-4 right-4">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
            
            <div className="mx-auto w-12 h-1.5 bg-gray-300 rounded-full mb-4" />
            
            <DrawerTitle className="text-2xl font-bold text-gray-800 tracking-wide leading-tight px-12">
              {nome.toUpperCase()}
            </DrawerTitle>
            
            <Badge variant="outline" className="mt-2 text-sm">
              Código: {codprod}
            </Badge>
          </DrawerHeader>

          <Separator className="mx-6" />

          <div className="flex flex-col lg:flex-row items-start gap-8 px-6 py-6 overflow-y-auto">

            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Image
                    src={`https://r3suprimentos.agilecdn.com.br/${codprod}.jpg`}
                    alt={nome}
                    width={320}
                    height={320}
                    className="h-80 w-80 object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Informações Técnicas
                  </h3>
                </div>
                
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                  <ProductDetailsClient codprod={codprod} />
                </div>
              </div>
            </div>
          </div>

          <DrawerFooter className="px-6 pb-6 pt-2">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
              {/* <Button 
                asChild 
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Ver no Site
                </Link>
              </Button> */}
              
              <DrawerClose asChild>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-300 hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancelar
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}