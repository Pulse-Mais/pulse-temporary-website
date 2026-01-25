# Documentação Técnica — Home (Desktop Version)

**Projeto:** Pulse Mais — Página Home (Desktop)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Desktop Adaptation (Responsive from Mobile)
**Objetivo:** Documentar detalhadamente a tela de Home, para envio ao agente Cursor e implementação fiel ao layout.

---

# 1. Diretrizes Gerais de Design (Desktop)

## 1.1 Breakpoints e Layout
* **Breakpoint Principal:** O layout desktop deve ser ativado a partir de `md: (768px)` ou `lg: (1024px)`, com foco na largura máxima de **1440px**.
* **Container Central:** O conteúdo principal deve estar contido em um container centralizado (ex: `max-w-[1440px] mx-auto`) para telas ultrawide, mas fundos (backgrounds) devem ser **Full Bleed** (100% da largura).

## 1.2 Tipografia e Cores
* **Fonte:** Poppins (Manter padrão).
* **Cores:**
    * Azul Primário: `#003870`
    * Azul Institucional (Fundo): `#0F2849`
    * Amarelo: `#FCC41F`
    * Verde Claro: `#33B458`
    * Verde Card: `#25B957`
    * Cinza Texto: `#6B6D6E`

## 1.3 Caminho dos arquivos (Assets)
Reaproveitar assets do mobile onde possível. Novos assets desktop devem seguir a nomenclatura lógica.

| Asset | Caminho Sugerido | Descrição |
| :--- | :--- | :--- |
| **Logo Header** | `/assents/logos/pulse-logo-header.svg.svg` | Logo colorida (Reaproveitar) |
| **Menu Wave** | `/assents/backgrounds/menu-wave-desktop.svg` | Onda colorida canto superior esquerdo |
| **Hero Slide 1** | `/assents/desktop/hero-jovens.jpg` | Jovem com microfone (Desktop Wide) |
| **Hero Slide 2** | `/assents/desktop/hero-parceiros.jpg` | Foto de reunião/parceria |
| **Hero Slide 3** | `/assents/desktop/hero-mentores.jpg` | Foto de mentoria |
| **Quem somos imagem** | `/assents/images/quemsomos-image.png` | Foto de parceiro falando |
| **Shape amarelo** | `/assents/backgrounds/shape-amarelo.svg` | shape amarelo sessão "é jovem?" |
| **Footer Shape** | `/assents/backgrounds/footer-shape-blue.svg` | Forma orgânica azul atrás do logo no footer |
| **Footer Wave** | `/assents/backgrounds/wave-footer-desk.svg` | Onda colorida canto inferior direito |

---

# 2. Componentes Globais Desktop

Os componentes devem ser variantes responsivas dos componentes mobile ou novos componentes específicos se a estrutura divergir muito.

* `HeaderDesktop.tsx` (Novo layout)
* `HeroCarouselDesktop.tsx` (Lógica de texto dinâmica)
* `GridPrograms.tsx` (Cards lado a lado)
* `PartnersCarousel.tsx`
* `FooterDesktop.tsx`

---

# 3. Estrutura Completa da Home (Desktop)

## 3.1 Header Desktop (Menu)

* **Estrutura:** Barra de navegação horizontal visível apenas em telas grandes (`hidden md:flex`).
* **Container:**
    * Largura Máxima: 1440px (`max-w-[1440px]`).
    * Altura: Aprox. 259px (considerando espaçamentos).
    * Fundo: Branco (`bg-white`).
    * Alinhamento: `flex flex-row justify-between items-start`.
    * Padding Superior: 71px (`pt-[71px]`).

### **Elementos Decorativos**
* **Onda Esquerda Superior:**
    * Posicionada `absolute top-0 left-0`.
    * Caminho do arquivo `/assents/backgrounds/menu-wave-desktop.svg`

### **Logo**
* **Arquivo:** `/assents/logos/pulse-logo-header.svg` (Mesma do mobile).
* **Dimensões Desktop:** 294px x 92px (`w-[294px] h-[92px]`).
* **Posicionamento:** Margem esquerda proporcional de 120px.

### **Menu de Navegação**
* **Posicionamento:**
    * Distância da Logo: Aprox. 350px (`ml-[350px]` ou usar `justify-between`).
* **Itens:** "Sobre", "Apoie", "Transparência", "Contato".
* **Estilo dos Links:**
    * Fonte: 20px (`text-[20px]`).
    * Peso: Médio (`font-medium`).
    * Cor: Escura (`text-[#003870]` ou cinza escuro).
    * Hover: Sutil (ex: sublinhado ou leve mudança de cor).
* **Espaçamento entre itens:**
    * Padrão: 66px (`gap-[66px]`).
    * **Exceção:** O item "Contato" deve ter um afastamento direito de 130px do final do menu. 

---

## 3.2 Hero Section (Carousel Dinâmico - com 4 seg em cada slide)

* **Layout:** Full-width (`w-full`), logo abaixo do menu.
* **Lógica:** Carrossel onde a imagem de fundo muda e o conteúdo de texto/botão muda e realinha (Esquerda ou Direita) conforme o slide.

### **Slide 1: Jovens**
* **Alinhamento:** Esquerda (`items-start`). Margem Esquerda do conteúdo: 120px.
* **Topo do Conteúdo:** 155px.
* **Caminho da imagem:** `/assents/desktop/hero-jovens.jpg`
* **Elementos sob a imagem:**
    * **Categoria:** "Jovens" — 21px, Medium, Branco.
    * **Título:** "Venha ser um jovem Pulsante" — 60px (`text-[60px]`), Bold, Branco. Espaçamento top 3px.
    * **Subtítulo:** dividido em 2 linhas : linha 1 - "Tem entre 17 à 26 anos? Este pode ser o começo" e linha 2 - "da sua jornada no mundo da tecnologia" — 20px Regular, Branco. Bloco de 522px de largura. Espaçamento top 15px. 
    * **Botão:** "Saiba Mais"
        * Tamanho: 132x50px.
        * Estilo: Outline Branco (`border border-white`), Rounded 50px.
        * Hover: Fundo Verde `#33B458`, Texto Branco.
        * Margem Top: 24px.

### **Slide 2: Parceiros**
* **Alinhamento:** Esquerda (`items-start`). Margem Esquerda: 120px.
* **Topo do Conteúdo:** 155px.
* **Caminho da imagem:** `/assents/desktop/hero-parceiros.jpg`
* **Elementos sob a imagem:**
    * **Categoria:** "Parceiros" — 21px, Medium, Branco.
    * **Título:** "Torne-se nosso parceiro" — 60px, Bold, Branco.
    * **Subtítulo:** dividido em 3 linhas: linha 1 - "Entenda como empresas, organizações e pessoas", linha 2 "físicas estão impulsionando o futuro dos jovens" e linha 3 "em tecnologia com a Pulse Mais" — 20px Regular, Branco. Bloco de 532px largura.
    * **Botão:** "Torne-se nosso parceiro"
        * Tamanho: 247x48px.
        * Estilo: Outline Branco. Hover Verde `#33B458`.

### **Slide 3: Mentores**
* **Alinhamento:** **DIREITA** (`items-end` ou `ml-auto`).
* **Margem Direita:** 80px (`mr-[80px]`).
* **Caminho da imagem:** `/assents/desktop/hero-mentores.jpg`
* **Elementos sob a imagem:**
    * **Categoria:** "Mentores" — 21px, Medium, Branco.
    * **Subtítulo:** dividido em 2 linhas: linha 1 "Venha transformar desafios em" e linha 2 "oportunidades para jovens."  — 20px Regular, Branco. Bloco de 445px largura.
    * **Botão:** "Seja um mentor"
        * Tamanho: 175x50px.
        * Estilo: Outline Branco. Hover Verde `#33B458`.

---

## 3.3 Seção "Quem Somos"

* **Layout:** Grid de 2 Colunas (50% / 50%).
* **Espaçamento:** 
    * Topo: 110px.
    * Lateral (X): 121px (Container centralizado).
    * Entre Colunas (Gap): 87px.

### **Coluna Esquerda (Visual)**
* **Caminho da imagem:**  `/assents/images/quemsomos-image.png`
* **Alinhamento:** Canto esquerdo do grid.

### **Coluna Direita (Texto)**
* **Conteúdo:**
    * **Título:** "Quem somos" — 60px Bold, Azul `#003870`. Alinhado à direita no design, mas texto justificado à esquerda (verificar layout visual).
    * **Texto Descritivo:** "A Pulse Mais é uma organização sem fins lucrativos, fundada em 2022, que tem o propósito de impulsionar a carreira de jovens talentos de baixa renda no mundo profissional e em tecnologia." — Bloco de 445px largura x 160px altura. Esse texto vai ficar dividido em 5 linnhas. 
        * **Tamanho da fonte:** 20px regular
        * **Cor da fonte:** #6B6D6E
    * **Botão:** "Saiba mais"
        * Tamanho: 132x50px.
        * Estilo: Outline Azul `#003870`, Texto Azul. Rounded 50px.
        * Hover: Fundo Verde `#33B458`, Texto Branco.

---

## 3.4 Seção Programas ("É jovem?")

* **Fundo:** Azul Institucional (`bg-[#0F2849]`).
* **Geometria (Diagonal):**
    * CSS: `clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px));`
    * Padding Vertical: 100px.
* **Elementos Decorativos:**
    * Shape Amarelo Caminho da imagem: `/assents/backgrounds/shape-amarelo.svg`, Canto Superior Esquerdo (Grudado no final da diagonal do background polygon).
    * Shape Verde Caminho da imagem: `/assents/backgrounds/shape-verde.svg`, Canto Inferior Direito (grudado)

### **Cabeçalho**
* **Título:** "É jovem?" — 60px Bold, Branco, Centralizado. MT 100px.
* **Subtítulo:** "Saiba como participar" — 35px Bold, Branco, Centralizado. MT 10px.

### **Grid de Cards (4 Colunas)**
* **Layout:** Grid 4 colunas alinhadas ao centro.
* **Estilo do Card:**
    * **Borda Externa:** Amarela `#FCC41F` (1px).
    * **Fundo Interno:** Verde `#25B957` (Padding interno ~21px). Rounded 15px.
    * **Títulos:** 24px Bold, Branco, Centralizado.
    * **Conteúdo:** Alinhado ao centro.
    * **Detalhe:** O efeito accordion vai acontecer expandindo a borda amarela externa, se ajustando de acordo com o texto revelado ao passar o mouse. Isso se aplica aos 4 cards.
* **Interação (Accordion Horizontal/Hover) - Card 1**
    * **Título:** "Experiências de Mentorias de Curta Duração"
    * Efeito de expansão ao passar o mouse para revelar os detalhes:
        > **Formato:** Online ou Presencial em São Paulo
        > **Benefícios:**
        > - Clareza sobre temas de carreira
        > - Rede profissional ampliada
        > - Aumento de repertório

* **Interação (Accordion Horizontal/Hover) - Card 2**
    * **Título:** "Eventos em Empresas de Tecnologia"
    * Efeito de expansão ao passar o mouse para revelar os detalhes:
        > **Formato:** Presencial em São Paulo
        > **Benefícios:**
        > - Palestras inspiradoras
        > - Conheça profissionais do mercado
        > - Novos horizontes de carreira

* **Interação (Accordion Horizontal/Hover) - Card 3**
    * **Título:** Programa Pulse Mais"
    * Conteúdo:
        > **Formato:** Online ou Híbrido (Presencial/Online)
        > **Dedicação:** 6 meses
        > **Benefícios:**
        > - Formação técnica e comportamental completa
        > - Computador/Notebook gratuito
        > - Vagas de emprego e bolsas de estudos para faculdade   

* **Interação (Accordion Horizontal/Hover) - Card 4**
    * **Título:** "Programa de Mentoria"
    * Conteúdo:
        > **Formato:** (online/híbrido/presencial)
        > **Dedicação:** 4 meses
        > **Benefícios:**
        > - Direcionamento de carreira individualizado
        > - Preparação para o mercado de trabalho
        > - Vagas de emprego e bolsas de estudos para faculdade       
    

### **Botões de Ação**
* **Layout:** Flex Row, Centralizado.
* **Espaçamento entre botões:** 59px.
* **Estilo Comum:** Tamanho 340x50px, Fundo Amarelo `#FCC41F`, Texto Branco 16px Bold.
    1. "Cadastre-se"
    2. "Torne nosso Parceiro"

---

## 3.5 Seção Parceiros

* **Título:** "Empresas Parceiras e Patrocinadoras" — 48px Bold, Azul `#003870`. MT 80px.
* **Carrossel:**
    * **Cards:** Imagens adaptáveis (tamanho 300x300px), com bordas arredondadas de 24px.
    * **Caminho da imagem 1** `/assents/logos/italo.svg`
    * **Caminho da imagem 2** `/assents/logos/italo.svg`
    * **Caminho da imagem 3** `/assents/logos/italo.svg`
    * **Visualização:** 3 itens (imagens) por vez.
    * **Gap:** 60px entre itens.
    * **Navegação:** Setas laterais (distância 68px do carrossel).
    * **Margem Topo:** 50px.
* **Componentização:** Componentizar essa seção para usar em outras paginas - `PartnersCarousel.tsx`.

---

## 3.6 Seção Apoio ("Quero apoiar")

* **Container:** Imagem de fundo larga (1205x292px) com arredondamento 15px.
* **Caminho da imagem:** `/assents/images/queroapoiar-img.png`
* **Alinhamento:** Centralizado na página (`mx-auto`).
* **Conteúdo Interno:** Flex Column/Row centralizado vertical e horizontalmente.

### **Elementos**
* **Título:** "Quero apoiar" — 65px Bold, Branco.
* **Botões:** Lado a lado (Gap 105px). Margem Top 30px. Centralizados com o titulo
    * Tamanho: 313x51px.
    * Estilo: Fundo Transparente, Borda 1px Branca, Texto Branco 16px.
    * **Esquerda:** "Seja Mentor Voluntário". 
    * **Direita:** "Torne-se nosso parceiro".

---

## 3.7 Footer Desktop

* **Estrutura:** Layout Horizontal (`flex row`), diferente do mobile.
* **Margem Topo:** 70px.

### **Coluna 1 (Esquerda - Identidade)**
* **Fundo - Caminho da imagem:** `/assents/backgrounds/footer-shape-blue.svg`
* **Conteúdo:** Logo Pulse Mais (Branca) sobreposta ao shape.
* **Logo - Caminho da imagem:** `/assents/logos/pulse-logo-header.svg` (Mesma do mobile).
* **Posição:** Topo 70px.

### **Coluna 2 (Mapa do Site)**
* **Título:** "Mapa do site" — 20px Bold, Azul `#003870`. Padding Esq 77px.
* **Lista:** "Sobre", "Apoie", "Transparência", "Contato" (sem os bullet points)
* **Estilo:** 16px Regular, Cinza `#6B6D6E`. Gap linhas 10px.

### **Coluna 3 (Redes Sociais)**
* **Título:** "Redes sociais" — 20px Bold, Azul `#003870`. Padding Esq 45px.
* **Lista:** Ícone (31x31px) + Texto (16px Cinza). Gap 10px.
* **Icones:**
    * **Instagram:**
        * Arquivo: `/assents/brand/icon-instagram.svg`.
        * Ação: Link para `https://www.instagram.com/pulsemaisong/`.
    * **LinkedIn:**
        * Arquivo: `/assents/brand/icon-linkedin.svg`.
        * Ação: Link para `https://www.linkedin.com/company/pulsemaisong/`.

### **Coluna 4 (Formulário)**
* **Título:** "Mande um email" — 20px Bold, Azul `#003870`. Padding Esq 37px.
* **Input:** Branco, Borda `#D9D7D8` (1px). Dimensão 270x123px (TextArea).
* **Botão:** "Enviar" — 126x33px, Azul `#003870`, Texto Branco 16px.
* **Ação:** Redirecionar para página de contato.

### **Decoração Final**
* **Onda - Caminho da imagem:** `/assents/backgrounds/wave-footer-desk.svg` (Canto inferior direito) 
* **Dimensão:** 300x400px (aprox).
* **Z-Index:** Atrás do conteúdo, mas visível no canto inferior direito ao final do footer.

