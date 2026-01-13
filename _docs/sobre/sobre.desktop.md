# Documentação Técnica — Sobre (Desktop Version)

**Projeto:** Pulse Mais — Página Sobre (Desktop)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Desktop Adaptation (Responsive from Mobile)
**Objetivo:** Documentar detalhadamente a tela "Sobre", para envio ao agente Cursor e implementação fiel ao layout, mantendo consistência com a Home.

---

# 1. Diretrizes Gerais de Design

## 1.1 Layout e Estrutura
* **Breakpoint Principal:** `md: (768px)` ou `lg: (1024px)`.
* **Container Central:** Largura máxima de **1440px** centralizado (`mx-auto`).
* **Tipografia:** Família Poppins (Padrão do projeto).

## 1.2 Paleta de Cores (Revisão)
* **Azul Primário:** `#003870` (Títulos, Botões, Números Impacto)
* **Verde Institucional:** `#33B458` (Background Impacto)
* **Cinza Texto:** `#6B6D6E` (Parágrafos)
* **Branco:** `#FFFFFF`
* **Amarelo Decorativo:** `#FCC41F`

## 1.3 Caminho dos Arquivos (Assets)
Novos assets específicos para a página Sobre.

| Asset | Caminho Sugerido | Descrição |
| :--- | :--- | :--- |
| **Hero Image** | `/assents/desktop/sobre-hero.png` | Imagem principal da turma (1200x465px) |
| **Nosso Propósito** | `/assents/images/nosso-proposito.jpg` | Foto palestra (Card 1) |
| **Nosso Sonho Grande** | `/assents/images/nosso-sonho.jpg` | Foto jovens microfone (Card 2) |
| **Shape Outline** | `/assents/backgrounds/shape-plus-outline-yellow.svg` | Cruz vazada amarela (Topo esquerdo Missão) |
| **Shape Solid** | `/assents/backgrounds/shape-plus-yellow.svg` | Cruz sólida amarela (Base direita Missão) |
| **Shape Green** | `/assents/backgrounds/shape-plus-green.svg` | Cruz verde outline (Base direita Missão) |
| **Shape White** | `/assents/backgrounds/shape-plus-white.svg` | Cruz branca transparente (Sessão Impacto) |
| **Pilar IMG** | `/assents/images/pilar-img.jpg` | Imagem card Projetos Específicos |


---

# 2. Estrutura Completa da Página Sobre (Desktop)

## 2.1 Header Desktop

* **Ação:** Reutilizar componente `<HeaderDesktop />`.
* **Comportamento:** O link "Sobre" deve estar ativo/destacado (Bold ou cor primária) ao acessar esta página.

---

## 2.2 Hero Section

* **Container:** Centralizado (`max-w-[1440px]`).
* **Imagem:**
    * **Dimensão:** 1200px largura x 465px altura.
    * **Caminho:** `/assents/desktop/sobre-hero.png`
    * **Estilo:** `object-cover`, bordas arredondadas de acordo com padrão global (ex: `rounded-[24px]`).
    * **Margem Topo:** Espaçamento adequado do Header.

---

## 2.3 Sessão "Missão e Visão"

* **Container:** `max-w-[1440px]`, Fundo Branco.
* **Margem Topo (Título):** 122px.

### **Título da Seção**
* **Texto:** "Missão e Visão"
* **Estilo:** 64px Bold, Azul `#003870`. Centralizado.
* **Espaçamento Inferior:** `mb-12` ou `mb-16` (gap generoso para os cards).

### **Grid de Conteúdo**
* **Layout:** 2 Colunas (Grid).
* **Gap:** `gap-16` (Aprox. 64px).

### **Cards (Propósito & Sonho)**
* **Estrutura Visual:**
    1.  **Imagem:** Proporção 16:9, `rounded-[24px]`, largura 100%.
    2.  **Título:** Azul `#003870`, 24px Bold, `mt-6`. Centralizado.
    3.  **Texto:** Cinza `#6B6D6E`, 16px Regular. Centralizado (usar `max-w-[80%]` ou `mx-auto`).

* **Conteúdo Card 1 (Esquerda):**
    * **Imagem:**  `/assents/images/nosso-proposito.jpg`
    * **Título:** "Nosso propósito"
    * **Texto:** "Impulsionar jovens talentos de baixa renda a conquistar carreiras em tecnologia..."

* **Conteúdo Card 2 (Direita):**
    * **Imagem:**  `/assents/images/nosso-sonho.jpg`
    * **Título:** "Nosso sonho grande"
    * **Texto:** "Empoderar milhares de jovens a ingressarem no mercado e no mundo da tecnologia, reduzindo desigualdades socioeconômicas."

### **Elementos Decorativos (Shapes)**
* **Topo Esquerdo:** Shape Outline Amarelo (`absolute top-0 left-0`). Efeito de corte saindo da tela.
        **Caminho da imagem:**  `/assents/backgrounds/shape-plus-outline-yellow.svg`

* **Base Direita:** Composição de 2 shapes (`absolute bottom-0 right-0`).
    * Shape Amarelo Sólido (79x79px). Caminho da imagem: `/assents/backgrounds/shape-plus-yellow.svg`
    * Plus Verde Outline (120x120px) posicionado levemente abaixo e à direita. Caminho da imagem: `/assents/backgrounds/shape-plus-green.svg`

---

## 2.4 Sessão "Conheça Jovens"

* **Espaçamento Topo:** 180px (da sessão anterior).
* **Lógica:** Reutilizar código da Home ("Quem Somos"), mas **INVERTER** a ordem.
* **Layout:** Texto à Esquerda (40-50%) | Imagem à Direita (50-60%).

### **Coluna Esquerda (Texto)**
* **Título:** "Conheça jovens empregados e que acessaram o ensino superior!"
* **Estilo:** 48px Bold, Azul `#003870`.
* **Alinhamento:** À esquerda.

### **Coluna Direita (Imagem)**
* **Imagem:** `/assents/images/quemsomos-image.png`.

---

## 2.5 Sessão "Resultados de Impacto"

* **Fundo:** Verde Institucional `#33B458`.
* **Geometria:**
    * `clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px));`
    * **Padding:** `pt-[100px] pb-[100px]`.

### **Elementos Decorativos**
* **Shapes Brancos:**
    * Canto Superior Direito (Grudado).
    * Caminho da imagem: `/assents/backgrounds/shape-plus-white.svg`
    * Canto Inferior Esquerdo (Grudado).
    * Caminho da imagem: `/assents/backgrounds/shape-plus-white.svg`

### **Conteúdo**
* **Título:** "Resultados de Impacto" — 64px Bold, Branco. Topo 50px.
* **Grid:** 3 Colunas centralizadas. Gap 62px.

### **Colunas de Dados**
As colunas seguem o padrão: Número Gigante Azul + Texto Branco.

* **Coluna 1:**
    * Número: "1000" — 128px ExtraBold, Azul `#003870`.
    * Texto: "Jovens **atingidos**" — 32px Branco (Palavra "atingidos" em Bold).

* **Coluna 2:**
    * Número: "110" — 128px ExtraBold, Azul `#003870`.
    * Texto: "Jovens **formados** em programas" — 32px Branco ("Jovens formados" em Bold).

* **Coluna 3:**
    * Número: "180" — 128px ExtraBold, Azul `#003870`.
    * Texto: "**Mentores** formados" — 32px Branco ("Mentores" em Bold).

---

## 2.6 Sessão "Pilares de Atuação"

* **Container:** `max-w-[1440px]`, Centralizado.
* **Padding:** `py-16` ou `py-20`.

### **Título**
* **Texto:** "Pilares de Atuação"
* **Estilo:** 4xl ou 5xl ExtraBold, Azul `#003870`. Centralizado.
* **Margem Inferior:** `mb-12`.

### **Grid de Cards**
* **Layout:** 3 Colunas (`grid-cols-3`). Gap 8.
* **Estilo do Card:**
    * Topo: Imagem (`h-[200px]`) com Overlay + Título Branco. Rounded Top 30px.
    * Corpo: Fundo Branco, Shadow-lg, Rounded Bottom 30px, Padding 8.
* **Caminho da imagem dos cards:**
    * Card 1: `/assents/images/pilar-img.jpg`
    * Card 2: `/assents/images/pilar-img.jpg`
    * Card 3: `/assents/images/pilar-img.jpg`

### **Conteúdo dos Cards**

| Elemento | Card 1 | Card 2 | Card 3 |
| :--- | :--- | :--- | :--- |
| **Título Overlay** (40px Bold Branco) | "Projetos<br>Específicos" | "Programas de<br>até 6 meses" | "Rede de<br>Talentos" |
| **Subtítulo** (Blue #003870 Bold) | "Conexão com o<br>Mundo Profissional" | "Desenvolvimento<br>de Talentos" | "Emprego e<br>Ensino Superior" |
| **Texto O QUE** | Expandir a visão dos jovens sobre possibilidades educacionais... | Desenvolver competências técnicas e comportamentais necessárias... | Promover ascensão socioeconômica e melhoria da qualidade... |
| **Texto COMO** | Workshops e palestras em organizações parceiras... | Capacitações práticas, mentorias de longa duração... | Apoio direto na conquista do primeiro emprego... |

*Nota: As palavras "O QUE:" e "COMO:" devem estar em Negrito.*

### **Botão de Ação**
* **Posição:** Centralizado abaixo do grid.
* **Margem Topo:** 81px (do card 2).
* **Dimensão:** 615px largura x 81px altura.
* **Estilo:** Pílula (`rounded-full`), Fundo Azul `#003870`.
* **Texto:** "Quero ser Pulser" — 16px Bold, Branco.
* **Link:** Externo.

---

## 2.7 Sessão "Quero Apoiar"

* **Ação:** Reutilizar integralmente o código da Home Desktop localizado no bloco {/* 3.6 Seção Apoio ("Quero apoiar") */}

---

## 2.8 Footer

* **Ação:** Reutilizar componente `<FooterDesktop />`.