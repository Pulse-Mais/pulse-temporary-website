"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import {
  HeaderMobile,
  FooterMobile,
  HeaderDesktop,
  FooterDesktop,
  PartnersCarousel,
  CTAButton,
  Image,
  Link,
} from "@/app/_local-components/index";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contato@app.pulsemais.org.br";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaMobileRef = useRef<HTMLDivElement>(null);
  const recaptchaDesktopRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const scriptId = "recaptcha-script";
    if (document.getElementById(scriptId)) {
      renderCaptchas();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => renderCaptchas();
    document.head.appendChild(script);
  }, []);

  const renderCaptchas = () => {
    if (!window.grecaptcha) return;
    window.grecaptcha.ready(() => {
      if (recaptchaMobileRef.current && recaptchaMobileRef.current.childElementCount === 0) {
        window.grecaptcha.render(recaptchaMobileRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token: string) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(null),
        });
      }
      if (recaptchaDesktopRef.current && recaptchaDesktopRef.current.childElementCount === 0) {
        window.grecaptcha.render(recaptchaDesktopRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token: string) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(null),
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Por favor, confirme que você não é um robô.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
        window.grecaptcha?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {status === "success" && (
        <div className="fixed top-32 md:top-24 left-4 md:left-auto md:right-6 z-[99999] bg-white shadow-2xl rounded-[10px] overflow-hidden w-[90%] max-w-[350px] animate-fade-in-down border border-gray-200">
          <div className="p-4 flex items-start gap-3">
            <div className="text-[#33B458] mt-1 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[#003870] font-bold text-[16px]">Sucesso!</h4>
              <p className="text-[#003870] text-[14px] leading-snug">
                Seu email foi enviado com sucesso! Logo entraremos em contato.
              </p>
            </div>
          </div>
          <div className="h-1 w-full bg-gray-100">
            <div className="h-full bg-[#33B458] animate-progress-bar"></div>
          </div>
        </div>
      )}

      {/* VERSÃO MOBILE */}
      <div className="block md:hidden w-full overflow-x-hidden bg-white">
        <HeaderMobile />

        <section className="w-full flex justify-center mt-[124px] px-4">
          <div className="relative w-[300px] h-[256px] rounded-[16px] overflow-hidden">
            <Image
              src="/assents/images/hero-contato-mobile.png"
              alt="Fale com a Pulse Mais"
              fill
              className="object-cover"
            />
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

        <section className="w-full flex flex-col pl-[55px] pr-4 mt-[40px]">
          <h2 className="text-[36px] font-bold text-[#003870] text-left mb-4">Rede Sociais</h2>
          <div className="flex flex-col gap-[10px]">
            <Link
              href="https://www.instagram.com/pulsemaisong/"
              target="_blank"
              className="flex items-center gap-[1px]"
            >
              <Image
                src="/assents/brand/social-instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
              <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/pulsemaisong"
              target="_blank"
              className="flex items-center gap-[1px]"
            >
              <Image
                src="/assents/brand/social-linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
              <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">LinkedIn</span>
            </Link>
            <Link
              href="https://www.youtube.com/@pulsemais/videos"
              target="_blank"
              className="flex items-center gap-[1px]"
            >
              <Image src="/assents/brand/social-youtube.svg" alt="YouTube" width={40} height={40} />
              <span className="text-[24px] font-normal text-[#6B6D6E] ml-2">Youtube</span>
            </Link>
          </div>
        </section>

        <section className="w-full px-4 mt-[50px] flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-[#003870] text-left w-[330px] leading-tight mb-6">
            Envie-nos uma <br /> mensagem
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-[330px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="name-mobile" className="text-[24px] font-semibold text-[#003870]">
                Nome
              </label>
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
            <div className="flex flex-col gap-2">
              <label htmlFor="email-mobile" className="text-[24px] font-semibold text-[#003870]">
                E-mail
              </label>
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
            <div className="flex flex-col gap-2">
              <label htmlFor="subject-mobile" className="text-[24px] font-semibold text-[#003870]">
                Assunto
              </label>
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
            <div className="flex flex-col gap-2">
              <label htmlFor="message-mobile" className="text-[24px] font-semibold text-[#003870]">
                Mensagem
              </label>
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

            <div className="flex justify-center">
              <div ref={recaptchaMobileRef} />
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-[246px] h-[50px] bg-[#003870] text-white text-[16px] font-bold rounded-[15px] hover:bg-[#33B458] transition-all disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm mt-2 text-center">
                Ocorreu um erro. Tente novamente.
              </p>
            )}
          </form>
        </section>

        <section className="relative bg-white pt-[57px] pb-[48px] mt-[40px] overflow-hidden w-full">
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-amarelo.svg"
              alt=""
              width={91}
              height={127}
              className="w-[91px] h-[127px]"
            />
          </div>
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-verde.svg"
              alt=""
              width={46}
              height={64}
              className="w-[46px] h-[64px]"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[48px] font-bold text-[#486284] text-center mx-auto w-[300px] leading-tight">
              Torne-se
              <br />
              nosso
              <br />
              parceiro.
            </h2>
            <div className="mt-[80px] flex justify-center">
              <CTAButton variant="gray" href="/apoie">
                Saiba Mais
              </CTAButton>
            </div>
          </div>
        </section>

        <FooterMobile />
      </div>

      {/* VERSÃO DESKTOP */}
      <div className="hidden md:block w-full bg-white">
        <HeaderDesktop />

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
                  src="/assents/logos/pulse-logo-footer.svg"
                  alt="Pulse Mais Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1216px] mx-auto mt-[45px] px-6 grid grid-cols-[350px_1fr] gap-[80px]">
          <div className="flex flex-col pt-4">
            <div className="mb-[40px]">
              <h2 className="text-[30px] font-bold text-[#003870] mb-[20px]">Telefone</h2>
              <Link
                href="https://wa.me/5511988213886"
                target="_blank"
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assents/brand/whatsapp-icon.svg"
                  alt="WhatsApp"
                  width={31}
                  height={31}
                />
                <span className="text-[20px] text-[#6B6D6E]">WhatsApp</span>
              </Link>
            </div>
            <div>
              <h2 className="text-[30px] font-bold text-[#003870] mb-[20px]">Rede Sociais</h2>
              <div className="flex flex-col gap-[10px]">
                <Link
                  href="https://www.instagram.com/pulsemaisong/"
                  target="_blank"
                  className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/assents/brand/social-instagram.svg"
                    alt="Instagram"
                    width={31}
                    height={31}
                  />
                  <span className="text-[20px] text-[#6B6D6E]">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/pulsemaisong"
                  target="_blank"
                  className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/assents/brand/social-linkedin.svg"
                    alt="LinkedIn"
                    width={31}
                    height={31}
                  />
                  <span className="text-[20px] text-[#6B6D6E]">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@pulsemais/videos"
                  target="_blank"
                  className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/assents/brand/social-youtube.svg"
                    alt="YouTube"
                    width={31}
                    height={31}
                  />
                  <span className="text-[20px] text-[#6B6D6E]">Youtube</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[24px] font-semibold text-[#003870]">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-[628px] h-[48px] border border-[#6B6D6E] rounded-[15px] px-4 text-[#003870] placeholder:text-[#6B6D6E] focus:outline-none focus:border-[#003870] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[24px] font-semibold text-[#003870]">
                  E-mail
                </label>
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
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[24px] font-semibold text-[#003870]">
                  Assunto
                </label>
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
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[24px] font-semibold text-[#003870]">
                  Mensagem
                </label>
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

              <div ref={recaptchaDesktopRef} />

              <button
                type="submit"
                disabled={loading}
                className="w-[246px] h-[50px] bg-[#003870] text-white text-[16px] font-bold rounded-[15px] mt-4 hover:bg-[#33B458] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  Ocorreu um erro. Por favor, tente novamente.
                </p>
              )}
            </form>
          </div>
        </section>

        <section id="parceiro-desktop" className="w-full py-12">
          <PartnersCarousel />
        </section>

        <FooterDesktop />
      </div>

      <style jsx global>{`
        @keyframes progress-bar {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-progress-bar {
          animation: progress-bar 5s linear forwards;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
