import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Philo-Finder
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
                Acerca de Nosotros
              </Link>
              <Link href="/linea-temporal" className="text-foreground hover:text-primary transition-colors">
                Línea del Tiempo
              </Link>
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-primary text-balance">Philo-Finder</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground text-balance">
            Buscando tu filosofía
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/linea-temporal">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Ver Línea del Tiempo
              </Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Conoce Nuestro Proyecto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card/50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Lo que encontrarás</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Línea del Tiempo Interactiva",
                description:
                  "Visualiza la evolución del pensamiento filosófico a través de los siglos de forma interactiva e intuitiva.",
              },
              {
                title: "Perfiles de Filósofos",
                description:
                  "Conoce la vida, el pensamiento principal y las contribuciones de los grandes maestros del pensamiento.",
              },
              {
                title: "Obras Principales",
                description:
                  "Descubre las obras más influyentes y cómo han transformado nuestra comprensión del mundo.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-6 space-y-3 hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Comienza tu viaje filosófico</h2>
          <p className="text-lg text-muted-foreground">
            Explora pensadores desde Sócrates, Platón y Aristóteles hasta los filósofos presocráticos en una experiencia
            interactiva.
          </p>
          <Link href="/linea-temporal">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ir a la Línea del Tiempo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 border-t border-border mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-muted-foreground">
            Filosofía Occidental - Exploración educativa del pensamiento filosófico
          </p>
          <p className="text-sm text-muted-foreground">
            Recursos creados por estudiantes de la ESFM "Manuel Ascencio Villarroel"
          </p>
        </div>
      </footer>
    </main>
  )
}
