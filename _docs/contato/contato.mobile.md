# Documentação Técnica — Contato (Mobile First Design)

**Projeto:** Pulse Mais — Página Contato (Mobile)
**Tecnologia:** Next.js + Tailwind CSS + FormSubmit (AJAX)
**Metodologia:** Mobile First Design
**Objetivo:** Documentar detalhadamente a tela de "Contato" (versão mobile), para envio ao agente Cursor e implementação fiel ao layout.

---

# 1. Diretrizes Gerais de Design (Mobile)

## 1.1 Identidade Visual
* **Fonte:** Poppins.
* **Cores Principais:**
  * Azul Primário: `#003870`
  * Cinza Texto/Bordas: `#6B6D6E`
  * Branco: `#FFFFFF`
  * Verde (Sucesso/Hover): `#33B458`

## 1.2 Princípios Mobile First
* O layout deve ocupar **100% da largura da viewport** (`w-full overflow-x-hidden`).
* **Visibilidade:** Esta estrutura deve aparecer apenas em mobile (`block md:hidden`).
* **Container:** Elementos centralizados ou com padding lateral padrão (`px-4`).

## 1.3 Caminho dos Arquivos e Assets
| Elemento | Caminho Sugerido | Dimensões |
| :--- | :--- | :--- |
| **Hero Image** | `/assents/images/hero-contato-mobile.png` | 300x256px |
| **Hero Logo** | `/assents/logos/pulse-logo-header.svg` | 223x68px |
| **Ícones** | `/assents/brand/social-instagram.svg ` | Whatsapp (40x40), Redes (31x31) |
`/assents/brand/social-linkedin.svg`
`/assents/brand/whatsapp-icon.svg`

---

# 2. Estrutura Completa da Página Contato (Mobile)

## 2.1 Header Mobile
* **Requisito:** Reutilizar integralmente o componente `<HeaderMobile />`.
* **Navegação:** Garantir que o link "Contato" leve para `/contato`.

---

## 2.2 Hero Section (Mobile)
* **Espaçamento Topo:** Ajustar conforme altura do header fixo (aprox. 120px).
* **Alinhamento:** Centralizado.
* **Background:** /assents/images/hero-contato-mobile.png
* **Conteúdo Sobreposto (Overlay):**
  * **Texto:** "Fale com a"
    * Tamanho: 24px, Cor Branca, Centralizado.
    * Margem inferior para a logo.
  * **Logo:** Logo da Pulse Mais.
    * Dimensões: 223px (largura) x 68px (altura).
    * Posição: Abaixo do texto.

---

## 2.3 Seção "Telefone"
* **Espaçamento Topo:** 52px do Hero (`mt-[52px]`).
* **Padding Lateral:** `px-4`.

### **Título**
* Texto: "Telefone"
* Estilo: 32px, Bold, Cor `#003870`.
* Alinhamento: Justificado à esquerda (`text-left`).

### **Conteúdo**
* **Layout:** Flex Row (Ícone + Texto).
* **Ícone:** `/assents/brand/whatsapp-icon.svg`
* **Texto:** "WhatsApp" (24px, `#6B6D6E`).
* **Ação:** Link para `https://wa.me/5511988213886`.

---

## 2.4 Seção "Rede Sociais"
* **Espaçamento Topo:** 40px (sugestão visual baseada no fluxo).
* **Padding Lateral:** `px-4`.

### **Título**
* Texto: "Rede Sociais"
* Estilo: 36px, Bold, Cor `#003870`.
* Alinhamento: Justificado à esquerda.

### **Lista de Redes**
* **Layout:** Vertical (`flex-col`), espaçamento entre linhas de 10px (`gap-y-[10px]`).
* **Estilo do Item:**
  * Layout: Flex Row, alinhado ao centro verticalmente.
  * **Ícone:** `/assents/brand/social-instagram.svg ` e `/assents/brand/social-linkedin.svg`
  * **Texto:** 16px, Regular, `#6B6D6E`.
  * **Espaçamento Ícone-Texto:** 1px (`gap-[1px]`).
* **Itens:**
  1. **Instagram** → Link: `https://www.instagram.com/pulsemaisong/`
  2. **LinkedIn** → Link: `https://www.linkedin.com/company/pulsemaisong`

---

## 2.5 Seção Formulário "Envie-nos uma mensagem"
* **Espaçamento Topo:** Sugestão `mt-[50px]`.
* **Alinhamento:** Centralizado (elementos internos com largura fixa de 300px).

### **Título da Seção**
* Texto: "Envie-nos uma mensagem"
* Estilo: 36px, Bold, `#003870`, Justificado à esquerda (dentro do container ou alinhado com margem).

### **Estilo dos Campos (Inputs)**
* **Label (Título):** 24px, SemiBold, `#003870`, Alinhado à esquerda do input.
* **Input Box:**
  * Dimensões: 300px (largura) x 48px (altura).
  * Borda: 1px sólida, Cor `#6B6D6E`.
  * Arredondamento: 15px (`rounded-[15px]`).
  * Padding: 16px (`px-[16px]`).
  * **Placeholder:** Texto igual ao título, 16px, `#6B6D6E`, **Alinhado Horizontalmente ao Centro** (`text-center`).
  * **Texto Digitado:** 16px, `#003870`.

### **Campos:**
1. **Nome** (Input text)
2. **E-mail** (Input email)
3. **Assunto** (Input text)
4. **Mensagem** (Textarea)
   * Dimensões: 300px (largura) x 182px (altura).
   * Comportamento: Texto respeita o espaço, sem limite explícito.

### **Botão de Enviar**
* Dimensões: Largura sugerida (ex: 246px ou Full 300px) x 50px altura.
* Cor: Azul `#003870`.
* Texto: "Enviar", 16px, Branco, Centralizado.
* **Feedback:** Adaptar o modal de carregamento e confirmação (Toast verde) para o mobile (largura responsiva).

### **Lógica Técnica (AJAX)**
Mesma lógica do Desktop:
* Endpoint: `https://formsubmit.co/ajax/contato@app.pulsemais.org.br`
* Método: POST.
* Body: `name`, `email`, `_subject`, `message`, `_captcha="false"`.

---

## 2.6 Seção "Torne-se nosso parceiro"
{/* 2.6 Seção "Torne-se nosso parceiro" */}
        <section className="relative bg-white pt-[57px] pb-[48px] mt-[40px] overflow-hidden w-full">
          {/* Decoração: Plus Amarelo (Topo Direito) */}
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image 
              src="/assents/brand/plus-amarelo.svg" 
              alt="Decoration" 
              width={91} 
              height={127} 
              className="w-[91px] h-[127px]" 
            />
          </div>
          
          {/* Decoração: Plus Verde (Esquerda Baixo) */}
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image 
              src="/assents/brand/plus-verde.svg" 
              alt="Decoration" 
              width={46} 
              height={64} 
              className="w-[46px] h-[64px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[48px] font-bold text-[#486284] text-center mx-auto w-[300px] leading-tight">
              Torne-se<br />nosso<br />parceiro.
            </h2>
            <div className="mt-[80px] flex justify-center">
              <CTAButton variant="gray" href="/apoie">Saiba Mais</CTAButton>
            </div>
          </div>
        </section>

---

## 2.7 Footer Mobile
* **Requisito:** Utilizar componente `<FooterMobile />` ao final da página.