"use client"

import Link from "next/link"
import { philosophers } from "@/lib/philosophers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TimelinePage() {
  const sortedPhilosophers = philosophers.sort((a, b) => a.birthYear - b.birthYear)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Filosofía
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                Acerca de Nosotros
              </Link>
              <Link
                href="/timeline"
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
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">Línea del Tiempo Filosófica</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubre la evolución del pensamiento occidental a través de los grandes filósofos, desde la antigüedad
            clásica hasta los presocráticos.
          </p>
        </div>

        <div className="space-y-12 py-8">
          {/* Central vertical timeline line */}
          <div className="relative">
            {sortedPhilosophers.map((philosopher, idx) => (
              <div key={philosopher.id} className="relative pb-16 md:pb-20 last:pb-0">
                {/* Vertical line connecting philosophers */}
                {idx !== sortedPhilosophers.length - 1 && (
                  <div className="absolute left-1/2 top-full w-1 h-12 md:h-16 bg-gradient-to-b from-accent to-accent/30 -translate-x-1/2" />
                )}

                {/* Alternating layout - left and right */}
                <div
                  className={`flex items-center gap-6 md:gap-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>

                  {/* Card - responsive width */}
                  <Link href={`/philosopher/${philosopher.id}`} className="flex-1">
                    <Card className="h-full bg-card hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer border-border hover:scale-105">
                      <CardHeader className="space-y-2 pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-primary text-lg md:text-xl line-clamp-2">
                              {philosopher.name}
                            </CardTitle>
                            <CardDescription className="text-sm">{philosopher.period}</CardDescription>
                          </div>
                          <div className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded whitespace-nowrap">
                            {philosopher.era.split(" - ")[1] || philosopher.era}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        {/* Summary */}
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {philosopher.summary}
                        </p>

                        {/* Main Ideas */}
                        <div className="space-y-2 pt-2 border-t border-border">
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Ideas Clave</h4>
                          <div className="flex flex-wrap gap-1">
                            {philosopher.mainIdeas.slice(0, 2).map((idea, i) => (
                              <span
                                key={i}
                                className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full truncate"
                              >
                                {idea}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          variant="outline"
                          className="w-full mt-2 text-xs bg-primary/5 hover:bg-primary/10 text-primary border-primary/20"
                        >
                          Ver Perfil Completo →
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
