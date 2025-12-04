# Documentação Mobile First – Home (Versão Atualizada com Layout Pulse Mais)

Esta documentação descreve a implementação Mobile First da Home da **Pulse Mais**, com base no layout do site em produção na data de 04 de dezembro de 2025. 

---

## 🎨 Paleta de Cores (Paleta Original Atualizada)

Esta documentação utiliza **a paleta oficial e original**:

---

## Cor 1: Azul Corporativo

**RGB:** `000 056 112`
**HEX:** `#003870`
**CMYK:** `100 085 030 016`
**Uso:** Logotipo, cabeçalhos, elementos principais.

## Cor 2: Verde Institucional

**RGB:** `037 185 087`
**HEX:** `#338458`
**CMYK:** `075 000 090 000`
**Uso:** Botões de ação, destaques, elementos interativos.

## Cor 3: Amarelo de Destaque

**RGB:** `255 215 043`
**HEX:** `#FFD927`
**CMYK:** `000 012 092 000`
**Uso:** Alertas, elementos de alta atenção.

---

Observações:

* Cores consolidadas em RGB, HEX e CMYK.
* Ideal usar CMYK para impressão e RGB/HEX para digital.
* Sempre verificar contraste (WCAG) em textos sobre fundos.

---

# 📱 Estrutura Mobile First (Home)

A seguir está a estrutura recomendada para implementação no React/Next baseada no layout real.

---

## 1. **Header**

* Logo Pulse Mais à esquerda.
* Ícone hamburguer à direita.
* Fundo branco e espaçamento vertical moderado.

**Componentes:**

* `<Header />`
* `<MenuMobile />`

---

## 2. **Hero – Primeira dobra**

### **Título:**

**Seja a mudança que a sua carreira precisa!**

### **Subtexto:**

Impulsione sua carreira em tecnologia com a Pulse Mais: cursos, mentorias, oportunidades de emprego e bolsas universitárias!

### **CTA:**

**Inscreva-se no Programa Pulse Mais – Turmas 1º sem. 2025**

* Botão azul claro (`#0094FF`)
* Bordas totalmente arredondadas
* Fonte branca bold

### **Imagem**

* Foto do jovem sorrindo, centralizada.
* Background com shape azul orgânico.
* O componente deve permitir troca de imagem.

**Componentes:**

* `<HeroSection />`
* `<PrimaryCTA />`

---

## 3. **Inscrições Abertas – Sessão Colorida Azul Escuro**

### **Título:**

**Inscrições abertas!**

### **Texto:**

Não perca essa oportunidade e inscreva-se para o Programa Pulse Mais – Turmas 1º semestre de 2025. Venha impulsionar o seu futuro conosco.

### **CTAs:**

* **Clique aqui e se inscreva** → botão amarelo `#FFD32A`
* **Dúvidas Frequentes** → botão verde `#16C172`

### Background

* Azul escuro (`#0D2A5A`)
* Vários ícones “+” com curvas, nas cores verde, azul, branco e amarelo.

**Componentes:**

* `<RegistrationsOpen />`
* `<SecondaryCTA />`

---

## 4. **Nosso Propósito – Sessão Verde**

### **Título:**

**Nosso propósito**

### **Texto:**

Possibilitar que todos os jovens brasileiros de baixa renda possam sonhar com um futuro como líderes.

### **Lista com ícones:**

* Programas de formação que desenvolvem habilidades essenciais para carreiras em tecnologia e utilizam um **método exclusivo** que integra aulas e mentorias.
* Conexão com executivos de **grandes empresas** na América Latina.
* Uma **rede de oportunidades** para conquistar o primeiro emprego e acessar o ensino superior com bolsa gratuita.

### **Ícones e cores:**

* Ícones brancos sobre fundo verde `#16C172`
* Sub-shapes orgânicos no fundo

**Componente:**

* `<PurposeSection />`

---

## 5. **Resultados até 2023 – Sessão Light**

### **Título:**

**Resultados até 2023**

### Cards circulares (seguem as cores do layout):

#### **Card 1 – Amarelo**

* Cor: `#FFD32A`
* Texto: **350 jovens impactados com formação e mentoria**
* Subtexto abaixo (fora do círculo):

  * *50% de empregabilidade após o Programa Pulse Mais.*

#### **Card 2 – Azul**

* Cor: `#0094FF`
* Texto: **+3600 horas de mentorias**
* Subtexto:

  * *Rede com mais de 250 mentores cadastrados, mais de 100 finalizadas.*

#### **Card 3 – Verde**

* Cor: `#16C172`
* Texto: **+10…** (manter texto completo quando disponível nas outras seções)

**Componentes:**

* `<ResultsSection />`
* `<ResultCard />`

---

# 📦 Estrutura recomendada de componentes

* `/components/Header`
* `/components/HeroSection`
* `/components/PrimaryCTA`
* `/components/RegistrationsOpen`
* `/components/SecondaryCTA`
* `/components/PurposeSection`
* `/components/ResultsSection`
* `/components/ResultCard`

---

# 🧪 Testes (Cypress + Mocks)

Testes devem verificar:

* Renderização correta do layout Mobile.
* CTAs sempre presentes.
* Responsividade.
* Contraste entre texto e fundo conforme WCAG.
* Estrutura semântica.

Exemplos:

```js
cy.get('[data-cy="hero-title"]').contains('Seja a mudança');
cy.get('[data-cy="primary-cta"]').should('be.visible');
cy.viewport('iphone-x');
```

---

# 🗂 Internacionalização (config/locale)

### Regras:

* O frontend deve buscar textos preferencialmente em `config/locale/pt.yml` ou `config/locale/en.yml`.
* As chaves devem seguir padrão:

```yaml
home:
  hero:
    title: "Seja a mudança que a sua carreira precisa!"
    subtitle: "Impulsione sua carreira…"
  cta:
    primary: "Inscreva-se no Programa Pulse Mais"
```

