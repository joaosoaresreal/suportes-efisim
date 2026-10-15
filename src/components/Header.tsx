import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_URL = 'https://wa.me/5567999659658'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center" aria-label="Efisim Sistemas">
          <img
            src={`${import.meta.env.BASE_URL}efisim_logo.webp`}
            alt="Efisim Sistemas"
            className="h-8 w-auto sm:h-9"
          />
        </a>
        <Button asChild variant="outline" size="sm">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle />
            <span className="hidden sm:inline">Falar com o suporte</span>
            <span className="sm:hidden">Suporte</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
