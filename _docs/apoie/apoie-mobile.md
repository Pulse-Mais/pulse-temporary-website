# Documentação Técnica — Apoie (Mobile First Design)

**Projeto:** Pulse Mais — Página Apoie (Mobile)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Mobile First Design
**Objetivo:** Documentar detalhadamente a tela de "Apoie" (versão mobile), para envio ao agente Cursor e implementação fiel ao layout e aos requisitos de conteúdo.

# 1. Diretrizes Gerais de Design

## 1.1 Identidade Visual (Página Apoie)
* **Fonte:** Poppins (todas as variações).
* **Cores Principais:**
  * Azul Primário: `#003870`
  * Verde Institucional: `#25B957` (Nota: tom levemente diferente do verde usado em outras páginas, seguir este hex).
  * Amarelo: `#FCC41F`
  * Cinza Texto: `#6B6D6E`
  * Branco: `#FFFFFF`

## 1.2 Princípios Mobile First
* O layout deve ocupar **100% da largura da viewport** (`w-full overflow-x-hidden`).
* Breakpoint de visibilidade: Esta estrutura deve aparecer apenas em mobile (`md:hidden`).

## 1.3 Componentização Base
Reutilizar os seguintes componentes já existentes:
* `<HeaderMobile />`
* `<FooterMobile />`
* `<CTAButton />` (Adaptar estilos conforme necessidade)

## 1.4 Caminho dos Arquivos e Assets
| Elemento | Caminho Sugerido / Descrição |
| :--- | :--- |
| **Hero Image** | `/assents/images/apoie-hero.png` (300x256) |
| **Transforme BG** | `/assents/images/apoie-transforme-bg.png` (360x450) |
| **Invista BG** | `/assents/images/apoie-transforme-bg.png` (360x530) |

---

# 2. Estrutura Completa da Página Apoie (Mobile)

A seguir, a especificação detalhada de cada seção.

---

# 2.1 Header (Topo)

* **Requisito:** Reutilizar integralmente o componente `<HeaderMobile />`.
* **Navegação:** Garantir que a opção "Apoie" no menu aponte para o link atual (`/apoie`), indicando estado ativo se necessário.

---

# 2.2 Hero Section (Imagem Simples)

* **Layout:** Centralizado.
* **Imagem:** 
    * Caminho da imagem:  `/assents/images/apoie-hero.png`
    * Dimensões: 300px (largura) x 256px (altura).
    * Comportamento: Responsivo, centralizado.
    * Margem: Ajustar espaçamento do topo (considerar header fixo).

---

# 2.3 Seção de Navegação ("Você já é parte do futuro...")

Esta seção funciona como um índice para as outras partes da página.

* **Container:** Fundo Branco, Padding padrão.
* **Espaçamento Topo:** `mt-[8px]` (do subtítulo para o título).

### **Tipografia**
* **Título:**
    * Texto: "Você já é parte <br>
     do futuro dos <br>
    jovens"
    * Estilo: `text-[36px]`, Bold, Cor `#003870`, Centralizado.
* **Subtítulo:**
    * Texto: "Escolha como quer impulsionar <br>
     essa transformação"
    * Estilo: `text-[16px]`, Regular, Cor `#6B6D6E`, Centralizado.
    * Margem Topo: `mt-2` (aprox 8px).

### **Botões de Navegação (Menu)**
* **Layout:** Flex Column, centralizado, `gap-[24px]`.
* **Estilo Padrão dos Botões:**
    * Dimensões: 300px (largura) x 54px (altura).
    * Cor de Fundo: Verde `#25B957`.
    * Texto: Branco, `text-[15px]`, ExtraBold.
    * Borda: Arredondada (seguir padrão do projeto, ex: `rounded-full` ou `rounded-[10px]`).

* **Lista de Botões e Ações (Âncoras):**
    1. **"Quero ser doador(a)"** → Scroll para ID `#transforme`.
    2. **"Quero ser mentor(a)"** → Scroll para ID `#mentor`.
    3. **"Quero ser empregar jovens"** → Scroll para ID `#invista`.
    4. **"Quero ser empresa patrocinadora"** → Scroll para ID `#parceiro`.

---

# 2.4 Seção "Transforme a vida de um jovem"
**ID para âncora:** `transforme`

* **Container:**
    * Dimensões: `w-full h-[450px]` (ou min-h).
    * Background: Imagem (`object-cover`).
    * Overlay: Necessário overlay escuro para garantir leitura do texto branco? (Verificar imagem, caso contrário aplicar `bg-black/40`).
    * Layout: Flex Column, `justify-center items-center`, `text-center`.

### **Imagem (bg)**
    * Caminho da imagem: `/assents/images/apoie-transforme-bg.png` 

### **Conteúdo (Sobre a Imagem)**
* **Título:**
    * Texto: "Transforme a vida de um jovem"
    * Estilo: `text-[32px]`, Bold, Branco.
* **Subtítulo:**
    * Texto: "A sua doação impulsiona a <br>
    carreira de um jovem através <br>
    do acesso à educação e <br>
    empregabilidade"
    * Estilo: `text-[15px]`, Regular, Branco.
    * Margem Topo: `mt-[20px]`.

### **Botões de Ação**
* **Layout:** Flex Column (ou Row se couber, mas o padrão mobile sugere coluna ou row com quebra), `gap-[32px]`.
* **Estilo Padrão:**
    * Dimensões: 250px x 48px.
    * Fundo: Transparente.
    * Borda: 1px sólida Branca (`border border-white`).
    * Arredondamento: `rounded-[50px]`.
    * Texto: `text-[16px]`, Bold, Branco.

* **Botões:**
    1. **"Doação Pontual"** → Scroll para ID `#doacao-pontual`.
    2. **"Doação Recorrente"** → Scroll para ID `#doacao-recorrente`.

---

# 2.5 Seção "Doação Pontual"
**ID para âncora:** `doacao-pontual`

* **Alinhamento:** Centralizado.

### **Título com Efeito Grifado (Amarelo)**
* **Texto:** "Doação Pontual"
* **Estilo:**
    * Cor Texto: `#003870`.
    * Fonte: `text-[48px]`, Bold.
    * **Efeito:** Fundo `#FCC41F` aplicado ao texto (inline).
* **Subtítulo:**
    * Texto: "(sem benefícios de pessoas físicas)"
    * Estilo: `text-[15px]`, Cor `#6B6D6E`.

### **Grade de Botões**
* **Layout:** Flex Column, itens centralizados.
* **Botão Destaque (1):**
    * Texto: "Doe **R$50,00**" (Valor em Bold).
    * Dimensões: 300px x 65px.
    * Cor: Amarelo `#FCC41F`.
    * Texto Cor: Branco.
    * Fonte: `text-[24px]`.
* **Botões Padrão (2, 3, 4):**
    * Espaçamento entre eles: `gap-[20px]`.
    * Dimensões: 300px x 59px.
    * Cor: Azul `#003870`.
    * Texto Cor: Branco.
    * Conteúdo:
        * "Doe **R$100,00**"
        * "Doe **R$200,00**"
        * "Doe **R$500,00**"

---

# 2.6 Seção "Doação Recorrente"
**ID para âncora:** `doacao-recorrente`

* **Alinhamento:** Centralizado.

### **Título com Efeito Grifado (Verde)**
* **Texto:** "Doação Recorrente"
* **Estilo:**
    * Cor Texto: `#003870`.
    * Fonte: `text-[48px]`, Bold.
    * **Efeito:** Fundo `#25B957` aplicado ao texto.
* **Subtítulo:**
    * Texto: "(doações anuais, de pessoas <br>
     físicas, com benefícios)"
    * Estilo: `text-[15px]`, Cor `#6B6D6E`.

### **Grade de Botões**
* **Layout:** Flex Column, itens centralizados, `gap-[20px]`.
* **Botão Destaque (1):**
    * Texto: "**Pulse +1** (R$ 200/mês)"
    * Dimensões: 300px x 90px.
    * Cor: Verde `#25B957`.
    * Texto: Branco, `text-[16px]`.
* **Botões Padrão (2, 3, 4, 5):**
    * Dimensões: 300px x 83px.
    * Cor: Azul `#003870`.
    * Texto: Branco.
    * **Links:**
        * "**Pulse +3** (R$ 600/mês)" → `https://app.cobrefacil.com.br/link-de-pagamento/PQRME31J3GG5NV20Z564`
        * "**Pulse +5** (R$ 1000/mês)" → `https://app.cobrefacil.com.br/link-de-pagamento/V4X2W70N51EED9MLDORG`
        * "**Pulse +10** (R$ 2000/mês)" → `https://app.cobrefacil.com.br/link-de-pagamento/YL6ZOVXN47E3ENGP4KR0`
        * "**Outro Valor**" → `#`

---

# 2.7 Seção "Mentor Voluntário"
**ID para âncora:** `mentor`

* **Espaçamento Topo:** `mt-[80px]` da seção anterior.
* **Layout:** Coluna única, centralizado.

### **Conteúdo**
* **Título:**
    * Texto: "Impulsione a <br>
     carreira de <br>
     um jovem <br>
     como mentor <br>
     voluntário"
    * Estilo: `text-[36px]`, Bold, Cor `#003870`, texto justificado a esquerda.
* **Botão de Ação:**
    * Texto: "Faça sua pré-inscrição"
    * Dimensões: 245px x 48px.
    * Estilo: Fundo transparente, Borda 1px sólida `#003870`, `rounded-[50px]`.
    * Fonte: `text-[16px]`, Bold, Cor `#003870`.
    * Margem Topo: `mt-[40px]` (distância do título).
    * Link: `https://mailchi.mp/pulsemais/mentores-turma3`

---

# 2.8 Seção "Invista no futuro de jovens"
**ID para âncora:** `invista`

* **Espaçamento Topo:** `mt-[70px]`.
* **Container:**
    * Dimensões: `w-full h-[530px]`.
    * Background: Imagem (`object-cover`).
    * Layout: Flex Column, Centralizado.

### **Conteúdo (Texto Branco)**
* **Título:**
    * Texto: "Invista no futuro de jovens"
    * Estilo: `text-[36px]`, Bold, Branco, Centralizado.
* **Subtítulo:**
    * Texto: "Impulsione jovens e fortaleça <br>
    sua cultura, responsabilidade <br> 
    social, lideranças e <br>
    capacidade de atrair talentos <br>
    que impulsionam resultados."
    * Estilo: `text-[15px]`, Regular, Branco.
    * Margem Topo: `mt-[20px]`.

### **Botões de Ação**
* **Layout:** Flex Column, `gap-[30px]`.
* **Estilo Padrão:**
    * Dimensões: 245px x 48px.
    * Fundo: Transparente, Borda 1px Branca, `rounded-[50px]`.
    * Texto: `text-[15px]`, Bold, Branco.
* **Links:**
    1. **"Empregue jovens talentos"** → `http://wa.me/5511996250844`
    2. **"Invista na Pulse Mais"** → `#`

---

# 2.9 Seção "Torne-se nosso parceiro"
**ID para âncora:** `parceiro`

* **Requisito:** Reutilizar integralmente o componente da Home (Mobile).

---

# 2.10 Footer (Rodapé)

* **Requisito:** Reutilizar o componente `<FooterMobile />`.
* **Navegação:** Verificar link "Apoie".
