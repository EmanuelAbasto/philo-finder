import Link from "next/link"
import { notFound } from "next/navigation"
import { getPhilosopherById, philosophers } from "@/lib/philosophers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

function linkify(text: string) {
  if (!text) return text
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          {part}
        </a>
      )
    }
    return part
  })
}

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return philosophers.map((philosopher) => ({
    id: philosopher.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params
  const philosopher = getPhilosopherById(resolvedParams.id)

  if (!philosopher) {
    return {
      title: "Filósofo no encontrado",
    }
  }

  return {
    title: philosopher.name,
    description: philosopher.summary,
  }
}

export default async function PhilosopherPage({ params }: Props) {
  const resolvedParams = await params
  const philosopher = getPhilosopherById(resolvedParams.id)

  if (!philosopher) {
    notFound()
  }

  const relatedPhilosophers = philosophers
    .filter((p) => p.era === philosopher.era && p.id !== philosopher.id)
    .slice(0, 3)

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

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {philosopher.nationality}
              </span>
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {philosopher.era}
              </span>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance mb-2">{philosopher.name}</h1>
              <p className="text-xl text-muted-foreground">{philosopher.period}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {philosopher.image && (
              <Card className="bg-card border-border overflow-hidden">
                <div className="relative w-full h-96 flex items-center justify-center bg-card/5">
                  <Image
                    src={philosopher.image || "/placeholder.svg"}
                    alt={philosopher.name}
                    fill
                    className="object-contain"
                    priority
                    unoptimized={/tse2\.mm\.bing\.net|i\.pinimg\.com|drive\.google\.com/.test(
                      philosopher.image
                    )}
                  />
                </div>
              </Card>
            )}

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Biografía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{linkify(philosopher.biography)}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Filosofía y Enseñanzas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{linkify(philosopher.philosophy)}</p>
              </CardContent>
            </Card>

            {/* Main Ideas */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Ideas Principales</CardTitle>
                <CardDescription>Conceptos centrales de su pensamiento</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {philosopher.mainIdeas.map((idea, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {philosopher.curiosities.length > 0 && (
              <Card className="bg-accent/5 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-accent text-2xl">Datos Curiosos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {philosopher.curiosities.map((curiosity, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent font-bold flex-shrink-0">💡</span>
                        <span>{curiosity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {philosopher.quotes.length > 0 && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Frases Filosóficas</CardTitle>
                  <CardDescription>Interpretaciones de sus pensamientos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {philosopher.quotes.map((quote, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="border-l-4 border-accent pl-4">
                        <p className="italic text-muted-foreground text-sm md:text-base">"{quote.text}"</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                          Interpretación
                        </p>
                        <p className="text-sm text-muted-foreground">{quote.interpretation}</p>
                      </div>
                      {idx < philosopher.quotes.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Key Works */}
            {philosopher.keyWorks.length > 0 && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Obras Principales</CardTitle>
                  <CardDescription>Escritos más influyentes de {philosopher.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {philosopher.keyWorks.map((work, idx) => (
                      <div key={idx} className="p-4 bg-primary/5 rounded-lg border border-primary/10 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-bold flex-shrink-0">📖</span>
                          <div className="flex-1">
                            {work.pdfUrl ? (
                              <a
                                href={work.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-muted-foreground hover:text-primary transition-colors underline cursor-pointer"
                              >
                                {work.title}
                              </a>
                            ) : (
                              <p className="font-semibold text-muted-foreground">{work.title}</p>
                            )}
                            <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {philosopher.multimedia.length > 0 && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Contenido Multimedia</CardTitle>
                  <CardDescription>Material interactivo y recursos destacados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {philosopher.multimedia.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 bg-accent/5 hover:bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-accent font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                            {item.type === "tiktok" ? "🎵" : "📺"}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted-foreground/60 mt-1 capitalize">{item.type}</p>
                          </div>
                          <span className="text-accent/60 group-hover:text-accent transition-colors">→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <Card className="bg-card border-accent/30 border-2 sticky top-24">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Información Rápida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    Escuela de Pensamiento
                  </p>
                  <p className="text-sm text-muted-foreground">{philosopher.schoolOfThought}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Era</p>
                  <p className="text-sm text-muted-foreground">{philosopher.era}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Nacionalidad</p>
                  <p className="text-sm text-muted-foreground">{philosopher.nationality}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Período</p>
                  <p className="text-sm text-muted-foreground">{philosopher.period}</p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Navegación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/linea-temporal">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-primary/20 bg-transparent text-primary"
                  >
                    ← Volver a Línea del Tiempo
                  </Button>
                </Link>
                <Link href="/sobre-nosotros">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-primary/20 bg-transparent text-primary"
                  >
                    ← Acerca de Nosotros
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-primary/20 bg-transparent text-primary"
                  >
                    ← Volver al Inicio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Philosophers */}
        {relatedPhilosophers.length > 0 && (
          <section className="space-y-6 mt-16 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold text-primary text-center">Filósofos de la Misma Era</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPhilosophers.map((relatedPhilosopher) => (
                <Link key={relatedPhilosopher.id} href={`/filosofos/${relatedPhilosopher.id}`}>
                  <Card className="h-full bg-card hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer border-border hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-primary text-balance">{relatedPhilosopher.name}</CardTitle>
                      <CardDescription>{relatedPhilosopher.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{relatedPhilosopher.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
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
