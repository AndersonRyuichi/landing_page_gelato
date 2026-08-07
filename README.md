# 🍨 Lulo's Gelato — Landing Page

> Landing page artesanal e responsiva para a marca de gelatos Lulo's, construída com **React + Vite + Tailwind CSS**.

![Lulo's Gelato](https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious%20artisanal%20italian%20gelato%20ice%20cream%20in%20elegant%20cup%20with%20caramel%20sauce%20gourmet%20food%20photography&image_size=landscape_16_9)

---

## ✨ Funcionalidades

- 🎨 Design elegante e totalmente responsivo (mobile, tablet e desktop)
- 🧭 Navegação com menu hamburguer e âncoras suaves
- 🍧 Cardápio dinâmico com 6 sabores autorais
- ⚡ Hot Module Replacement (HMR) via Vite
- 🚀 Deploy otimizado para Vercel
- 🎯 Ícones da biblioteca `lucide-react`
- 🔤 Tipografia personalizada (Playfair Display + Inter)

---

## 🛠️ Stack Tecnológica

| Ferramenta       | Versão    | Descrição                                |
| ---------------- | --------- | ---------------------------------------- |
| **React**        | 18.3.x    | Biblioteca de UI declarativa             |
| **Vite**         | 5.4.x     | Bundler / Dev Server ultrarrápido        |
| **Tailwind CSS** | 3.4.x     | Framework CSS utility-first              |
| **lucide-react** | 0.454.x   | Ícones leves e consistentes              |
| **Node.js**      | 18.x LTS  | Runtime recomendado para deploy          |
| **pnpm**         | 9.12.x    | Gerenciador de pacotes padrão            |

---

## 📦 Instalação e Execução

### Pré-requisitos

- **Node.js** ≥ 18.17 (recomendado 18.x LTS)
- **pnpm** (ou npm/yarn, se preferir)

```bash
# 1. Clone o repositório
git clone https://github.com/AndersonRyuichi/landing_page_gelato.git
cd landing_page_gelato

# 2. Instale as dependências
pnpm install --no-frozen-lockfile
# ou
npm install --legacy-peer-deps

# 3. Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

Abra **http://localhost:5173** no navegador. 🎉

---

## 🏗️ Scripts Disponíveis

| Comando           | O que faz?                                      |
| ----------------- | ----------------------------------------------- |
| `pnpm dev`        | Inicia o dev server em `http://localhost:5173`  |
| `pnpm build`      | Gera o build de produção na pasta `dist/`       |
| `pnpm preview`    | Pré-visualiza o build de produção localmente    |

---

## 🚀 Deploy na Vercel

Este projeto já vem **100% configurado** para deploy contínuo na Vercel:

### Método 1 — 1-Click Deploy (mais fácil)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndersonRyuichi/landing_page_gelato)

### Método 2 — Git Integration (recomendado)

1. Conecte seu repositório GitHub em **[vercel.com/new](https://vercel.com/new)**
2. Selecione `AndersonRyuichi/landing_page_gelato`
3. Ajuste as configurações (tudo já está definido em `vercel.json`):
   - **Framework Preset:** `Vite`
   - **Build Command:** `pnpm install --no-frozen-lockfile && pnpm build`
   - **Output Directory:** `dist`
   - **Node.js Version:** `18.x` (em Settings → General)
4. Clique em **Deploy** ✨

### Método 3 — Vercel CLI

```bash
pnpm add -g vercel
vercel login
vercel --prod
```

---

## 📁 Estrutura do Projeto

```
lulos/
├── src/
│   ├── App.jsx            # Root component → importa LulosGelato
│   ├── main.jsx           # React entrypoint
│   └── index.css          # Tailwind + fontes customizadas
├── LulosGelato.jsx        # Landing page completa (componente principal)
├── index.html             # HTML template do Vite
├── vercel.json            # Configurações de deploy Vercel
├── tailwind.config.js     # Configurações Tailwind CSS
├── postcss.config.js      # PostCSS + Autoprefixer
├── vite.config.js         # Configurações do Vite
├── package.json           # Dependências e scripts
├── .npmrc                 # Flags do npm/pnpm (legacy-peer-deps)
├── .node-version          # Pinado em Node.js 18.x
└── .gitignore             # Arquivos ignorados pelo Git
```

---

## 🎨 Paleta de Cores

| Variável          | Hex       | Aplicação                    |
| ----------------- | --------- | ---------------------------- |
| `#FDFBF7`         | Off-White | Fundo principal              |
| `#2C221E`         | Café      | Textos escuros / Footer      |
| `#B83227`         | Vermelho  | Marca / CTAs / Destaques     |
| `#EFE8DC`         | Creme     | Cards secundários / Badges   |
| `#6E5D53`         | Café-claro| Textos secundários           |

---

## 🤝 Como Contribuir

1. Dê um **Fork** no projeto
2. Crie sua feature branch: `git checkout -b feat/NovaFuncionalidade`
3. Faça commit: `git commit -m "feat: descreva a mudança"`
4. Dê push: `git push origin feat/NovaFuncionalidade`
5. Abra um **Pull Request** 💌

---

## 📄 Licença

Feito com ❤️ e muita baunilha natural para a **Lulo's Gelato**.
© 2026 — Todos os direitos reservados.

---

<div align="center">
  <strong>🍧 Tem coisa que não dá pra apressar.</strong><br>
  <small>100% artesanal · 100% autoral · Produção diária</small>
</div>
