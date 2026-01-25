# Documentação Técnica — Home (Mobile First Design)  

**Projeto:** Pulse Mais — Página Home (Mobile)  
**Tecnologia:** Next.js + Tailwind CSS  
**Metodologia:** Mobile First Design  
**Objetivo:** Documentar detalhadamente a tela de Home (versão mobile), para envio ao agente Cursor e implementação fiel ao layout.  

---

# 0. Layout em Anexo
Os layouts do mobile estão printados em [home1.png](home1.png.png) e [home2](home2.png). Siga a interface do layout para execução da home.

# 1. Diretrizes Gerais de Design

## 1.1 Identidade Visual

* **Fonte:** Poppins (todas as variações)
* **Cores principais:**

  * Azul primário: `#486284`
  * Cinza claro (elementos e ícones): `#EEF2F6`
  * Fundo: `#FFFFFF`

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

---

# 2. Estrutura Completa da Home

A seguir, toda a especificação da página, em ordem exata de leitura mobile.

---

# 2.1 Header (Topo)

### **Logo Pulse Mais**

* Dimensões: **180 × 50px**
* Margens:

  * Esquerda: **30px**
  * Topo: **42px**

### **Menu Hambúrguer (3 barras)**

* Cada barra: **50 × 10px**
* Espaçamento entre barras: **10px**
* Borda arredondada: **10px**
* Cor: `#EEF2F6`
* Localização: canto superior direito

### **Comportamento do Menu**

* Ao clicar → abrir overlay ocupando **100% da tela**.
* Exibir opções:

  * Início
  * Sobre
  * Apoie
  * Transparência
  * Contato
* Exibir botão **X** com mesma estilização das barras.
* Menu deve ser **componentizado** para uso global.

---

# 2.2 Hero com Imagem e Chamada

### **Carrossel (ou imagem única)**

* Dimensões: **300 × 256px**
* Borda arredondada: **25px**
* Lógica:

  * Se 1 imagem → exibe estática
  * Se >1 imagem → carrossel automático

### **Título (Pequeno título)**

* Fonte: **30px**
* Peso: **bold**
* Cor: `#486284`
* Alinhamento: esquerda
* Margem top: **30px**
* Texto:

```
Venha ser um\ njovem Pulsante
```

### **Descrição**

* Fonte: **20px**
* Peso: regular
* Cor: `#486284`
* Margem top: **8px**
* Texto:

```
Tem entre 17 à 26 anos? Este pode ser
o começo da sua jornada no mundo da tecnologia.
```

### **Botão CTA**

* Dimensões: **300 × 48px**
* Cor do botão: `#486284`
* Texto branco
* Texto 15px, peso médio
* Borda arredondada: **50px**
* Alinhado ao centro
* Margem top: **24px**
* Componente: `CTAButton`

---

# 2.3 Seção "Quem Somos"

### **Título**

* Fonte: 30px
* Peso: bold
* Cor: `#486284`
* Margem top: **62px**
* Texto: "Quem somos"

### **Descrição**

* Fonte: 20px
* Peso: regular
* Cor: `#486284`
* Margem top: **32px**
* Texto fornecido

### **CTA Button**

Mesmo padrão da sessão anterior.

---

# 2.4 Seção "É jovem? Saiba como participar"

### **Título**

* Fonte: 40px
* Peso: bold
* Cor: `#486284`
* Margem top: **62px**
* Texto:

```
É jovem? Saiba
como participar
```

---

# 2.5 Cards de Experiências — Componente Repetível

O card se repete **4 vezes**, com espaçamento de **36px** entre eles.

### **Título do Card**

* Fonte: 30px
* Peso: bold
* Cor: `#486284`
* Margem top: **26px**
* Texto:

```
Experiências de
Mentorias de Curta
Duração
```

### **Descrição**

* Fonte: 20px
* Peso: regular
* Cor: `#486284`
* Margem top: **32px**
* Conteúdo multilinha conforme layout

### **Ação "Saiba Mais" (Acordeão)**

* Peso: **bold**
* Cor: `#486284`
* Ao clicar:

  * abre conteúdo oculto
  * exemplo provisório: "Aqui vão mais informações"
* Deve ser um componente reutilizável `Accordion`

### **No último card**

* Exibe **CTA button** abaixo (mesmo padrão)

---

# 2.6 Seção de Cadastro

### **Título Grande (Centro)**

* Fonte: 40px
* Peso: bold
* Cor: `#486284`
* Alinhado ao centro
* Margem top: **27px**
* Texto:

```
Para realizar o cadastro e
ficar por dentro de novidades.
```

---

# 2.7 Seção "Torne-se nosso parceiro"

### **Título**

* Fonte: 50px
* Peso: bold
* Cor: `#486284`
* Alinhamento: centro
* Espaçamento entre linhas: **5px**
* Margem top: **62px**
* Texto:

```
Torne-se
nosso
parceiro.
```

### **CTA Button**

Mesmo padrão das sessões anteriores.

---

# 2.8 Footer (Componentizado)

Dividido em dois quadrantes.

## **Quadrante 1 — Logos**

### Logo Pulse

* Dimensões: **180 × 50px**
* Margem top: **116px** a partir do último botão

### 3 ícones (redes sociais)

* Dimensões: **50 × 50px**
* Espaço entre ícones: **15px** (lado direito)
* Ações: abrir link externo

---

## **Quadrante 2 — Contatos**

### Telefone

* Fonte: 40px
* Peso: bold
* Cor: `#486284`
* Margem top: 33px
* Texto: `+55 11 98821-3886`

### Texto "Envie um email"

* Fonte: 30px
* Peso: regular
* Margem top: 5px
* Cor: `#486284`

### Email (como texto clicável)

* Fonte: 30px
* Peso: bold
* Cor: `#486284`
* Sublinhado
* Margem top: 5px
* Ação: redirecionar para página **Contato**

### CNPJ

* Fonte: 30px
* Texto: "CNPJ: 48.621.188/0001-11"
* Peso: regular
* Cor: `#486284`
* Margem top: 23px

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
