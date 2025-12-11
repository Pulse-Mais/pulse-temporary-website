# Documentação Técnica - Página Apoie (Mobile First)

**Status:** Rascunho  
**Prioridade:** Alta  
**Responsável:** Diogo

---

## 📱 Visão Geral
Toda a página deve seguir a abordagem **Mobile First**, produzida inicialmente para telas pequenas (smartphones). Somente após finalizada a versão mobile é que serão aplicados *breakpoints* para desktop.

### Componentes Necessários
Esta página utiliza o *Design System* interno da Pulse Mais.

* `HeaderMobile.tsx` (Reutilizável)
* `MenuMobile.tsx` (Reutilizável)
* `SectionTitle.tsx` (Título de Seção)
* `SectionText.tsx` (Texto Descritivo)
* `CTAButton.tsx` (Botão de Ação)
* `ImageComponent.tsx` (Ou variação simples do Carousel)
* `Footer.tsx` (Reutilizável)

---

## 🏗️ Estrutura da Página
A renderização segue estritamente esta ordem vertical:

1.  **Header**
2.  **Hero Section** (Imagem + Títulos + 4 CTAs)
3.  **Seção "Transforme a vida"** (Título + Texto + 2 CTAs)
4.  **Seção "Quem somos"** (Título + Texto + 1 CTA)
5.  **Seção Final "Transforme a vida"** (Repetição)
6.  **Footer**

---

## 🎨 Detalhamento por Seção

### 1. Header & Menu
*Reaproveitar integralmente o componente da Home.*

* **Logo:** 180 x 50 px | Margem esq: 30px | Topo: 42 px.
* **Menu Hambúrguer:**
    * 3 Barras (50x10px), Cor `#EEF2F6`, Arredondamento 10px.
    * **Ação:** Abre overlay 100% da tela com links (Início, Sobre, Apoie, Transparência, Contato).

---

### 2. Hero (Destaque Apoie)
*Primeira dobra visível ao usuário.*

**Imagem de Destaque**
* **Dimensões:** 300 x 256 px
* **Estilo:** Bordas arredondadas (25px).
* **Comportamento:** Estática (conforme wireframe) ou Carrossel se houver múltiplas campanhas.

**Título Principal**
* **Componente:** `SectionTitle`
* **Texto:** "Você já é parte do futuro dos jovens"
* **Estilo:** Fonte 30px, Bold, Cor `#486284`, Margin Top 30px.

**Descrição**
* **Componente:** `SectionText`
* **Texto:** "Tem entre 17 à 26 anos? Este pode ser o começo da sua jornada no mundo da tecnologia."
* **Estilo:** Fonte 20px, Regular, Cor `#486284`, Margin Top 8px.

**Lista de CTAs (Botões)**
*Esta seção possui uma pilha de 4 botões de ação.*
* **Componente:** `CTAButton` (Renderizar 4x)
* **Dimensões:** 300 x 48 px.
* **Estilo:** Fundo `#486284`, Texto Branco (15px), Bordas 50px (Pílula).
* **Espaçamento:** Aplicar margem entre os botões (sugestão: 16px).

---

### 3. Seção "Transforme a vida de um jovem"
*Alinhamento centralizado.*

**Título**
* **Texto:** "Transforme a vida de um jovem"
* **Estilo:** Fonte 30px, Bold, `#486284`, Alinhado ao Centro.

**Descrição**
* **Texto:** (Inserir copy final sobre impacto) "Tem entre 17 à 26 anos?..."
* **Estilo:** Fonte 20px, Regular, `#486284`, Alinhado ao Centro.

**Ações**
* **Componente:** `CTAButton` (Renderizar 2x)
* **Layout:** Empilhados verticalmente com espaçamento.

---

### 4. Seção "Quem somos"
*Reutilização do bloco institucional, alinhamento à esquerda.*

**Título**
* **Texto:** "Quem somos"
* **Estilo:** Fonte 30px, Bold, `#486284`, Alinhado à Esquerda.

**Descrição**
* **Texto:** "A Pulse Mais é uma organização sem fins lucrativos, fundada em 2022..."
* **Estilo:** Fonte 20px, Regular, `#486284`.

**Ação**
* **Componente:** `CTAButton` (Renderizar 1x)
* **Margin Top:** 24px.

---

### 5. Seção Final (Repetição)
*Reutilização da Seção 3.*

* **Conteúdo:** Título "Transforme a vida de um jovem" + Descrição + 2 CTAs.
* **Nota Técnica:** Avaliar transformar este bloco inteiro em um componente `<CtaBlock />` para evitar duplicação de código no arquivo `page.tsx`.

---

### 6. Rodapé (Footer)
*Reaproveitar integralmente o componente da Home.*

**Quadrante 1**
* Logo (180x50px) + Margem Top 116px.
* 3 Ícones de Redes Sociais (50x50px), espaçamento direito 15px.

**Quadrante 2**
* **Telefone:** "+55 11 98821-3886" (Bold, 40px).
* **Email:** Link "Envie um email" + texto "contato@pulsemais.org.br" (Bold, Sublinhado).
* **CNPJ:** "48.621.188/0001-11" (Regular, 30px).

---

## 📂 Arquitetura de Pastas (Next.js App Router)

```
src/
├── components/
│   ├── HeaderMobile.tsx
│   ├── MenuMobile.tsx
│   ├── SectionTitle.tsx
│   ├── SectionText.tsx
│   ├── CTAButton.tsx
│   └── Footer.tsx
├── app/
│   ├── page.tsx        <-- (Home)
│   └── apoie/          <-- (Nova Rota)
│       └── page.tsx    <-- (Arquivo desta página)
└── styles/
    └── globals.css
```
---

## 🧪 Casos de Teste (E2E Cypress)
* **Navegação de Rota:** Garantir que acessar /apoie carrega a página corretamente sem erros 404.
* **Interação de Botões:** Verificar se os 4 botões do Hero e os botões das seções internas são clicáveis.
* **Layout Mobile:** Verificar alinhamentos (Centro vs Esquerda) em viewports de 375px (iPhone SE) e 390px (iPhone 12/13).
* **Menu:** Garantir que o menu hambúrguer abre o overlay sobre o conteúdo da página "Apoie".    

