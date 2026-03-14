import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-sand-50 flex items-center">
      <Container narrow>
        <div className="text-center space-y-8">
          <p className="font-serif text-9xl text-sage-200 font-light">404</p>
          <SectionHeading
            title="Página no encontrada"
            subtitle="¡Ups!"
            withLine
          />
          <p className="text-sage-600 text-lg max-w-md mx-auto">
            Parece que esta ola te ha llevado a un lugar desconocido. Volvamos al camino.
          </p>
          <Link href="/">
            <Button size="lg">Volver al inicio</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
