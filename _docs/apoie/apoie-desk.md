# Documentação Técnica — Apoie (Desktop Version)

**Projeto:** Pulse Mais — Página Apoie (Desktop)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Desktop Adaptation (Responsive from Mobile)
**Objetivo:** Documentar detalhadamente a tela de Apoie (versão Desktop), para envio ao agente Cursor e implementação fiel ao layout e aos requisitos de conteúdo.

---

# 1. Diretrizes Gerais de Design (Desktop)

## 1.1 Breakpoints e Layout
* **Breakpoint Principal:** O layout desktop deve ser ativado a partir de `md: (768px)` ou `lg: (1024px)`, com foco na largura máxima de **1440px**.
* **Container Central:** O conteúdo principal deve estar contido em um container centralizado (ex: `max-w-[1216px]` ou `max-w-[1440px] mx-auto`) conforme a largura da seção.

## 1.2 Tipografia e Cores
* **Fonte:** Poppins (Manter padrão).
* **Cores Específicas desta Página:**
    * Azul Primário: `#003870`
    * Cinza Texto: `#6B6D6E`
    * Verde Card/Borda: `#25B957`
    * Verde Hover: `#33B458`
    * Amarelo Borda/Hover: `#FCC41F`
    * Cinza Claro Fundo: `#F8F8F8`
    * Branco: `#FFFFFF`

## 1.3 Caminho dos arquivos (Assets)
| Asset | Caminho Sugerido | Descrição |
| :--- | :--- | :--- |
| **Hero Image** | `/assents/images/hero-apoie-desktop.png` | Imagem do topo (1200x460) |
| **Transforme BG** | `/assents/images/transforme-apoie-desktop.png` | Imagem de fundo seção Transforme (1200x354) |
| **impulsione img** | `/assents/images/impulsione-apoie-desktop.png` |
| **Invista BG** | `/assents/images/transforme-apoie-desktop.png` | Imagem de fundo seção Invista (1216x406) |
| **Shape Amarelo** | `/assents/brand/plus-amarelo.svg` | Decoração (Outline) |
| **Shape Azul** | `/assents/brand/plus-azul.svg` | Decoração (Outline) |

---

# 2. Componentes Globais Desktop

* `HeaderDesktop.tsx` (Com ajuste de navegação ativo)
* `PartnersCarousel.tsx` (Reutilizar componente existente)
* `FooterDesktop.tsx` (Com ajuste de navegação ativo)

---

# 3. Estrutura Completa da Página Apoie (Desktop)

## 3.1 Header Desktop

* **Requisito:** Aproveitar o componente `HeaderDesktop` existente.
* **Comportamento de Navegação:** Garantir que ao clicar na opção **“Apoie”** no menu, o usuário seja direcionado diretamente para esta página (`/apoie`).

---

## 3.2 Hero Section

* **Layout:** Imagem única centralizada.
* **Dimensões:** 1200px (largura) x 460px (altura).
* **Caminho da imagem:**  `/assents/images/hero-apoie-desktop.png` 
* **Alinhamento:** Centralizado ao centro da tela (`mx-auto`).
* **Conteúdo:** Apenas a imagem, sem texto sobreposto nesta seção específica.

---

## 3.3 Seção de Navegação ("Você já é parte...")

* **Container:** Fundo Branco, Padding `py-12 px-6`, `relative`, `overflow-hidden`.

### **Elementos Decorativos (Shapes)**
Os shapes devem flutuar nas laterais da seção.

1.  **Plus Amarelo Grande (Canto Superior Esquerdo):**
    * Posição: `absolute top-[-20px] left-[-30px]`.
    * Asset: `/assents/brand/plus-amarelo.svg`.
    * Dimensão: 100x100px.
    * *Nota:* Deve parecer "cortado" pela borda da tela.

2.  **Plus Azul (Lateral Direita):**
    * Posição: `absolute top-[80px] right-[-20px]`.
    * Asset: `/assents/brand/plus-azul.svg`.
    * Dimensão: 60x60px.
    * *Nota:* Posicionado na altura entre o título e o subtítulo.

3.  **Plus Amarelo Pequeno (Lateral Direita - Abaixo do Azul):**
    * Posição: `absolute top-[150px] right-[-10px]`.
    * Asset: `/assents/brand/plus-amarelo.svg`.
    * Dimensão: 40x40px.

### **Conteúdo da Seção (Z-Index 10)**

#### **Cabeçalho**
* **Título:** "Você já é parte do futuro dos jovens"
    * Estilo: 60px (`text-[60px]`), Bold, Cor `#003870`.
    * Alinhamento: Centralizado ao centro da tela.
* **Subtítulo:** "Escolha como quer impulsionar essa transformação"
    * Estilo: 32px (`text-[32px]`), Regular, Cor `#6B6D6E`.
    * Alinhamento: Centralizado.
    * Espaçamento Topo: 30px (`mt-[30px]`).

#### **Cards de Navegação**
* **Layout:** Sequência de 4 cards um do lado do outro (`flex row`).
* **Espaçamento entre cards:** 24px (`gap-[24px]`).
* **Alinhamento:** Centralizado.
* **Estilo do Card:**
    * Dimensões: 280px x 180px.
    * Cor de Fundo: Verde `#25B957`.
    * Texto: Branco, ExtraBold, Tamanho 24px.
    * Alinhamento do Texto: Centralizado ao centro do card.

* **Conteúdo dos Cards:**
    1.  Card 1: "Quero ser doador(a)"
    2.  Card 2: "Quero ser mentor(a)"
    3.  Card 3: "Quero empregar jovens"
    4.  Card 4: "Quero ser empresa patrocinadora"

---

## 3.4 Seção "Transforme a vida de um jovem"

* **Container:** Imagem de fundo (`[caminho da imagem]`).
    * Dimensões: 1200px x 354px.
    * Alinhamento: Centralizado na página.
* **Conteúdo:** Texto sobreposto à imagem, centralizado.

### **Textos**
* **Título:** "Transforme a vida de um jovem"
    * Estilo: 48px, Bold, Branco.
* **Subtítulo:** "A sua doação impulsiona a carreira de um jovem através do acesso à educação e empregabilidade"
    * Estilo: 24px, Regular, Branco.
    * Espaçamento do Título: 20px.

### **Botões**
* **Layout:** 2 botões lado a lado.
* **Espaçamento entre botões:** 54px.
* **Estilo Padrão:**
    * Dimensões: 342px x 48px.
    * Fundo: Sem preenchimento (Transparente).
    * Borda: 1px Sólida Branca.
    * Arredondamento: 50px (`rounded-[50px]`).
    * Texto: 16px, Bold, Branco.

* **Botões:**
    1.  Botão 1: "Doação Pontual"
    2.  Botão 2: "Doação Recorrente"

---

## 3.5 Seção "Doação Pontual"

### **Estrutura de Bordas (Container)**
* **Borda 1 (Externa):**
    * Dimensões: 1208px x 384px.
    * Estilo: Borda de 1px, Cor `#FCC41F`, Arredondada 24px.
* **Borda 2 (Interna):**
    * Dentro da borda 1.
    * Espaçamento (Margem/Padding): 16px laterais, 20px topo e baixo.
    * Estilo: Cor `#FCC41F`.

### **Conteúdo Interno**
* **Título:** "Doação Pontual"
    * Estilo: 48px, Bold, Cor `#003870`.
    * Alinhamento: Centralizado.
    * Distância do topo da borda 2: 38px.
* **Subtítulo:** "(sem benefícios de pessoas físicas)"
    * Estilo: 20px, Cor `#6B6D6E`.

### **Cards de Doação**
* **Layout:** 4 cards lado a lado.
* **Espaçamento:** 24px entre eles.
* **Efeito Hover:** Ao passar o mouse, a cor de preenchimento fica `#FCC41F` (Amarelo).

* **Card 1 (Destaque):**
    * Texto: "Doe 
    **R$50,00**" (Valor em Bold).
    * Tamanho da fonte: 24px.
    * Dimensões: 256px x 112px.
    * Cor de Fundo: `#003870`.
    * Cor do Texto: Branco.
    * Borda Arredondada: 24px.

* **Cards 2, 3 e 4 (Padrão):**
    * Dimensões: 241px x 106px.
    * Cor de Fundo: `#003870`.
    * Espaçamento: 24px.
    * Borda Arredondada: 24px.
    * Texto: Branco.
    * Conteúdo:
        * Botão 2: "Doe 
        **R$100,00**"
        * Botão 3: "Doe 
        **R$200,00**"
        * Botão 4: "Doe 
        **R$500,00**"

---

## 3.6 Seção "Doação Recorrente"

### **Estrutura de Bordas (Container)**
* **Borda 1 (Externa):**
    * Dimensões: 1208px x 384px.
    * Estilo: Borda de 1px, Cor `#25B957` (Verde), Arredondada 24px.
* **Borda 2 (Interna):**
    * Dentro da borda 1.
    * Espaçamento: 16px laterais, 20px topo e baixo.
    * Estilo: Cor `#25B957`.

### **Conteúdo Interno**
* **Título:** "Doação Recorrente"
    * Estilo: 60px, Bold, Cor `#003870`.
    * Alinhamento: Centralizado.
* **Subtítulo:** "(doações anuais, de pessoas físicas, com benefícios)"
    * Estilo: 20px, Cor `#6B6D6E`.

### **Cards de Doação**
* **Layout:** 5 cards (Layout flexível ou grid para acomodar todos).
* **Estilo Geral:** Texto centralizado ao centro do card, cor branca.

* **Card 1 (Destaque):**
    * Texto: "**Pulse +1**
     (R$ 200/mês)"
    * Tamanho Fonte: 32px.
    * Dimensões: 300px x 90px.
    * Cor de Fundo: `#25B957` (Verde).

* **Cards 2, 3, 4 e 5 (Padrão):**
    * Dimensões: 300px x 83px.
    * Cor de Fundo: `#003870` (Azul).
    * Espaçamento: 20px.
    * Tamanho Fonte: 32px.
    * **Conteúdo e Links:**
        * Card 2: "**Pulse +3** 
        (R$ 600/mês)" -> Link: `https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564`
        * Card 3: "**Pulse +5** 
        (R$ 1000/mês)" -> Link: `https://app.cobrefacil.com.br/link-de-pagamento/V4X2W70N51EED9MLDORG`
        * Card 4: "**Pulse +10**
        (R$ 2000/mês)" -> Link: `https://app.cobrefacil.com.br/link-de-pagamento/YL6ZOVXN47E3ENGP4KR0`
        * Card 5: "**Outro 
        Valor**" -> Link: `#`

---

## 3.7 Seção "Impulsione a carreira de um jovem como mentor voluntário"

* **Fundo:** Cinza Claro (`bg-[#F8F8F8]`).
* **Geometria (Recorte Diagonal):**
    * Utilizar `clip-path` para criar a inclinação.
    * CSS: `clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px));`
* **Padding:** `pt-[100px]` e `pb-[100px]`.
* **Layout:** Grid de 2 Colunas (Esquerda: Texto / Direita: Imagem). Reaproveitar estrutura "Quem Somos" da Home.

### **Coluna Esquerda (Texto)**
* **Título:** "Impulsione a carreira de um jovem como mentor voluntário"
    * Estilo: 48px, Bold, Cor `#003870`.
    * Espaçamento da última sessão: 80px.
* **Subtítulo:** "Fazendo a Formação Líder Mentor, você integra à Rede de Mentores(as) da Pulse Mais, conecta-se ao nosso propósito e desenvolve sua liderança ao mentorar o jovem."
    * Estilo: 20px, Cor `#6B6D6E`.
* **Botão:**
    * Texto: "Faça sua pré-inscrição".
    * Estilo Inicial: Sem preenchimento, Borda 1px Cor `#003870`.
    * **Hover:** Preenchimento `#33B458`, Texto Branco.
    * Ação: Redirecionar para `https://mailchi.mp/pulsemais/mentores-turma3`.

### **Coluna Direita (Visual)**
* **Imagem:** `/assents/images/impulsione-apoie-desktop.png`

---

## 3.8 Seção "Invista no futuro de jovens"

* **Background:** Imagem `/assents/images/transforme-apoie-desktop.png`.
    * Dimensões: 1216px x 406px.
* **Espaçamento da sessão anterior:** 42px.
* **Layout:** Centralizado.

### **Textos**
* **Título:** "Invista no futuro de jovens"
    * Estilo: 48px, Bold, Branco, Alinhamento Central.
* **Subtítulo:** "Impulsione jovens e fortaleça sua cultura, responsabilidade social, lideranças e capacidade de atrair talentos que impulsionam resultados."
    * Estilo: 24px, Branco.
    * Distância do título: 15px.

### **Botões**
* **Layout:** 2 botões lado a lado.
* **Distância entre eles:** 30px.
* **Estilo Padrão:**
    * Dimensões: 342px x 48px.
    * Sem preenchimento, Borda 1px Branca, Arredondamento 50px.
    * Texto: 15px, Bold, Branco.
    * **Hover:** Preenchimento do botão na cor `#33B458`.

* **Conteúdo e Ações:**
    1.  Botão 1: "Empregue jovens talentos" -> Link: `http://wa.me/5511996250844`
    2.  Botão 2: "Invista na Pulse Mais" -> Link: `#`

---

## 3.9 Seção "Empresas Parceiras e Patrocinadoras"

* **Requisito:** Utilizar o componente de parceiros (`PartnersCarousel.tsx`) já criado no projeto.

---

## 3.10 Footer Desktop

* **Requisito:** Utilizar o componente `FooterDesktop`.
* **Comportamento:** Garantir que o link **"Apoie"** no mapa do site direcione para o topo desta página.