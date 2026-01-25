# Documentação Técnica — Transparência (Mobile First Design)

**Projeto:** Pulse Mais — Página Transparência (Mobile)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Mobile First Design
**Objetivo:** Documentar detalhadamente a tela de "Transparência" (versão mobile), para envio ao agente Cursor e implementação fiel ao layout.

---

# 0. Layout e Referências
Esta documentação consolida os ajustes visuais, textos e comportamentos específicos para a versão mobile da página Transparência.

---

# 1. Diretrizes Gerais de Design

## 1.1 Identidade Visual (Página Transparência)
* **Fonte:** Poppins (todas as variações).
* **Cores Principais:**
  * Azul Primário: `#003870`
  * Verde Institucional: `#25B957`
  * Cinza Texto: `#6B6D6E`
  * Branco: `#FFFFFF`
  * **Gradiente Botões:** Linear de Azul (`#003870`) para Verde (`#25B957`).

## 1.2 Princípios Mobile First
* O layout deve ocupar **100% da largura da viewport** (`w-full overflow-x-hidden`).
* Breakpoint de visibilidade: Esta estrutura deve aparecer apenas em mobile (`md:hidden`).

## 1.3 Componentização Base
Reutilizar os seguintes componentes já existentes:
* `<HeaderMobile />`
* `<FooterMobile />`
* `<CTAButton />` (Para a seção "Torne-se parceiro")

## 1.4 Caminho dos Arquivos e Assets
| Elemento | Caminho Sugerido / Descrição |
| :--- | :--- |
| **Hero Image** | `/assents/images/transparencia-hero-mobile.png` (300x256) |
| **Logos** | Ver seção de Parceiros/Patrocinadores abaixo |

---

# 2. Estrutura Completa da Página Transparência (Mobile)

A seguir, a especificação detalhada de cada seção.

---

# 2.1 Header (Topo)

* **Requisito:** Reutilizar integralmente o componente `<HeaderMobile />`.
* **Navegação:** Garantir que a opção "Transparência" no menu aponte para o link atual (`/transparencia`), indicando estado ativo se necessário.

---

# 2.2 Hero Section (Imagem Simples)

* **Layout:** Centralizado.
* **Imagem:**
    * Dimensões: 300px (largura) x 256px (altura).
    * Comportamento: Responsivo, centralizado.
    * Margem: Ajustar espaçamento do topo (considerar header fixo).
    * Caminho da imagem: `/assents/images/transparencia-hero-mobile.png`

---

# 2.3 Seção "Relatórios de Atividades"

* **Alinhamento:** Centralizado.
* **Espaçamento Topo:** 43px (`mt-[43px]` a partir do Hero).

### **Tipografia**
* **Título:**
    * Texto: "Relatórios de Atividades"
    * Estilo: `text-[40px]`, Bold (`font-bold`), Cor `#003870`.
    * Alinhamento: Centralizado.
    * Quebra de linha: Aceitável se necessário, mas priorizar "Relatórios de" e "Atividades" em linhas separadas se o espaço pedir.
* **Subtítulo:**
    * Texto: "Acompanhe nossos resultados e prestação de contas"
    * Estilo: `text-[16px]`, Regular (`font-normal`), Cor `#6B6D6E`.
    * Margem Topo: 8px (`mt-[8px]`).

### **Botões de Relatório**
* **Layout:** Flex Column, `gap-[24px]` (sugestão de espaçamento entre botões, ajustar se necessário visualmente).
* **Margem da Seção:** Distância entre subtítulo e primeiro botão (sugestão `mt-[30px]`).
* **Estilo Padrão dos Botões:**
    * Dimensões: 300px (largura) x 64px (altura).
    * **Background:** Gradiente Linear (`bg-gradient-to-r from-[#003870] to-[#25B957]`).
    * Texto: Branco, `text-[32px]`, Bold (`font-bold`).
    * Borda: Arredondada (seguir padrão do projeto, ex: `rounded-full` ou `rounded-[10px]`).

* **Lista de Botões:**
    1. **"2022-23"** → Link: `#`
    2. **"2024"** → Link: `https://heyzine.com/flip-book/26394a3fa9.html`
    3. **"2025 (em breve)"** → Link: `#`

---

# 2.4 Seção "Empresas Parceiras"

* **Espaçamento Topo:** 74px (`mt-[74px]` a partir do último botão).
* **Alinhamento:** Centralizado.

### **Título**
* **Texto:** "Empresas Parceiras"
* **Estilo:** `text-[40px]`, Bold, Cor `#003870`.
* **Alinhamento:** Centralizado.

### **Grid de Logos**
* **Lógica de Layout:**
    * Máximo de 3 logos por linha.
    * Se houver menos de 3, devem ficar centralizados na linha.
    * Se passar de 3, quebrar linha.
    * **Implementação CSS Sugerida:** `flex flex-wrap justify-center gap-[12px]`.
* **Estilo do Container da Logo:**
    * Dimensões: 84px x 84px.
    * Borda: Arredondamento de 5px (`rounded-[5px]`).
    * Fundo: Branco ou transparente (depende do logo).
    * Comportamento: Logo centralizada dentro do quadrado (`object-contain`).
* **Espaçamento:** Distância entre linhas e colunas de 12px.
* **Margem Topo:** Sugestão `mt-[40px]` do título.

### **Lista de Logos (Assets)**
Utilizar o array abaixo para mapear os logos:

```javascript
[
  { name: 'Partner 3', logo: '/assents/logos/magrini-logo.svg' },
  { name: 'Partner 4', logo: '/assents/logos/fiap-logo.svg' },
  { name: 'Partner 5', logo: '/assents/logos/adega-logo.svg' },
  { name: 'Partner 6', logo: '/assents/logos/sap-logo.svg' },
  { name: 'Partner 7', logo: '/assents/logos/pub-logo.svg' },
  { name: 'Partner 8', logo: '/assents/logos/alura-logo.svg' },
  { name: 'Partner 9', logo: '/assents/logos/logo-italo.svg' }
]

## 2.5 Seção "Empresas Patrocinadoras"

* **Reutilização:** Utilizar exatamente o mesmo código/estilo da seção anterior ("Empresas Parceiras").
* **Título:** "Empresas Patrocinadoras"
    * **Tamanho:** 40px.
    * **Peso:** Bold.
    * **Cor:** `#003870`.
    * **Alinhamento:** Centralizado.
* **Grid:** Mesmo padrão (84x84px, Gap 12px, Max 3 por linha).

### **Lista de Logos (Patrocinadores)**
Utilizar este array para popular o grid desta seção:

``javascript
[
  { name: 'sponsor 1', logo: '/assents/logos/ClearIt.svg' },
  { name: 'sponsor 2', logo: '/assents/logos/clm.svg' },
  { name: 'sponsor 3', logo: '/assents/logos/simpress.svg' },
  { name: 'sponsor 4', logo: '/assents/logos/matza.svg' },
  { name: 'sponsor 5', logo: '/assents/logos/fellipelli.svg' },
  { name: 'sponsor 6', logo: '/assents/logos/StIt.svg' },
  { name: 'sponsor 7', logo: '/assents/logos/reclame-aqui.svg' }
]

### 2.6 Seção "Torne-se nosso parceiro"

* **Referência:** Reutilizar o componente da seção "Torne-se nosso parceiro" da página Home (Mobile).
* **Características:**
    * **Título:** "Torne-se nosso parceiro." (48px, Bold, `#486284`).
    * **Decoração:** Plus Amarelo (Topo Direito) e Plus Verde (Esquerda).
    * **Botão:** CTA "Saiba Mais".

---

### 2.7 Footer (Rodapé)

* **Requisito:** Utilizar o componente `<FooterMobile />` ao final da página para manter o padrão do site.