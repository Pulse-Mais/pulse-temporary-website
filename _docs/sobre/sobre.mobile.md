# Documentação Técnica — Sobre (Mobile First Design)

**Projeto:** Pulse Mais — Página Sobre (Mobile)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Mobile First Design
**Objetivo:** Documentar detalhadamente a tela de "Sobre" (versão mobile), para envio ao agente Cursor e implementação fiel ao layout e aos requisitos de conteúdo.

---

# 0. Layout e Referências
Esta documentação consolida os ajustes visuais, textos e comportamentos específicos para a versão mobile da página Sobre.

---

# 1. Diretrizes Gerais de Design

## 1.1 Identidade Visual (Página Sobre)
* **Fonte:** Poppins (todas as variações).
* **Cores Principais:**
  * Azul Primário: `#003870`
  * Verde Institucional: `#33B458`
  * Amarelo: `#FCC41F` (Hero) / `#FBBF24` (Botões)
  * Branco: `#FFFFFF`

## 1.2 Princípios Mobile First
* O layout deve ocupar **100% da largura da viewport** (`w-full overflow-x-hidden`).
* Breakpoint de visibilidade: Esta estrutura deve aparecer apenas em mobile (`md:hidden`), enquanto a versão desktop (`hidden md:block`) fica oculta.

## 1.3 Componentização Base
Reutilizar os seguintes componentes já existentes:
* `<HeaderMobile />`
* `<FooterMobile />`
* `<AnimatedCounter />` (Para a seção de impacto)
* `<CTAButton />` (Se aplicável, ou criar botão específico conforme especificado)

## 1.4 Caminho dos Arquivos e Assets
| Elemento | Caminho / Descrição |
| :--- | :--- |
| **Pilar Background** | `/assents/images/pilar-img.png` |
| **Shape White** | `/assents/backgrounds/shape-plus-white.svg` |
| **Hero Image** | `/assents/images/hero-sobre-mobile.png` |

---

# 2. Estrutura Completa da Página Sobre (Mobile)

A seguir, a especificação detalhada de cada seção.

---

# 2.1 Header (Topo)

* **Requisito:** Reutilizar integralmente o componente `<HeaderMobile />`.
* **Navegação:** Garantir que a opção "Sobre" no menu aponte para o link atual (`/sobre`), indicando estado ativo se necessário.

---

# 2.2 Hero Section (Imagem e Título)

* **Referência Visual:** Imagem do jovem com texto amarelo sobreposto ou adjacente.
* **Estrutura:**
    * Container Flex Column, centralizado.
    * Espaçamento adequado do topo (considerar a altura do Header fixo).

### **Imagem Hero**
* **Dimensões:** 360px (largura) x 269px (altura).
* **Comportamento:** Responsiva (`max-w-full h-auto`), garantindo que não quebre em dispositivos menores (320px) ou maiores.
* **Caminho da imagem:** `/assents/images/hero-sobre-mobile.png`
* **Estilo:** Bordas arredondadas (sugerido `rounded-[24px]` para manter consistência, ou conforme imagem referência).

### **Título Principal**
* **Texto:**
  > "Conheça jovens
  > empregados e
  > que acessaram o
  > ensino superior!"
* **Tipografia (Tailwind):**
  * Tamanho: 28px (`text-[28px]`).
  * Peso: Bold (`font-bold`).
  * Cor: Amarelo `#FCC41F` (`text-[#FCC41F]`).
  * Alinhamento: Centralizado ou Esquerda (conforme layout visual, padrão mobile tende a centralizar se não especificado).

---

# 2.3 Vídeo Institucional

* **Posicionamento:** Distância do topo de 40px (`mt-[40px]`) em relação ao elemento anterior.
* **Estrutura do Container do Vídeo:**
    * Largura: 300px.
    * Altura: 190px.
    * Responsividade: `w-full max-w-[300px] aspect-video`.
    * Estilo: Bordas arredondadas de 15px (`rounded-[15px]`), `overflow-hidden`.

### **Embed Code**
Utilizar o iframe abaixo:
```jsx
<iframe 
  width="560" 
  height="315" 
  src="[https://www.youtube.com/embed/djpjV28WllM?si=ub-JPmc4bVLlvVoc](https://www.youtube.com/embed/djpjV28WllM?si=ub-JPmc4bVLlvVoc)" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerPolicy="strict-origin-when-cross-origin" 
  allowFullScreen
  className="w-full h-full object-cover" // Classes para ajuste ao container pai
></iframe>


## 2.4 Seção "Resultados de Impacto"

### Container Principal
* **Largura:** `w-full`.
* **Layout:** `flex flex-col items-center`.
* **Cor de Fundo:** Verde Institucional (`bg-[#33B458]`).
* **Propriedades Críticas:** `relative` e `overflow-hidden` (Essencial para corte dos shapes).
* **Geometria (Clip-path):** Recorte sutil na base, subindo para a direita.
  * **CSS:** `clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 0 100%);`
* **Espaçamento:** `py-16` ou `py-20`.

### Conteúdo (Tipografia e Métricas)
* **Título:**
  * Texto: "Resultados de Impacto".
  * Estilo: `text-[40px]` (ou `text-4xl`), Bold, Branco, Centralizado.
  * Margem: `mb-12`.

* **Métricas (AnimatedCounter):**
  * **Requisito:** Reutilizar o componente `<AnimatedCounter />` criado para o desktop.
  * **Layout:** Empilhamento vertical (`flex flex-col`), espaçamento `gap-12`.
  * **Estilo dos Números:**
    * Cor: Azul `#003870`.
    * Peso: ExtraBold.
    * Tamanho: `text-[96px]` (ou `text-7xl`).
  * **Estilo das Legendas:**
    * Cor: Branco.
    * Tamanho: `text-[24px]`.
    * Alinhamento: Centralizado.
    * **Nota:** Manter palavras-chave ("atingidos", "Jovens formados", "Mentores") em **Bold**.

### Elementos Decorativos (Shapes)
Utilizar imagem pelo caminho `/assents/backgrounds/shape-plus-white.svg` com `position: absolute`.

1.  **Shape 1 (Topo Direito):** `top-0 right-[-30px] opacity-20`.
2.  **Shape 2 (Topo Esquerdo):** `top-[15%] left-[-20px] opacity-20`.
3.  **Shape 3 (Meio Direito - Altura 110):** `top-[45%] right-[-20px] opacity-20`.
4.  **Shape 4 (Base Esquerda - Altura 180):** `bottom-[20%] left-[-20px] opacity-20`.
5.  **Shape 5 (Canto Inferior):** `bottom-0 left-0 opacity-20`.

---

## 2.5 Seção "Pilares de Atuação"

* **Visibilidade:** `block md:hidden`.

### Container
* **Fundo:** Branco.
* **Padding:** `py-12 px-6`.
* **Layout:** Coluna única (`flex flex-col`).

### Título
* **Texto:** "Pilares de Atuação".
* **Estilo:** `text-[48px]`, ExtraBold, Azul `#003870`.
* **Decoração:** Sublinhado grosso (`underline decoration-4 underline-offset-8` na cor azul).
* **Alinhamento:** Centralizado.
* **Margem:** `mb-8`.

### Cards (Estilo Banner Compacto)
* **Layout:** Grid vertical (`flex flex-col`), Gap `gap-6`.
* **Estrutura do Card:**
  * Dimensões: Largura 100% (`w-full`), Altura 180px (`h-[180px]`).
  * Borda: Arredondada 30px (`rounded-[30px]`).
  * Comportamento: `relative overflow-hidden flex flex-col justify-center items-center text-center px-4`.
* **Tipografia (Sobre o Overlay):**
  * **Título:** `text-2xl font-bold leading-tight text-white drop-shadow-md`.
  * **Subtítulo:** `text-sm font-normal mt-1 text-white drop-shadow-md`.

### Conteúdo dos Cards
* **Card 1:**
  * Título: "Projetos Específicos"
  * Subtítulo: "Conexão com o Mundo Profissional"
  * Imagem: `/assents/images/pilar-img.png`
* **Card 2:**
  * Título: "Programas de até 6 Meses"
  * Subtítulo: "Desenvolvimento de Talentos"
  * Imagem: `/assents/images/pilar-img.png`
* **Card 3:**
  * Título: "Rede de Talentos"
  * Subtítulo: "Emprego e Ensino Superior"
  * Imagem: `/assents/images/pilar-img.png`

### Botão CTA
* **Texto:** "Venha ser Pulser".
* **Estilo:**
  * Background: Amarelo `#FBBF24`.
  * Texto: Branco, Bold.
  * Forma: `rounded-full`.
  * Largura: `w-full`.
  * Altura: Aprox 60px.

---

## 2.6 Seção "Torne-se nosso parceiro"

* **Requisito:** Reutilizar integralmente o código/componente da seção "Torne-se nosso parceiro" já desenvolvida na página Home (Mobile).
* **Consistência:** Manter padding, tipografia e os shapes laterais (Plus Amarelo e Plus Verde) exatamente como na Home.

---

## 2.7 Footer (Rodapé)

* **Requisito:** Reutilizar o componente `<FooterMobile />`.
* **Funcionalidade:** Verificar se o link "Sobre" na lista de navegação do rodapé redireciona corretamente para o topo desta página (`/sobre`).