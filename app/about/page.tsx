"use client"

import Link from "next/link"
import { aboutUsData } from "@/lib/philosophers"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-semibold text-primary"
              >
                Acerca de Nosotros
              </Link>
              <Link href="/timeline" className="text-foreground hover:text-primary transition-colors">
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
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance mb-4">¿Quiénes Somos?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Educadores comprometidos con la filosofía y el pensamiento crítico
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Organization */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Nuestra Organización</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.organization}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Misión</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.mission}</p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Visión</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.vision}</p>
              </CardContent>
            </Card>

            {/* Objective */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Objetivo</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.objective}</p>
              </CardContent>
            </Card>

            {/* Justification */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Justificación del Proyecto</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.justification}</p>
              </CardContent>
            </Card>

            {/* Importance */}
            <Card className="bg-accent/5 border-accent/30">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Importancia de la Filosofía en la Educación</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.importance}</p>
              </CardContent>
            </Card>

            {/* Commitment */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Nuestro Compromiso</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.commitment}</p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Valores que nos Representan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aboutUsData.values.map((value, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10"
                    >
                      <span className="text-accent font-bold">●</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Final Message */}
            <Card className="bg-primary/5 border-primary/30 border-2">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Mensaje Final</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>{aboutUsData.finalMessage}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Contact */}
          <div className="space-y-6">
            <Card className="bg-card border-accent/30 border-2 sticky top-24">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Contacto</CardTitle>
                <CardDescription>Ponte en contacto con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Nombre</p>
                  <p className="text-sm text-muted-foreground">{aboutUsData.contact.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Teléfono</p>
                  <p className="text-sm text-muted-foreground">{aboutUsData.contact.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Correo Electrónico</p>
                  <p className="text-sm text-muted-foreground break-all">{aboutUsData.contact.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Facebook</p>
                  <p className="text-sm text-muted-foreground">{aboutUsData.contact.facebook}</p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Navegación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/timeline">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-primary/20 bg-transparent text-primary"
                  >
                    → Línea del Tiempo
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-primary/20 bg-transparent text-primary"
                  >
                    → Volver al Inicio
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
