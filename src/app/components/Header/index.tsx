import Image from "next/image";
import Container from "../Container";


export async function Header() {
    return (
        <div className="h-20 bg-gray-900 border-b border-solid border-red-300 flex items-center">
            <Container>
                <div className="flex items-center">        
                  <Image src="/logo.png" alt="logo" width={50} height={50}
                  className="rounded-full" />   
                </div>
            </Container>
        </div>
    );
}