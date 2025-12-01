"use client"

import Link from "next/link"
import Image from "next/image"
import { philosophers } from "@/lib/philosophers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TimelinePage() {
  const presocraticos = philosophers
    .filter((p) => p.schoolOfThought === "Presocrático")
    .sort((a, b) => a.birthYear - b.birthYear)
  const socraticos = philosophers
    .filter((p) => p.schoolOfThought !== "Presocrático")
    .sort((a, b) => a.birthYear - b.birthYear)

  const CategorySection = ({ title, philosophers: phils }: { title: string; philosophers: typeof philosophers }) => (
    <div className="space-y-8">
      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">{title}</h2>

        {/* Grid layout with cards - cleaner than vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phils.map((philosopher) => (
            <Link key={philosopher.id} href={`/filosofos/${philosopher.id}`}>
              <Card className="h-full bg-card hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer border-border overflow-hidden flex flex-col">
                {/* Image container */}
                {philosopher.image && (
                  <div className="relative w-full h-56 flex items-center justify-center bg-card/5">
                    {
                      // Some hosts (bing, pinimg, drive) may reject Next's image proxy. Use unoptimized to let browser load directly.
                    }
                    <Image
                      src={philosopher.image || "/placeholder.svg"}
                      alt={philosopher.name}
                      fill
                      className="object-contain"
                      unoptimized={/tse2\.mm\.bing\.net|i\.pinimg\.com|drive\.google\.com/.test(
                        philosopher.image
                      )}
                    />
                  </div>
                )}

                {/* Content */}
                <CardHeader className="space-y-2 pb-2">
                  <CardTitle className="text-primary text-xl line-clamp-2">{philosopher.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold">{philosopher.period}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 flex-1 flex flex-col">
                  {/* Main Ideas */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Ideas Clave</h4>
                    <div className="flex flex-wrap gap-1">
                      {philosopher.mainIdeas.slice(0, 2).map((idea, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full truncate">
                          {idea}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full mt-auto text-xs bg-primary/5 hover:bg-primary/10 text-primary border-primary/20"
                  >
                    Ver Perfil Completo →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

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
              <Link
                href="/linea-temporal"
                className="text-foreground hover:text-primary transition-colors font-semibold text-primary"
              >
                Línea del Tiempo
              </Link>
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-4 mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">Línea del Tiempo Filosófica</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explora a los grandes filósofos divididos en sus períodos históricos principales
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {/* Presocráticos */}
          <CategorySection title="Filósofos Presocráticos" philosophers={presocraticos} />

          {/* Socráticos */}
          <CategorySection title="Filósofos Socráticos" philosophers={socraticos} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 border-t border-border mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-muted-foreground">Philo-Finder - Buscador de Filósofos y Pensamiento Clásico</p>
          <p className="text-sm text-muted-foreground">
            Recursos creados por estudiantes de la ESFM "Manuel Ascencio Villarroel"
          </p>
        </div>
      </footer>
    </main>
  )
}
