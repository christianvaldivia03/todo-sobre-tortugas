export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t border-accent/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-lg font-bold">🐢</span>
              </div>
              <span className="font-bold text-foreground">TurtleWorld</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Dedicado a la educación, conservación y protección de las tortugas en todo el mundo.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#introduccion" className="hover:text-primary transition-colors">
                  Sobre Tortugas
                </a>
              </li>
              <li>
                <a href="#tipos" className="hover:text-primary transition-colors">
                  Tipos
                </a>
              </li>
              <li>
                <a href="#geografia" className="hover:text-primary transition-colors">
                  Geografía
                </a>
              </li>
              <li>
                <a href="#conservacion" className="hover:text-primary transition-colors">
                  Conservación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guía de Conservación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span>𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span>📷</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8">
          <div className="text-center text-sm text-foreground/60">
            <p>&copy; 2025 TurtleWorld. Dedicado a la protección de las tortugas. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
