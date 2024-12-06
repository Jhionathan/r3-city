import Container from "../components/Container";
import Image from "next/image";



export default function SectionLayout({ children }: any) {
    return <>
            <div className="h-20 w-full bg-slate-200 border-b border-solid border-red-300 flex">
            <Container>
                <div className="flex items-center">        
                  <Image src="/logo.png" alt="logo" width={50} height={50}
                  className="rounded-full" />   
                </div>
            </Container>
        </div>
        {children}
           </>;
}