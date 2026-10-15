import { DownloadCard } from '@/components/DownloadCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { downloads } from '@/data/downloads'

function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-blue-light/10 via-background to-background"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-brand-orange-light/20 blur-3xl"
          />
          <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Baixe a ferramenta e deixe nossa equipe{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-blue-light bg-clip-text text-transparent">
                resolver agora
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
              Escolha um dos acessos remotos abaixo, execute o arquivo e informe
              o código exibido ao especialista da Efisim
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((tool) => (
              <DownloadCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-muted/40">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Baixe o arquivo',
                text: 'Escolha a ferramenta de sua preferência e faça o download do executável.',
              },
              {
                step: '2',
                title: 'Abra e execute',
                text: 'Clique com o botão direito e execute como administrador, se solicitado.',
              },
              {
                step: '3',
                title: 'Informe o código',
                text: 'Passe o código exibido na tela para o especialista iniciar o atendimento.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="brand-gradient flex size-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
