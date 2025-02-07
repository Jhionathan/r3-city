import CardUse from "@/app/components/Card";
import Container from "@/app/components/Container";


export default function House() {
    return (
        <Container>
            <div className="min-h-screen flex flex-col items-center w-full">
                <div className="my-24">
                    <h2 className="text-4xl font-normal">Restaurante</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">

                    <CardUse title="Cozinha Industrial" image="/restaurant/cozinha/cozind.png" href="/Restaurant/IndustrialKitchen" />
                    
                    
                </div>

            </div>
        </Container>
    )
}