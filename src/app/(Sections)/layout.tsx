import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";



export default function SectionLayout({ children }: any) {
    return <>
            <div className="h-24 w-full relative bg-slate-200 border-b border-solid border-red-300 flex">
            <Container>
                <div className="w-full">        
                  <Link href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50}
                    className="rounded-full" />   
                  </Link>
                  
                </div>
            </Container>
        </div>
        {children}
           </>;
}