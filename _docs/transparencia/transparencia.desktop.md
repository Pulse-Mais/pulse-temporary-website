# Documentação Técnica — Transparência (Desktop Version)

**Projeto:** Pulse Mais — Página Transparência (Desktop)
**Tecnologia:** Next.js + Tailwind CSS
**Metodologia:** Desktop Adaptation (Responsive from Mobile)
**Objetivo:** Documentar detalhadamente a tela de Transparência (versão Desktop), para envio ao agente Cursor e implementação fiel ao layout.

---

# 1. Diretrizes Gerais de Design (Desktop)

## 1.1 Breakpoints e Layout
* **Breakpoint Principal:** O layout desktop deve ser ativado a partir de `md: (768px)` ou `lg: (1024px)`.
* **Container Central:** O conteúdo principal deve estar centralizado (ex: `max-w-[1216px]` ou `max-w-[1440px] mx-auto`).
* **Visibilidade:** Esta estrutura deve conter a classe `hidden md:block`.

## 1.2 Tipografia e Cores
* **Fonte:** Poppins.
* **Cores:**
  * Azul Primário: `#003870`
  * Cinza Texto: `#6B6D6E`
  * Verde Hover: `#33B458`
  * Branco: `#FFFFFF`

## 1.3 Caminho dos Arquivos (Assets)
| Asset | Caminho Sugerido | Descrição |
| :--- | :--- | :--- |
| **Hero Image** | `/assents/images/transparencia-hero-desktop.png` | 1200x465px |
| **BG Card Relatório** | `/assents/images/pilar-img.png` | Imagem de fundo dos cards (Mesma da Home/Pilares) |

---

# 2. Estrutura Completa da Página Transparência (Desktop)

## 2.1 Header Desktop
* **Requisito:** Aproveitar o componente `HeaderDesktop` existente.
* **Navegação:** Garantir que o link "Transparência" esteja ativo.

---

## 2.2 Hero Section
* **Layout:** Imagem única centralizada.
* **Dimensões:** 1200px (largura) x 465px (altura).
* **Caminho:** `/assents/images/transparencia-hero-desktop.png`.
* **Estilo:** `object-cover`, `rounded-[24px]` (sugestão para manter padrão desktop), centralizado (`mx-auto`).

---

## 2.3 Seção "Relatórios de Atividades"

* **Espaçamento:**
  * Distância do Hero: 90px (`mt-[90px]`).
  * Distância Título -> Subtítulo: 30px.
  * Distância Subtítulo -> Cards: 60px (sugestão visual).

### **Textos**
* **Título:** "Relatórios de Atividades"
  * Estilo: 60px, Bold, Cor `#003870`, Centralizado.
* **Subtítulo:** "Acompanhe nossos resultados e prestação de contas"
  * Estilo: 32px, Regular, Cor `#6B6D6E`, Centralizado.

### **Cards de Relatório**
* **Layout:** Flex Row (Horizontal), centralizado, gap proporcional.
* **Dimensões do Card:** 373px x 259px.
* **Estilo do Card:**
  * Background: Imagem (referência "Pilares de Atuação" da Home).
  * Conteúdo Interno: Centralizado.
  * Texto do Ano: 62px, Bold, Branco (assumindo contraste com bg).
* **Link "Saiba Mais":**
  * Posicionado **abaixo** do card.
  * Estilo: 20px, Cor `#6B6D6E`, Sublinhado (`underline`).
  * Espaçamento do card: 16px.

### **Conteúdo e Links:**
1. **Card 1:** "2022-23" -> `https://heyzine.com/flip-book/32d3cb5076.html`
2. **Card 2:** "2024" -> `https://heyzine.com/flip-book/26394a3fa9.html`
3. **Card 3:** "2025 (em breve)" -> `#` (Texto "em breve" deve ser tratado visualmente para caber, ex: quebra de linha ou fonte menor se necessário).

---

## 2.4 Seção "Empresas Parceiras"

* **Espaçamento Topo:** 74px da seção anterior.
* **Título:** "Empresas Parceiras"
  * Estilo: 48px, Bold, Cor `#003870`, Centralizado.

### **Grid de Logos**
* **Container:** Centralizado (`max-w-[1216px]`).
* **Layout:** Grid de 3 colunas (`grid-cols-3`).
* **Gap:** 84px entre colunas e linhas.
* **Espaçamento Topo:** 50px do título.

### **Estilo do Card (Logo)**
* **Dimensões:** 343px x 232px.
* **Estilo:**
  * Borda arredondada: 25px (`rounded-[25px]`).
  * **Design Limpo:** Sem cor de fundo, sem borda, sem sombra.
  * Conteúdo: Imagem da logo centralizada (`object-contain`).

### **Lógica "Veja Mais"**
* **Comportamento:** Mostrar inicialmente apenas **6 logos** (2 linhas de 3).
* **Condicional:** Como há mais de 6 itens na lista, o botão "Veja mais" deve aparecer.
* **Ação:** Ao clicar, expandir para mostrar o restante.
* **Estilo do Botão:**
  * Dimensões: 184px x 66px.
  * Texto: "Veja mais", Centralizado.
  * Estado Normal: Fundo transparente, Borda 1px `#003870`, Texto `#003870`.
  * Estado Hover: Fundo `#33B458`, Texto Branco, Borda `#33B458`.
  * Margem Topo: 60px do grid.

### **Lista de Logos (Parceiros)**
```javascript
const partners = [
  { name: 'Partner 3', logo: '/assents/logos/magrini-logo.svg' },
  { name: 'Partner 4', logo: '/assents/logos/fiap-logo.svg' },
  { name: 'Partner 5', logo: '/assents/logos/adega-logo.svg' },
  // { name: 'Partner 6', logo: '/assents/logos/sap-logo.svg' }, // Comentado conforme origem
  { name: 'Partner 7', logo: '/assents/logos/pub-logo.svg' },
  { name: 'Partner 8', logo: '/assents/logos/alura-logo.svg' },
  { name: 'Partner 9', logo: '/assents/logos/logo-italo.svg' },
  { name: 'Partner 10', logo: '/assents/logos/c-levels-logo.svg' },
  { name: 'Partner 11', logo: '/assents/logos/fellipelli.svg' },
  { name: 'Partner 12', logo: '/assents/logos/italo-para.svg' } 
]
---

## 2.5 Seção "Empresas Patrocinadoras"

* **Reutilização:** Utilizar exatamente a mesma estrutura (Grid, Estilos, Lógica de "Veja Mais") da seção Parceiros.
* **Título:** "Empresas Patrocinadoras"
  * Estilo: 48px, Bold, `#003870`, Centralizado.
* **Lista de Logos:** Utilizar a mesma lista `sponsors` definida na versão mobile.

const sponsors = [
  { name: 'sponsor 1', logo: '/assents/logos/ClearIt.svg' },
  { name: 'sponsor 2', logo: '/assents/logos/clm.svg' },
  { name: 'sponsor 3', logo: '/assents/logos/simpress.svg' },
  { name: 'sponsor 4', logo: '/assents/logos/matza.svg' },
  { name: 'sponsor 5', logo: '/assents/logos/fellipelli.svg' },
  { name: 'sponsor 6', logo: '/assents/logos/StIt.svg' },
  { name: 'sponsor 7', logo: '/assents/logos/reclame-aqui.svg' }
]

---

## 2.6 Seção "Torne-se nosso parceiro" (Desktop)

* **Referência:** Reutilizar o componente da seção "Torne-se nosso parceiro" da página Home (**Versão Desktop**).
* **Características:**
  * Layout expandido horizontalmente.
  * Elementos decorativos (Shapes) posicionados para desktop.

---

## 2.7 Footer Desktop

* **Requisito:** Utilizar o componente `FooterDesktop` para manter a consistência em telas grandes.