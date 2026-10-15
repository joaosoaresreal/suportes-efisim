import { Download, Monitor } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import type { DownloadTool } from '@/data/downloads'

export function DownloadCard({ tool }: { tool: DownloadTool }) {
  const href = `${import.meta.env.BASE_URL}downloads/${tool.file}`

  return (
    <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/30">
      <CardContent className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <div className="flex size-24 items-center justify-center rounded-2xl bg-muted/70 p-4 ring-1 ring-border/60">
          <img
            src={tool.logo}
            alt={`Logo ${tool.name}`}
            className="size-full object-contain"
            loading="lazy"
          />
        </div>
        <CardTitle className="text-2xl font-semibold">{tool.name}</CardTitle>
      </CardContent>
      <CardFooter className="flex-col gap-3 bg-transparent">
        <Button
          asChild
          variant="ghost"
          className="brand-gradient w-full text-white shadow-sm hover:brightness-110"
        >
          <a href={href} download>
            <Download />
            Baixar
          </a>
        </Button>
        <div className="flex w-full items-center justify-between">
          <Badge variant="secondary">
            <Monitor />
            Windows
          </Badge>
          <span className="text-xs text-muted-foreground">{tool.size}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
