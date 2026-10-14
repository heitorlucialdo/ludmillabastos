# Ludmilla — Página pessoal

Mini landing page pessoal premium (estilo Linktree) para **Ludmilla** —
Biomedicina, Estética & Maquiagem. Minimalista, neo-clássica, com um toque
de futurismo discreto. Mobile-first, acessível e otimizada para conversão
em WhatsApp.

## Stack

- **React** + **Vite**
- **Tailwind CSS**
- **lucide-react** (ícones lineares)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em /dist
npm run preview  # pré-visualiza a build de produção
```

## O que você pode editar facilmente

Quase tudo fica em **um único arquivo**: [`src/data/links.js`](src/data/links.js)

| O que | Onde |
| --- | --- |
| Nome, frase, área de atuação | `PROFILE` |
| Número do WhatsApp | `WHATSAPP_NUMBER` |
| Mensagens automáticas do WhatsApp | `MESSAGE_AVALIACAO`, `MESSAGE_MAQUIAGEM`, `MESSAGE_SOBRANCELHAS` |
| Link do Spotify | `SPOTIFY_URL` |
| Link do Instagram | `INSTAGRAM_URL` |
| Textos / ordem dos botões | array `LINKS` |
| Texto da seção "Sobre mim" | [`src/components/AboutSection.jsx`](src/components/AboutSection.jsx) |

### Trocar a foto de fundo

Basta colocar a imagem em **`public/ludmilla-bg.jpg`** (mantendo esse nome).
A página passa a usá-la automaticamente. Enquanto não houver foto, um fundo
degradê elegante aparece no lugar — nada quebra.

> Caminho configurável em [`src/index.css`](src/index.css), variável `--ludmilla-bg`.

### Foto de perfil (opcional)

Coloque `public/ludmilla-avatar.jpg`. Sem ela, aparece um monograma "L".

## Estrutura

```
src/
├── App.jsx                 # composição + lógica da seção "Sobre mim"
├── index.css               # fundo, animações, prefers-reduced-motion
├── data/
│   └── links.js            # ⭐ configuração central (edite aqui)
└── components/
    ├── ProfileHeader.jsx
    ├── LinkButton.jsx
    ├── AboutSection.jsx
    ├── Footer.jsx
    └── Icon.jsx            # ícones (face e sobrancelhas são SVG custom)
```

## Acessibilidade & performance

- HTML semântico, `aria-label` nos botões, foco visível e navegação por teclado.
- Respeita `prefers-reduced-motion` (reduz/remove animações).
- Contraste de texto verificado (AA).
- Fontes com `display=swap`, sem bibliotecas pesadas.
