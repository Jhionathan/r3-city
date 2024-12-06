import Image from "next/image";
import Container from "../Container";


export async function Header() {
    return (
        <div className="h-24 bg-slate-200 border-b border-solid border-red-300 flex items-center">
            <Container>
                <div className="flex items-center">        
                  <Image src="/logo.png" alt="logo" width={50} height={50}
                  className="rounded-full" />   
                </div>
            </Container>
        </div>
    );
}