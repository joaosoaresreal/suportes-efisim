import { Globe, MessageCircle, PhoneCall } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5567999659658'
const FONE_TEL = 'tel:6734615952'
const SITE_URL = 'https://www.efisim.com.br'

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="inline-flex rounded-xl p-3">
            <img
              src={`${import.meta.env.BASE_URL}efisim_logo_branco.webp`}
              alt="Efisim Sistemas"
              className="h-9 w-auto"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Ferramentas de suporte remoto da Efisim Sistemas. Baixe, abra o
            arquivo e informe o código ao nosso especialista.
          </p>
        </div>

        <div className="space-y-3 md:justify-self-end">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Precisa de ajuda?
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-orange-light"
            >
              <MessageCircle className="size-4" />
              WhatsApp (67) 99965-9658
            </a>
            <a
              href={FONE_TEL}
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-orange-light"
            >
              <PhoneCall className="size-4" />
              Central Telefonica (67) 3461-5952
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-blue-light"
            >
              <Globe className="size-4" />
              efisim.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-white/60 sm:px-6">
          © {new Date().getFullYear()} Efisim Sistemas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
