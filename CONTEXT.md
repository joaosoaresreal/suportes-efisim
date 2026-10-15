# Contexto do Projeto — Suportes Efisim

Arquivo de histórico de sessões. Sempre atualizar ao fim de cada sessão para manter o contexto.

## Objetivo

Site estático para download das ferramentas de suporte remoto usadas pela Efisim Sistemas.

## Stack

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS v4 (plugin `@tailwindcss/vite`)
- shadcn/ui (button, card, badge)
- Sem backend — arquivos `.exe` servidos de `public/downloads/`

## Identidade visual

| Cor | Hex |
|---|---|
| Azul claro | `#00b9f3` |
| Azul escuro | `#0091f2` |
| Laranja claro | `#ff9d2c` |
| Laranja escuro | `#ff6922` |
| Preto | `#212121` |

- Layout de referência: https://www.efisim.com.br
- Logo Efisim: `public/efisim_logo.webp`
- Favicon: `public/favicon.webp`
- Logos dos suportes: `src/assets/*_logo.webp`

## Ferramentas (ordem exibida)

1. **AnyDesk** — "Acesso remoto leve e rápido" — `anydesk.exe`
2. **RustDesk** — "Compilação própria Efisim" (build custom deles) — `rustdesk-jb.exe`
3. **Efisim Suporte** — sem descrição extra (ferramenta própria) — `efisim-suporte.exe`
4. **TeamViewer** — "Acesso remoto clássico e confiável" — `teamviwer_qs.exe` (typo no nome do arquivo, exibir sempre "TeamViewer")

## Hospedagem

- Domínio próprio, na raiz (base `/` no Vite — padrão)

## Histórico de sessões

### 2026-10-15 — Sessão 1
- Criação do `CONTEXT.md`
- Instalação do Tailwind v4 + plugin Vite; tema com cores da marca em `src/index.css`
- Init shadcn/ui; componentes `button`, `card`, `badge` em `src/components/ui/`
- EXEs movidos de `src/assets/` para `public/downloads/`
- Página: `Header`, hero, grade de 4 `DownloadCard` (ordem acima), seção "Como funciona" (3 passos) e `Footer` escuro
- Aliases `@/*` em `vite.config.ts` e `tsconfig*.json`
- `lint` e `build` passando
- Pendências futuras: definir destino de `public/teste.png` (arquivo solto na raiz do public)
