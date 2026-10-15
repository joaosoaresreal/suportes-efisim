# Suportes Efisim

Site estático para download das ferramentas de suporte remoto usadas pela **Efisim Sistemas**.

O visitante escolhe uma das ferramentas de acesso remoto, baixa o executável e informa o código
exibido ao especialista da Efisim.

## Ferramentas disponíveis

| Ordem | Ferramenta | Arquivo |
|---|---|---|
| 1 | AnyDesk | `anydesk.exe` |
| 2 | RustDesk | `rustdesk-jb.exe` |
| 3 | Efisim Suporte | `efisim-suporte.exe` |
| 4 | TeamViewer | `teamviwer_qs.exe` |

> O RustDesk é uma compilação própria da Efisim.

## Stack

- [Vite 8](https://vite.dev) + [React 19](https://react.dev) + [TypeScript 6](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) (plugin `@tailwindcss/vite`)
- [shadcn/ui](https://ui.shadcn.com) (`button`, `card`, `badge`)
- Sem backend — os executáveis são servidos de `public/downloads/`

## Identidade visual

| Cor | Hex |
|---|---|
| Azul claro | `#00b9f3` |
| Azul escuro | `#0091f2` |
| Laranja claro | `#ff9d2c` |
| Laranja escuro | `#ff6922` |
| Preto | `#212121` |

- Referência de layout: [efisim.com.br](https://www.efisim.com.br)
- Logo Efisim: `public/efisim_logo.webp`
- Favicon: `public/favicon.webp`
- Logos dos suportes: `src/assets/*_logo.webp`

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20+ e npm.

```bash
npm install     # instala as dependências
npm run dev     # sobe o servidor de desenvolvimento
```

O servidor inicia em `http://localhost:5173`.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a build de produção em `dist/` |
| `npm run preview` | Pré-visualiza a build de produção |
| `npm run lint` | Roda o ESLint |

## Estrutura

```
public/
  downloads/          # executáveis (.exe) baixados pelo site
  efisim_logo.webp    # logo usada no header e footer
  favicon.webp
src/
  assets/             # logos das ferramentas
  components/
    DownloadCard.tsx  # card de cada ferramenta
    Footer.tsx
    Header.tsx
    ui/               # componentes shadcn/ui
  data/
    downloads.ts      # lista das ferramentas (nome, logo, arquivo, tamanho)
  lib/utils.ts        # helper cn()
  App.tsx             # hero + grade de downloads + como funciona
  index.css           # Tailwind + tema com as cores da marca
```

## Deploy

Site estático, hospedado na raiz de um domínio próprio (`base: '/'` no Vite).
Basta publicar o conteúdo gerado em `dist/`.


##
### Feito com :sparkling_heart: por [joaosoares](http://www.joaosoares.com.br)
