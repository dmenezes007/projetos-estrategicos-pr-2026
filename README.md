# Projetos Estratégicos PR 2026

Aplicação React + Vite para visualização dos projetos estratégicos da Presidência.

## Requisitos

- Node.js 20+
- npm 10+

## Execução local

1. Instale dependências:
   `npm install`
2. (Opcional) Configure variáveis de ambiente em `.env.local` com base em `.env.example`.
3. Inicie em modo de desenvolvimento:
   `npm run dev`

## Scripts

- `npm run dev` - inicia servidor local em `http://localhost:3000`
- `npm run lint` - valida tipos com TypeScript
- `npm run build` - gera build de produção em `dist`
- `npm run preview` - pré-visualiza build local

## Publicação no GitHub

1. Crie um repositório no GitHub.
2. No projeto local, execute:
   ```bash
   git init
   git add .
   git commit -m "chore: prepara projeto para github e vercel"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
3. O workflow de CI em `.github/workflows/ci.yml` roda `lint` e `build` em pushes/PRs para `main`.

## Publicação no Vercel

1. Acesse o Vercel e importe o repositório do GitHub.
2. Em **Project Settings > Environment Variables**, configure as variáveis necessárias (ex.: `GEMINI_API_KEY`, se aplicável).
3. O projeto já contém `vercel.json` com:
   - build command: `npm run build`
   - output directory: `dist`
   - rewrite global para `index.html` (suporte a rotas do React Router)
4. Faça o deploy e use a URL gerada pelo Vercel.

## Estrutura principal

- `src/pages` - páginas da aplicação
- `src/components` - componentes reutilizáveis
- `src/data` - dados mockados para exibição
