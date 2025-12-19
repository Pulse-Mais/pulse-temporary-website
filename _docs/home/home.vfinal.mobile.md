# Documentação Técnica — Home (Mobile First Design)  

**Projeto:** Pulse Mais — Página Home (Mobile)  
**Tecnologia:** Next.js + Tailwind CSS  
**Metodologia:** Mobile First Design  
**Objetivo:** Documentar detalhadamente a tela de Home (versão mobile), para envio ao agente Cursor e implementação fiel ao layout.  

---

# 0. Layout em Anexo
Os layouts do mobile estão printados em "M ABA 1.png". Siga a interface do layout para execução da home.

# 1. Diretrizes Gerais de Design

## 1.1 Identidade Visual

* **Fonte:** Poppins (todas as variações)
* **Cores principais:**

  * Azul primário: `#003870`
  * Amarelo:`#FCC41F`
  * Verde: `#25B957`
  * Fundo: `#F5F5F5`

## 1.2 Princípios Mobile First

* Toda a estrutura, espaçamentos, tipografia e componentes devem ser desenvolvidos **primeiro** para mobile.
* Breakpoints desktop só devem ser aplicados após 100% da experiência mobile concluída.
* Componentes reutilizáveis (menu, footer, botões, cards de sessão) devem ser criados como **design system interno mínimo**.

## 1.3 Componentização Base (Next.js)

Criar os seguintes componentes em `/components`:

* `HeaderMobile.tsx`
* `MenuMobile.tsx`
* `Carousel.tsx`
* `SectionTitle.tsx`
* `SectionText.tsx`
* `CTAButton.tsx`
* `Accordion.tsx`
* `ExperienceCard.tsx`
* `Footer.tsx`

## 1.4 Caminho dos arquivos da página
**Logo Header** | `/assents/logos/pulse-logo-header.svg` | Logo colorida para fundo branco |
| **Hero Background** | `/assents/youngers/hero-young-man.jpg` | Foto do jovem com microfone (Background Cover) |
| **Decoration (Outline)**| `/assents/brand/plus-amarelo.svg` | Elemento de cruz (contorno laranja) |
| **Decoration (Solid)** | `/assents/brand/plus-verde.svg` | Elemento de cruz (preenchido verde/branco) |
| **Footer Wave** | `/assents/backgrounds/footer-wave.svg` | Onda colorida no rodapé |
| **Social Icons** | `/assents/brand/icon-instagram.svg` (etc) | Ícones do instagram |
| **Social Icons** | `/assents/brand/icon-linkedin.svg` (etc) | Ícones do linkedin |
| **Drop Icon** | `/assents/brand/drop-icon.svg` | Ícones do drop ao clicar na opção |



---

# 2. Estrutura Completa da Home

A seguir, toda a especificação da página, em ordem exata de leitura mobile.

---

# 2.1 Header (Topo)

* **Referência Visual:** Frame Header (Figma)
* **Estrutura (Tailwind):**
    * Container Principal: `fixed top-0 w-full h-[124px] bg-white z-50 flex justify-between items-start`
    * **Nota de Layout:** Usar `items-start` pois os elementos têm margens superiores definidas (42px) em vez de estarem centralizados verticalmente.

### **Logo Pulse Mais**
* **Arquivo:** `/assents/logos/pulse-logo-header.svg`
* **Dimensões:** 159px (largura) x 50px (altura) (`w-[159px] h-[50px]`)
* **Posicionamento:**
    * Margem Esquerda: 30px (`ml-[30px]`)
    * Margem Topo: 42px (`mt-[42px]`)

### **Menu Hambúrguer (Botão)**
* **Localização:** Canto superior direito.
* **Posicionamento:**
    * Margem Direita: 34px (`mr-[34px]`) (Interpretado como distância da borda direita).
    * Margem Topo: 42px (`mt-[42px]`) (Para alinhar com a logo).
* **Estrutura do Ícone:**
    * **Container:** Flex Column (`flex flex-col`), Gap 10px (`gap-[10px]`).
    * **Barras (3x):**
        * Dimensão: 50px x 10px (`w-[50px] h-[10px]`).
        * Cor: Azul `#003870` (`bg-[#003870]`).
        * Arredondamento: 10px (`rounded-[10px]`).

### **Comportamento do Menu (Drawer)**
* **Overlay:** Cobrir 100% da tela.
* **Animação:** Deslizar da direita.
* **Itens de Navegação:** Início, Sobre, Apoie, Transparência, Contato.
* **Botão Fechar (X):**
    * Deve seguir a mesma estilização visual (espessura e cor `#003870`) das barras do menu.
    * Posicionado no topo direito do Drawer aberto.

### **Componentização e Arquivos**
* **Barra Fixa:** Deve ser desenvolvida no arquivo `src/components/HeaderMobile.tsx`.
* **Interação:** O `HeaderMobile` deve importar o `MenuMobile` e controlar seu estado de abertura (`isOpen`).

---

# 2.2 Hero Section (Carousel/Imagem)

* **Referência Visual:** Frame Hero (Figma) e `M ABA 1.png`
* **Estrutura do Container:**
    * Dimensões: Largura 100% (`w-full`) x Altura Fixa 482px (`h-[482px]`).
    * Posicionamento: `relative` (para conter a imagem de fundo e o texto sobreposto).

### **Background (Imagem Já Tratada)**
* **Arquivo:** `/assents/youngers/hero-young-man.jpg`
* **Nota Importante:** A imagem já foi exportada com o filtro azul aplicado. **Não adicionar overlay via CSS** para não escurecer demais.
* **Comportamento:** `object-cover` (A imagem deve cobrir toda a área sem distorcer).
* **Lógica de Renderização:**
    * Se array de imagens tiver 1 item: Renderizar imagem estática (`<Image />`).
    * Se array > 1: Renderizar componente de Carrossel automático.

### **Título (Chamada Principal)**
* **Texto:** "Venha ser um jovem Pulsante"
* **Tipografia (Tailwind):**
    * Tamanho: 32px (`text-[32px]`).
    * Peso: ExtraBold (`font-extrabold`).
    * Cor: Amarelo `#FCC41F` (`text-[#FCC41F]`).
* **Alinhamento:** Centralizado (`text-center`).
* **Espaçamento:**
    * Padding Superior: **122px** (`pt-[122px]`).
    * *Nota:* Usamos padding no container para posicionar o texto verticalmente.

### **Descrição**
* **Texto:** "Tem entre 17 à 26 anos? Este pode ser o começo da sua jornada no mundo da tecnologia."
* **Tipografia:**
    * Tamanho: 16px (`text-[16px]`).
    * Peso: Regular (`font-normal`).
    * Cor: Branco (`text-[#FFFFFF]`).
* **Espaçamento:** Margem Topo 8px (`mt-[8px]`).
* **Alinhamento:** Centralizado (`text-center` com `max-w` se necessário).

### **Botão CTA**
* **Componente:** `CTAButton.tsx`
* **Dimensões:** 300px x 48px (`w-[300px] h-[48px]`).
* **Estilo Base (Default):**
    * Background: Transparente (`bg-transparent`).
    * Borda: Branca com 50% de opacidade (`border border-white/50`).
    * Arredondamento: 50px (`rounded-[50px]`).
* **Tipografia:**
    * Cor do Texto: Amarelo `#FCC41F` (`text-[#FCC41F]`).
    * Tamanho: 15px, Bold (`text-[15px] font-bold`).
* **Estado Hover:**
    * Background muda para Verde `#33B458` (`hover:bg-[#33B458]`).
* **Posicionamento:**
    * Margem Topo: 24px (`mt-[24px]`).
    * Alinhamento: Centralizado horizontalmente (`mx-auto`).

# 2.3 Seção "Quem Somos"

* **Referência Visual:** Frame "Quem Somos" (Figma)
* **Estrutura do Container:**
    * Background: Branco (`bg-white`).
    * Posicionamento: `relative` (Importante para segurar os elementos decorativos absolutos).
    * Padding Superior: 48px (`pt-[48px]`).
    * Padding Inferior: 48px (Para dar respiro antes da próxima seção).

### **Elementos Decorativos (Shapes)**
Os elementos devem estar posicionados de forma absoluta em relação ao container da seção, alinhados à direita.

1.  **Plus Amarelo (Outline)**
    * **Arquivo:** `/assents/brand/plus-amarelo.svg`
    * **Dimensões:** 91px x 127px (`w-[91px] h-[127px]`).
    * **Posição:**
        * Absoluto à Direita: `absolute right-0`.
        * Topo: 26px (`top-[26px]`).
        * *Nota:* O SVG deve estar ancorado na borda direita.

2.  **Plus Verde (Outline Pequeno)**
    * **Arquivo:** `/assents/brand/plus-verde.svg`
    * **Dimensões:** 46px x 64px (`w-[46px] h-[64px]`).
    * **Posição:**
        * Absoluto à Direita: `absolute right-0`.
        * Topo: Calculado logo abaixo do amarelo (aprox `top-[160px]`).

### **Título**
* **Texto:** "Quem somos"
* **Tipografia:**
    * Tamanho: 16px (`text-[16px]`).
    * Peso: Bold (`font-bold`).
    * Cor: Azul `#003870` (`text-[#003870]`).
* **Alinhamento:** Esquerda (`text-left`).
* **Margem Lateral:** 30px (`ml-[30px]`) (Alinhado com o padrão da página).

### **Descrição**
* **Texto:** "A Pulse Mais é uma organização sem fins lucrativos, fundada em 2022, que tem o propósito de impulsionar a carreira de jovens talentos de baixa renda no mundo profissional e em tecnologia."
* **Tipografia:**
    * Tamanho: 20px (`text-[20px]`).
    * Peso: Light (`font-light`).
    * Cor: Cinza `#6B6D6E` (`text-[#6B6D6E]`).
* **Layout da Caixa de Texto:**
    * Largura Máxima: 268px (`max-w-[268px]`).
    * *Motivo:* Limitar a largura para não sobrepor os elementos "Plus" à direita.
    * Margem Topo: 32px (`mt-[32px]`).
    * Margem Lateral: 30px (`ml-[30px]`).

### **Botão CTA**
* **Componente:** `CTAButton.tsx` (Variante Outline).
* **Texto:** "Saiba mais"
* **Dimensões:** 300px x 48px (`w-[300px] h-[48px]`).
* **Estilo (Diferente do Hero):**
    * Background: Branco/Transparente.
    * Borda: Azul `#003870` (`border border-[#003870]`).
    * Texto: Azul `#003870`, 16px Bold (`text-[#003870] font-bold`).
* **Estado Hover:**
    * Background: Verde `#33B458` (`hover:bg-[#33B458]`).
    * Texto: Branco (`hover:text-white`).
    * Borda: Verde `#33B458` (`hover:border-[#33B458]`).
* **Posicionamento:**
    * Margem Topo: 48px (Para dar respiro do texto).
    * Alinhamento: Centralizado horizontalmente (`mx-auto`).

---

# 2.4 Seção "É jovem? Saiba como participar"

* **Dimensões Gerais:**
    * Largura: 100% da viewport.
    * Altura Mínima: 1000px (`min-h-[1000px]`).

### **Background e Geometria (Diagonal)**
* **Cor de Fundo:** Azul Institucional (`bg-[#0F2849]` - Verificar Hex exato do background azul nas imagens).
* **Recorte Diagonal:**
    * Utilizar `clip-path` para criar a inclinação nas bordas superior e inferior.
    * **Sugestão CSS:** `clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px));`
    * **Padding:** Adicionar `padding-top: 100px` e `padding-bottom: 100px` para o conteúdo não ser cortado.

### **Título da Seção**
* **Posicionamento:** Margem Topo **89px** (relativo ao início do container azul).
* **Margem Esquerda:** 30px (padrão do layout).
* **Tipografia:**
    * **Linha 1:** "É jovem?" -> Fonte 40px, Bold, Cor Branca (`#FFFFFF`).
    * **Linha 2:** "Saiba como participar" -> Fonte 24px, Medium, Cor Branca (`#FFFFFF`).
    * *Nota:* O texto deve ser branco para contrastar com o fundo azul escuro.

---

# 2.5 Cards de Experiências (Acordeões)

* **Estrutura Técnica:** Criar um componente reutilizável `AccordionItem` e renderizar uma lista de dados via `.map()`.
* **Layout da Lista:**
    * Alinhamento: Centralizado horizontalmente (`flex flex-col items-center`).
    * **Espaçamento (Gap):**
        * Entre cards fechados: **25px**.
        * Quando um card abre: O conteúdo deve empurrar o card de baixo naturalmente (Layout fluido).

### **Componente: `AccordionItem`**

**1. Header (Barra Fechada)**
* **Dimensões:** Largura 305px x Altura 76px.
* **Estilo:**
    * Background: Verde (`bg-[#28A745]`).
    * Bordas: Arredondadas 15px (`rounded-[15px]`).
    * Alinhamento: Flex Row, itens centralizados verticalmente.
* **Título do Card:**
    * Fonte: 18px, Bold, Cor Branca (`#FFFFFF`).
    * Margem Esquerda: Ajustar para centralizar visualmente ou alinhar à esquerda.
* **Ícone (Drop Icon):**
    * Arquivo: `/assents/brand/drop-icon.svg`.
    * Tamanho: 25x25px.
    * Posição: Alinhado à direita.
    * **Animação de Rotação:**
        * Estado Fechado: Rotação 90° (`rotate-90`).
        * Estado Aberto: Rotação -90° (`-rotate-90`).
        * Transição: `duration-300 ease-in-out`.

**2. Conteúdo Expandido (Body)**
* **Dimensões:** Largura da caixa de texto aprox. 287px.
* **Estilo:**
    * Cor do Texto: Branco (`#FFFFFF`).
    * Fonte: 15px, Regular.
    * Alinhamento: Esquerda.
    * Margem Topo: 9px (distância do header).
    * Margem Inferior: 36px (respiro para o próximo card).
* **Formatação de Texto:**
    * Palavras-chave ("Formato:", "Benefícios:", "Dedicação:") devem ser **Bold**.
    * O restante do texto deve respeitar as quebras de linha.

### **Dados para Renderização (Conteúdo dos Cards)**

**Card 1:**
* Título: "Experiências de Mentorias de Curta Duração"
* Conteúdo:
  > **Formato:** Online ou Presencial em São Paulo
  > **Benefícios:**
  > - Clareza sobre temas de carreira
  > - Rede profissional ampliada
  > - Aumento de repertório

**Card 2:**
* Título: "Eventos em Empresas de Tecnologia"
* Conteúdo:
  > **Formato:** Presencial em São Paulo
  > **Benefícios:**
  > - Palestras inspiradoras
  > - Conheça profissionais do mercado
  > - Novos horizontes de carreira

**Card 3:**
* Título: "Programa Pulse Mais"
* Conteúdo:
  > **Formato:** Online ou Híbrido (Presencial/Online)
  > **Dedicação:** 6 meses
  > **Benefícios:**
  > - Formação técnica e comportamental completa
  > - Computador/Notebook gratuito
  > - Vagas de emprego e bolsas de estudos para faculdade

**Card 4:**
* Título: "Programa de Mentoria"
* Conteúdo:
  > **Formato:** (online/híbrido/presencial)
  > **Dedicação:** 4 meses
  > **Benefícios:**
  > - Direcionamento de carreira individualizado
  > - Preparação para o mercado de trabalho
  > - Vagas de emprego e bolsas de estudos para faculdade

---

### **Botões Finais (Footer da Seção)**

**Botão 1: "Cadastre-se"**
* **Componente:** `CTAButton.tsx`.
* **Dimensões:** 258px x 48px.
* **Margem Topo:** 62px (após o último card).
* **Estilo:**
    * Background: Amarelo (`bg-[#FCC41F]`).
    * Texto: "Cadastre-se", Branco (`text-white`), 16px, Bold.
    * Alinhamento: Centralizado na tela.

**Botão 2: "Torne nosso Parceiro"**
* **Componente:** `CTAButton.tsx`.
* **Dimensões:** 258px x 48px.
* **Margem Topo:** 13px (distância do botão de cima).
* **Estilo:**
    * Background: Verde (`bg-[#25B957]`).
    * Texto: "Torne nosso Parceiro", Branco (`text-white`), 16px, Bold.
    * Alinhamento: Centralizado na tela.
---

# 2.6 Torne-se nosso parceiro

* **Estrutura do Container:**
    * Background: Branco (`bg-[#FFFFFF]`).
    * Posicionamento: `relative` (Importante para os shapes).
    * Padding Top: 57px (Conforme especificado).
    * Overflow: `overflow-hidden` (Para evitar rolagem horizontal pelos shapes cortados).

### **Título Principal**

### **Propriedades Tipográficas**
* **Fonte:** 48px (`text-[48px]`).
* **Peso:** Bold (`font-bold`).
* **Cor:** `#486284`.
* **Alinhamento:** Centro (`text-center`).

### **Layout da Caixa de Texto**
* **Dimensões:** 300px (largura) x 156px (altura).
* **Margem:** Centralizado horizontalmente (`mx-auto`).
* **Z-Index:** `relative z-10` (Para ficar acima dos shapes).


### **Elementos Decorativos (Shapes Laterais)**
Os shapes devem flutuar nas laterais.
* **Comportamento Geral:** `position: absolute`, `z-index: 0` (atrás do texto), `pointer-events-none` (não clicáveis).

**1. Plus Amarelo (Topo Direito)**
* **Arquivo:** `/assents/brand/plus-amarelo.svg` (Outline).
* **Posição:**
    * Colado na direita: `right-0`.
    * Alinhamento vertical: Topo da seção (`top-0` ou `top-10` - ajustar visualmente para ficar perto da palavra "Torne-se").
    * Transformação: `translate-x-[30%]` (Para dar o efeito de "cortado", movendo metade dele para fora da tela).

**2. Plus Verde (Base Esquerda)**
* **Arquivo:** `/assents/brand/plus-verde.svg` (Outline).
* **Posição:**
    * Colado na esquerda: `left-0`.
    * Alinhamento vertical: Alinhado com o final do título/início do botão (aprox. `bottom-1/3` ou `top-[60%]`).
    * Transformação: ` -translate-x-[30%]` (Para mover levemente para fora da tela à esquerda).
---

### **Button - Torne nosso Parceiro**

* **Texto:** "Torne nosso Parceiro".
* **Dimensões:** 300px x 48px (`w-[300px] h-[48px]`).
* **Posicionamento:**
    * Margem Top: 30px (Visual).
    * Alinhamento: Centralizado (`mx-auto`).
    * Z-Index: `relative z-10`.
* **Estilo (Estado Normal):**
    * Background: `#F5F5F5` (Cinza claro).
    * Texto: `#003870` (Azul), 16px, Regular.
    * Borda: 1px sólida, cor `#003870`.
    * Arredondamento: 50px (`rounded-[50px]`).
* **Estilo (Hover):**
    * Background: `#33B458` (Verde).
    * Texto: `#FFFFFF` (Branco).
    * Borda: `#33B458` (Verde).

---

# 2.7 Footer (Rodapé - Componentizar)

* **Referência Visual:** `image_be9418.png`.
* **Estrutura do Container:**
    * Background: Branco (`bg-white`).
    * Posicionamento: `relative` (Para ancorar a onda no fundo).
    * Padding Inferior: Generoso para acomodar a onda (ex: `pb-[100px]`).
    * Overflow: `overflow-hidden`.

### **Quadrante 1 — Identidade e Social**
Alinhamento geral: Esquerda (`items-start` no Flex container), com margem lateral padrão (ex: `pl-[30px]`).

**1. Logo Pulse**
* **Arquivo:** `/assents/logos/pulse-logo-header.svg`.
* **Dimensões:** 195px x 62px (`w-[195px] h-[62px]`).
* **Espaçamento:** Margem Top 63px (`mt-[63px]`).

**2. Redes Sociais**
* **Layout:** Flex Row, Gap 15px.
* **Espaçamento:** Margem Top 30px (`mt-[30px]`) da logo.
* **Ícones:**
    * **Instagram:**
        * Arquivo: `/assents/brand/icon-instagram.svg`.
        * Ação: Link para `https://www.instagram.com/pulsemaisong/`.
    * **LinkedIn:**
        * Arquivo: `/assents/brand/icon-linkedin.svg`.
        * Ação: Link para `https://www.linkedin.com/company/pulsemaisong/`.
    * *Nota:* Dimensões de cada ícone: 50x50px.

---

### **Quadrante 2 — Contato e Legal**

**1. Chamada "Mande um email"**
* **Texto:** "Mande um email".
* **Tipografia:** 20px, Bold, Cor `#003870`.
* **Espaçamento:** Margem Top 30px.
* **Alinhamento:** Esquerda (alinhado com a logo).

**2. Input de Email**
* **Dimensões:** 300px (largura) x 50px (altura).
* **Estilo:**
    * Borda: 1px sólida, cor `#D9D9D9`.
    * Background: Branco/Transparente.
    * Arredondamento: Ajustar conforme design system (ex: `rounded-md`).
* **Posicionamento:** Centralizado na tela (`mx-auto`).

**3. Botão Enviar**
* **Dimensões:** 126px x 33px.
* **Estilo:**
    * Background: `#003870`.
    * Texto: "Enviar", Branco, Centralizado no botão.
    * Arredondamento: Padrão do botão (`rounded-full` ou conforme input).
* **Posicionamento:**
    * Alinhamento: Esquerda (alinhado com o início do input ou margem esquerda da página).
    * Margem Top: Pequeno espaçamento do input (ex: `mt-4`).

**4. CNPJ**
* **Texto:** "CNPJ: 48.621.188/0001-11".
* **Tipografia:** 18px, Regular.
* **Cor:** `#D9D9D9` (⚠️ **Atenção:** Verificar contraste no fundo branco. Sugestão: `#6B6D6E`).
* **Posicionamento:**
    * Margem Top: 54px (do botão).
    * Alinhamento: Centro da página (`text-center mx-auto`).
    * Z-Index: `relative z-10` (Para ficar acima da onda).

### **Elemento Decorativo (Footer Wave)**
* **Arquivo:** `/assents/backgrounds/footer-wave.svg`.
* **Dimensões:** 165px x 355px (`w-[165px] h-[355px]`).
* **Posicionamento:**
    * Absoluto no canto inferior direito (`absolute bottom-0 right-0`).
    * Z-Index: 0.

---

# 3. Arquitetura de Pastas Recomendada

```
src/
  components/
    HeaderMobile.tsx
    MenuMobile.tsx
    Carousel.tsx
    CTAButton.tsx
    Accordion.tsx
    ExperienceCard.tsx
    Footer.tsx
  app/
    page.tsx   // Home
  styles/
    globals.css
```

---

# 4. Testes End-to-End (Cypress)

Objetivo: garantir que a Home funciona corretamente em produção.

## 4.1 Testes obrigatórios

### **1. Header e Menu Mobile**

* Deve abrir e fechar o menu corretamente.
* Todas as opções devem estar visíveis.

### **2. Carrossel**

* Se 1 imagem → permanece estática.
* Se mais de 1 → avança automaticamente.

### **3. CTAs**

* Botões devem ser clicáveis e redirecionar.
* Devem renderizar com o estilo correto.

### **4. Acordeões**

* Clique → abre área oculta.
* Clique novamente → fecha.

### **5. Footer**

* Ícones abrem links corretos.
* E-mail redireciona para /contato.

---

# 5. Considerações Finais

* Priorizar **responsividade mobile first**.
* Componentes devem ser totalmente reaproveitáveis nas futuras páginas.
* A documentação foi expandida para uso direto pelo agente Cursor.

---

**Fim do documento.**
