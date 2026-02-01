'use client'

import { useState, FormEvent } from 'react'
import { 
  HeaderMobile, 
  FooterMobile, 
  HeaderDesktop, 
  FooterDesktop, 
  PartnersCarousel,
  CTAButton,
  Image, 
  Link 
} from "@/app/_local-components/index"

// =====================================================================
// DADOS (CONFIGURAÇÃO)
// =====================================================================

// Endpoint do FormSubmit (AJAX)
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contato@app.pulsemais.org.br"

export default function Contato() {
  // Estados do Formulário
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Controle dos Inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Envio do Formulário (AJAX)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject, // Assunto real do email
          message: formData.message,
          _captcha: "false" // Desativa captcha visual
        })
      })

      if (response.ok) {
        setStatus('success')
        // Limpa o formulário após sucesso
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Remove o toast após 5 segundos
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Erro no envio:", error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ==================================================================
          TOAST DE SUCESSO (POP-UP) - RESPONSIVO
      ================================================================== */}
      {status === 'success' && (
        <div className="fixed top-32 md:top-24 left-4 md:left-auto md:right-6 z-[99999] bg-white shadow-2xl rounded-[10px] overflow-hidden w-[90%] max-w-[350px] animate-fade-in-down border border-gray-200">
          <div className="p-4 flex items-start gap-3">
             {/* Ícone de Sucesso */}
             <div className="text-[#33B458] mt-1 shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
             </div>
             <div>
               <h4 className="text-[#003870] font-bold text-[16px]">Sucesso!</h4>
               <p className="text-[#003870] text-[14px] leading-snug">
                 Seu email foi enviado com sucesso! Logo entraremos em contato.
               </p>
             </div>
          </div>
          {/* Barra de Progresso Animada */}
          <div className="h-1 w-full bg-gray-100">
             <div className="h-full bg-[#33B458] animate-progress-bar"></div>
          </div>
        </div>
      )}

      {/* ==================================================================
          VERSÃO MOBILE (block md:hidden)
          Documentação: contato.mobile.md
      ================================================================== */}
      <div className="block md:hidden w-full overflow-x-hidden bg-white">
        <HeaderMobile />

        {/* 2.2 Hero Mobile */}
        <section className="w-full flex justify-center mt-[124px] px-4">
           {/* Container relativo com tamanho fixo 300x256 conforme docs */}
           <div className="relative w-[300px] h-[256px] rounded-[16px] overflow-hidden">
             <Image
               src="/assents/images/hero-contato-mobile.png"
               alt="Fale com a Pulse Mais"
               fill
               className="object-cover"
             />
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <h1 className="text-[24px] text-white text-center mb-2">Fale com a</h1>
                <div className="relative w-[223px] h-[68px]">
                   <Image 
                      src="/assents/logos/pulse-logo-footer.svg" 
                      alt="Pulse Mais Logo" 
                      fill 
                      className="object-contain"
                   />
                </div>
             </div>
           </div>
        </section>

        {/* 2.3 Seção Telefone  */}
        <section className="w-full flex flex-col pl-[55px] pr-4 mt-[52px]">
           <h2 className="text-[32px] font-bold text-[#003870] text-left mb-4">Telefone</h2>
           <Link 
              href="https://wa.me/5511988213886" 
              target="_blank"
              className="flex items-center gap-2 group"
           >
              <Image src="/assents/brand/whatsapp-icon.svg" alt="WhatsApp" width={40} height={40} />
              <span className="text-[24px] text-[#6B6D6E]">WhatsApp</span>
           </Link>
        </section>

        {/* 2.4 Seção Redes Sociais */}
        <section className="w-full flex flex-col pl-[55px] pr-4 mt-[40px]">
           <h2 className="text-[36px] font-bold text-[#003870] text-left mb-4">Rede Sociais</h2>
           <div className="flex flex-col gap-[10px]">
              {/* Instagram */}
              <Link href="https://www.instagram.com/pulsemaisong/" target="_blank" className="flex items-center gap-[1px]">
                 <Image src="/assents/brand/social-instagram.svg" alt="Instagram" width={40} height={40} />
                 <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">Instagram</span>
              </Link>
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/pulsemaisong" target="_blank" className="flex items-center gap-[1px]">
                 <Image src="/assents/brand/social-linkedin.svg" alt="LinkedIn" width={40} height={40} />
                 <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com/@pulsemais/videos" target="_blank" className="flex items-center gap-[1px]">
                 <Image src="/assents/brand/social-youtube.svg" alt="LinkedIn" width={40} height={40} />
                 <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">Youtube</span>
              </Link>
           </div>
        </section>

        {/* 2.5 Seção Formulário Mobile */}
        <section className="w-full px-4 mt-[50px] flex flex-col items-center">
           <h2 className="text-[36px] font-bold text-[#003870] text-left w-[330px] leading-tight mb-6">
             Envie-nos uma <br /> mensagem
           </h2>
           
           <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-[330px]">
              {/* Nome */}
              <div className="flex flex-col gap-2">
                 <label htmlFor="name-mobile" className="text-[24px] font-semibold text-[#003870]">Nome</label>
                 <input 
                   type="text" 
                   id="name-mobile"
                   name="name"
                   placeholder="Nome"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="w-[330px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870]"
                 />
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-2">
                 <label htmlFor="email-mobile" className="text-[24px] font-semibold text-[#003870]">E-mail</label>
                 <input 
                   type="email" 
                   id="email-mobile"
                   name="email"
                   placeholder="E-mail"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="w-[330px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870]"
                 />
              </div>

              {/* Assunto */}
              <div className="flex flex-col gap-2">
                 <label htmlFor="subject-mobile" className="text-[24px] font-semibold text-[#003870]">Assunto</label>
                 <input 
                   type="text" 
                   id="subject-mobile"
                   name="subject"
                   placeholder="Assunto"
                   value={formData.subject}
                   onChange={handleChange}
                   required
                   className="w-[330px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870]"
                 />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2">
                 <label htmlFor="message-mobile" className="text-[24px] font-semibold text-[#003870]">Mensagem</label>
                 <textarea 
                   id="message-mobile"
                   name="message"
                   placeholder="Mensagem"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-[330px] h-[182px] border border-[#6B6D6E] rounded-[15px] p-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] resize-none"
                 />
              </div>

              {/* Botão Enviar - Centralizado */}
              <div className="flex justify-center mt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-[246px] h-[50px] bg-[#003870] text-white text-[16px] font-bold rounded-[15px] hover:bg-[#33B458] transition-all disabled:opacity-70"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-2 text-center">Ocorreu um erro. Tente novamente.</p>
              )}
           </form>
        </section>

        {/* 2.6 Seção "Torne-se nosso parceiro" Mobile (Com decorações) */}
        <section className="relative bg-white pt-[57px] pb-[48px] mt-[40px] overflow-hidden w-full">
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image src="/assents/brand/plus-amarelo.svg" alt="" width={91} height={127} className="w-[91px] h-[127px]" />
          </div>
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image src="/assents/brand/plus-verde.svg" alt="" width={46} height={64} className="w-[46px] h-[64px]" />
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

        <FooterMobile />
      </div>

      {/* ==================================================================
          VERSÃO DESKTOP (hidden md:block)
          Documentação: contato.desktop.md
      ================================================================== */}
      <div className="hidden md:block w-full bg-white">
        <HeaderDesktop />

        {/* 2.2 Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto mt-[55px] px-6 relative flex justify-center">
          <div className="relative w-[1200px] h-[354px] rounded-[24px] overflow-hidden border-none shadow-none outline-none ring-0 bg-transparent">
             <Image
               src="/assents/images/hero-contato.png"
               alt="Fale com a Pulse Mais"
               fill
               className="object-cover border-none outline-none"
               priority
             />
             <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <h1 className="text-[48px] font-bold text-white mb-2 shadow-sm">Fale com a</h1>
                <div className="relative w-[629px] h-[194px]">
                   <Image 
                      src="/assents/logos/pulse-logo-footer.svg" // Atualizado conforme docs
                      alt="Pulse Mais Logo" 
                      fill 
                      className="object-contain"
                   />
                </div>
             </div>
          </div>
        </section>

        {/* 2.3 Seção de Contato e Formulário */}
        <section className="w-full max-w-[1216px] mx-auto mt-[45px] px-6 grid grid-cols-[350px_1fr] gap-[80px]">
          
          {/* Coluna 1: Informações (Esquerda) */}
          <div className="flex flex-col pt-4">
             {/* Telefone */}
             <div className="mb-[40px]">
                <h2 className="text-[30px] font-bold text-[#003870] mb-[20px]">Telefone</h2>
                <Link 
                  href="https://wa.me/5511988213886" 
                  target="_blank"
                  className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                >
                   <Image src="/assents/brand/whatsapp-icon.svg" alt="WhatsApp" width={31} height={31} />
                   <span className="text-[20px] text-[#6B6D6E]">WhatsApp</span>
                </Link>
             </div>

             {/* Redes Sociais */}
             <div>
                <h2 className="text-[30px] font-bold text-[#003870] mb-[20px]">Rede Sociais</h2>
                <div className="flex flex-col gap-[10px]">
                   {/* Instagram */}
                   <Link 
                     href="https://www.instagram.com/pulsemaisong/" 
                     target="_blank" 
                     className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                   >
                      <Image src="/assents/brand/social-instagram.svg" alt="Instagram" width={31} height={31} />
                      <span className="text-[20px] text-[#6B6D6E]">Instagram</span>
                   </Link>

                   {/* LinkedIn */}
                   <Link 
                     href="https://www.linkedin.com/company/pulsemaisong" 
                     target="_blank" 
                     className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                   >
                      <Image src="/assents/brand/social-linkedin.svg" alt="LinkedIn" width={31} height={31} />
                      <span className="text-[20px] text-[#6B6D6E]">LinkedIn</span>
                   </Link>

                   <Link 
                     href="https://www.youtube.com/@pulsemais/videos" 
                     target="_blank" 
                     className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                   >
                      <Image src="/assents/brand/social-youtube.svg" alt="LinkedIn" width={31} height={31} />
                      <span className="text-[20px] text-[#6B6D6E]">Youtube</span>
                   </Link>
                </div>
             </div>
          </div>

          {/* Coluna 2: Formulário (Direita) */}
          <div>
             <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-[24px] font-semibold text-[#003870]">Nome</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     placeholder="Nome"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     // Desktop: placeholder padrão (esquerda)
                     className="w-[628px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] transition-colors"
                   />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-[24px] font-semibold text-[#003870]">E-mail</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     placeholder="E-mail"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-[628px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] transition-colors"
                   />
                </div>

                {/* Assunto */}
                <div className="flex flex-col gap-2">
                   <label htmlFor="subject" className="text-[24px] font-semibold text-[#003870]">Assunto</label>
                   <input 
                     type="text" 
                     id="subject"
                     name="subject"
                     placeholder="Assunto"
                     value={formData.subject}
                     onChange={handleChange}
                     required
                     className="w-[628px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] transition-colors"
                   />
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-[24px] font-semibold text-[#003870]">Mensagem</label>
                   <textarea 
                     id="message"
                     name="message"
                     placeholder="Mensagem"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     className="w-[628px] h-[182px] border border-[#6B6D6E] rounded-[15px] p-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] transition-colors resize-none"
                   />
                </div>

                {/* Botão Enviar */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-[246px] h-[50px] bg-[#003870] text-white text-[16px] font-bold rounded-[15px] mt-4 hover:bg-[#33B458] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-2">Ocorreu um erro. Por favor, tente novamente.</p>
                )}
             </form>
          </div>

        </section>

        {/* 2.4 Parceiros Desktop */}
        <section id="parceiro-desktop" className="w-full py-12">
            <PartnersCarousel />
        </section>

        <FooterDesktop />
      </div>

      {/* Estilos Globais de Animação */}
      <style jsx global>{`
        @keyframes progress-bar {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-progress-bar {
          animation: progress-bar 5s linear forwards;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}