# Documentação Técnica — Contato (Desktop Version)

**Projeto:** Pulse Mais — Página Contato (Desktop)
**Tecnologia:** Next.js + Tailwind CSS, React Hook Form (sugerido), Toastify (sugerido para alertas)
**Metodologia:** Desktop Adaptation (Responsive from Mobile)
**Objetivo:** Documentar a tela de "Contato" (versão Desktop), incluindo layout, estilização de formulário e comportamentos de feedback.

---

# 1. Diretrizes Gerais de Design (Desktop)

## 1.1 Breakpoints e Layout
* **Breakpoint Principal:** `hidden md:block` (Visível apenas em Desktop/Tablet).
* **Container Central:** Largura máxima sugerida de `max-w-[1216px]` ou `max-w-[1440px]`, centralizado (`mx-auto`).
* **Espaçamentos:** Respeitar as distâncias em pixels definidas nas seções abaixo.

## 1.2 Tipografia e Cores
* **Fonte:** Poppins.
* **Cores Principais:**
  * Azul Primário (Títulos/Botão): `#003870`
  * Cinza Texto/Bordas: `#6B6D6E`
  * Branco: `#FFFFFF`
  * Verde (Sucesso/Hover): `#33B458`

## 1.3 Caminho dos Arquivos (Assets)
| Asset | Caminho Sugerido | Descrição |
| :--- | :--- | :--- |
| **Hero BG** | `/assents/images/hero-contato.png` | 1200x354px |
| **Hero Logo** | `/assents/brand/pulse-logo-header.svg` | Logo Pulse Branca (629x194px) |
| **Icone WhatsApp** | `/assents/icons/whatsapp-icon.svg` | 40x40px |
| **Icone Instagram** | `/assents/icons/social-instagram.svg` | 31x31px (Reaproveitar do desktop) |
| **Icone LinkedIn** | `/assents/icons/social-linkedin.svg` | 31x31px (Reaproveitar do desktop) |

---

# 2. Estrutura Completa da Página Contato (Desktop)

## 2.1 Header Desktop
* **Requisito:** Utilizar componente `HeaderDesktop`.
* **Comportamento:** O link "Contato" deve estar ativo/destacado.

---

## 2.2 Hero Section
* **Container:** Centralizado.
* **Background:** `/assents/images/hero-contato.png`
* **Conteúdo Sobreposto (Overlay):**
  * Centralizado vertical e horizontalmente sobre a imagem.
  * **Texto 1:** "Fale com a"
    * Tamanho: 48px.
    * Cor: Branco (`text-white`).
    * Peso: Bold (implícito pelo contexto de destaque).
    * Alinhamento: Centralizado.
  * **Imagem 2 (Logo):** `/assents/brand/pulse-logo-header.svg`
    * Dimensões: 629x194px.
    * Posição: Logo abaixo do texto "Fale com a".

---

## 2.3 Seção de Contato e Formulário

* **Layout:** Grid de 2 Colunas.
* **Distância do Hero:** 45px (`mt-[45px]`).
* **Largura do Container:** Centralizado na página.

### **Coluna 1: Informações de Contato (Esquerda)**
Alinhamento do conteúdo à esquerda.

#### **Bloco Telefone**
* **Título:** "Telefone"
  * Estilo: 36px, Bold, Cor `#003870`.
  * Alinhamento: Justificado à esquerda.
  * Margem Inferior: Sugestão `mb-[20px]`.
* **Item:**
  * Layout: Flex Row (Ícone + Texto).
  * **Ícone:** `/assents/icons/whatsapp-icon.svg` (40x40px).
  * **Texto:** "WhatsApp" (24px, `#6B6D6E`, alinhado ao centro vertical do ícone).
  * **Ação:** Link para `https://wa.me/5511988213886`.

#### **Bloco Redes Sociais**
* **Título:** "Rede Sociais"
  * Estilo: 36px, Bold, Cor `#003870`.
  * Margem Superior: Sugestão `mt-[40px]`.
  * Margem Inferior: Sugestão `mb-[20px]`.
* **Lista de Redes:**
  * Layout: Vertical (Coluna), com espaçamento entre linhas de 10px (`gap-y-[10px]`).
  * **Estilo do Item:**
    * Ícone: 31x31px.
    * Texto: 16px, Regular, `#6B6D6E`.
    * Espaçamento Ícone-Texto: 1px (conforme pedido, visualmente `gap-[4px]` pode ser mais seguro, mas seguir `gap-[1px]` se estrito).
  * **Itens:**
    1. **Instagram:** Ícone + Texto "Instagram" -> `https://www.instagram.com/pulsemaisong/`
    2. **LinkedIn:** Ícone + Texto "LinkedIn" -> `https://www.linkedin.com/company/pulsemaisong`

---

### **Coluna 2: Formulário Funcional (Direita)**
Formulário funcional que enviará dados via AJAX.

* **Estilo dos Campos (Input Padrão):**
  * **Label (Título):** 24px, SemiBold, `#003870`, Alinhado à esquerda do input.
  * **Input Box:**
    * Dimensões: 628px (largura) x 48px (altura).
    * Borda: 1px sólida, Cor `#6B6D6E`.
    * Arredondamento: 15px (`rounded-[15px]`).
    * Padding Interno: 16px (`px-[16px]`).
    * **Placeholder:** Texto igual ao título, 16px, `#6B6D6E`, Centralizado Horizontalmente (`text-center` no placeholder).
    * **Texto Digitado:** 16px, `#003870`, Alinhamento padrão (esquerda).

#### **Campos do Formulário:**
1. **Nome:** Input Padrão.
2. **E-mail:** Input Padrão (tipo `email`).
3. **Assunto:** Input Padrão.
4. **Mensagem:**
   * **Input Diferenciado (Textarea):**
   * Dimensões: 628px (largura) x 182px (altura).
   * Sem limite de caracteres explícito.
   * Estilos de borda, cor e placeholder seguem o padrão.

#### **Botão de Envio:**
* Dimensões: 246px x 50px.
* Cor de Fundo: `#003870`.
* Texto: "Enviar", 16px, Branco.
* Arredondamento: Sugestão `rounded-[15px]` ou `rounded-full`.
* **Hover:** Sugestão de leve brilho ou mudança para `#33B458` (Verde).

#### **Lógica Técnica de Envio (AJAX)**
Para garantir o funcionamento do Pop-up de sucesso sem redirecionar o usuário, a submissão deve ser feita via JavaScript (`fetch`):

* **Endpoint:** `https://formsubmit.co/ajax/contato@app.pulsemais.org.br`
* **Método:** POST.
* **Headers:** `Content-Type: application/json`, `Accept: application/json`.
* **Body (JSON):**
    * `name`: (Input Nome)
    * `email`: (Input E-mail)
    * `_subject`: (Input Assunto)
    * `message`: (Textarea Mensagem)
    * `_captcha`: "false"

#### **Comportamento da Ação "Enviar"**
1.  **Trigger:** `onSubmit` do formulário (prevenir default `e.preventDefault()`).
2.  **Estado de Carregamento:** Exibir loading no botão ou barra de progresso.
3.  **Resposta de Sucesso (Status 200):**
    * Ativar o componente **Toast/Pop-up** (Barra de progresso verde, texto azul).
    * Mensagem: "Seu email foi enviado com sucesso! Logo entraremos em contato".
    * Manter visível por 5 segundos.
    * Resetar os campos do formulário.
4.  **Resposta de Erro:**
    * Exibir feedback de erro visual.
    * **NÃO** limpar os campos preenchidos (permitir retentativa).

---

## 2.4 Seção Empresas Parceiras e Patrocinadoras

* **Requisito:** Reutilizar o componente/código da seção de Parceiros/Patrocinadores da página **Apoie (Desktop)**.
* **Conteúdo:** Carrossel ou Grid de logos (conforme definido em `apoie.desktop.md`).

---

## 2.5 Footer Desktop
* **Requisito:** Utilizar componente `FooterDesktop`.