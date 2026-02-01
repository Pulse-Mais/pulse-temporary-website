  import { HeaderDesktop, FooterDesktop, FooterMobile, Image, Link, HeaderMobile, CTAButton } from "@/app/_local-components/index"
import AnimatedCounter from "@/components/UI/AnimatedCounter"; // Ajuste o caminho se necessário
export default function Sobre() {
  return (
    <>
      {/* ========== VERSÃO DESKTOP ========== */}
      <div className="hidden md:block w-full">
        {/* 2.1 Header Desktop */}
        <HeaderDesktop />

        {/* 2.2 Hero Section */}
        <section className="w-full flex justify-center mt-[50px]">
          <div className="max-w-[1440px] mx-auto px-[121px]">
            <Image
              src="/assents/desktop/sobre-hero.png"
              alt="Hero Sobre"
              width={1200}
              height={465}
              className="w-full h-auto rounded-[24px] object-cover"
            />
          </div>
        </section>

        {/* 2.3 Sessão "Missão e Visão" */}
        <section className="relative w-full bg-white">
          <div className="max-w-[1440px] mx-auto px-[121px] pt-[122px] pb-[100px]">
            {/* Título da Seção */}
            <h2 className="text-[64px] font-bold text-[#003870] text-center mb-16">
              Missão e Visão
            </h2>

            {/* Grid de Conteúdo */}
            <div className="grid grid-cols-2 gap-16 relative">
              {/* Card 1 - Nosso Propósito */}
              <div className="flex flex-col">
                <Image
                  src="/assents/images/nosso-proposito.jpg"
                  alt="Nosso Propósito"
                  width={600}
                  height={338}
                  className="w-full aspect-video rounded-[24px] object-cover"
                />
                <h3 className="text-[24px] font-bold text-[#003870] mt-6 text-center">
                  Nosso propósito
                </h3>
                <p className="text-[16px] font-normal text-[#6B6D6E] mt-4 text-center max-w-[80%] mx-auto">
                  Impulsionar jovens talentos de baixa renda a conquistar carreiras em tecnologia.
                </p>
              </div>

              {/* Card 2 - Nosso Sonho Grande */}
              <div className="flex flex-col">
                <Image
                  src="/assents/images/nosso-sonho.png"
                  alt="Nosso Sonho Grande"
                  width={600}
                  height={338}
                  className="w-full aspect-video rounded-[24px] object-cover"
                />
                <h3 className="text-[24px] font-bold text-[#003870] mt-6 text-center">
                  Nosso sonho grande
                </h3>
                <p className="text-[16px] font-normal text-[#6B6D6E] mt-4 text-center max-w-[80%] mx-auto">
                  Empoderar milhares de jovens a ingressarem no mercado e no mundo da tecnologia, reduzindo desigualdades socioeconômicas.
                </p>
              </div>

              {/* Elementos Decorativos */}
              {/* Shape Outline Amarelo - Topo Esquerdo */}
              <div className="absolute -top-[110px] -left-[120px] -translate-x-[50%] -translate-y-[50%] z-0">
                <Image
                  src="/assents/backgrounds/shape-plus-yellow.svg"
                  alt="Shape Outline"
                  width={170}
                  height={150}
                  className="w-[170px] h-auto"
                />
              </div>

              {/* Shape Amarelo Sólido - Base Direita */}
              <div className="absolute bottom-[5px] right-[-10px] z-0">
                <Image
                  src="/assents/backgrounds/shape-plus-yellow.svg"
                  alt="Shape Yellow"
                  width={79}
                  height={79}
                  className="w-[79px] h-[79px]"
                />
              </div>

              {/* Shape Verde Outline - Base Direita */}
              <div className="absolute -bottom-[190px] -right-[40px] z-0">
                <Image
                  src="/assents/backgrounds/shape-plus-green.svg"
                  alt="Shape Green"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2.4 Sessão "Conheça Jovens" */}
        <section className="w-full bg-white pt-[180px] pb-[110px]">
          <div className="max-w-[1440px] mx-auto px-[121px]">
            <div className="grid grid-cols-2 gap-[87px] items-center">
              {/* Coluna Esquerda (Texto) - INVERTIDO */}
              <div className="flex flex-col">
                <h2 className="text-[48px] font-bold text-[#003870] mb-6">
                  Conheça jovens empregados e que acessaram o ensino superior!
                </h2>
              </div>

              {/* Coluna Direita (Vídeo) - Substituindo a Imagem */}
              <div className="w-full">
                <iframe
                  className="w-full aspect-video rounded-[24px] shadow-lg"
                  src="https://www.youtube.com/embed/djpjV28WllM?si=ub-JPmc4bVLlvVoc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Sessão "Resultados de Impacto" */}
        <section 
          className="relative w-full bg-[#33B458] pt-[100px] pb-[100px] overflow-hidden"
          style={{
            clipPath: 'polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)'
          }}
        >
          {/* Elementos Decorativos - Shapes Brancos */}
          {/* Canto Superior Direito */}
          <div className="absolute top-0 right-0 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={150}
              height={150}
              className="w-[150px] h-auto opacity-50"
            />
          </div>

          {/* Canto Inferior Esquerdo */}
          <div className="absolute bottom-0 left-0 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={150}
              height={150}
              className="w-[150px] h-auto opacity-50 scale-x-[-1]"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative max-w-[1440px] mx-auto px-[121px] z-10">
            <h2 className="text-[64px] font-bold text-white text-center mb-16">
              Resultados de Impacto
            </h2>

            {/* Grid 3 Colunas */}
            <div className="grid grid-cols-3 gap-[62px] items-start justify-center">
              
              {/* Coluna 1 */}
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-[128px] font-extrabold text-[#003870] leading-none">
                  {/* AQUI: Trocamos "1000" pelo componente */}
                  <AnimatedCounter target={1000} duration={2500} />
                </span>
                <p className="text-[32px] text-white mt-4">
                  Jovens <br /><strong>atingidos</strong>
                </p>
              </div>

              {/* Coluna 2 */}
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-[128px] font-extrabold text-[#003870] leading-none">
                  {/* AQUI: Trocamos "110" pelo componente */}
                  <AnimatedCounter target={130} duration={2000} />
                </span>
                <p className="text-[32px] text-white mt-4">
                  <strong>Jovens formados</strong><br /> em programas
                </p>
              </div>

              {/* Coluna 3 */}
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-[128px] font-extrabold text-[#003870] leading-none">
                  {/* AQUI: Trocamos "180" pelo componente */}
                  <AnimatedCounter target={180} duration={2200} />
                </span>
                <p className="text-[32px] text-white mt-4">
                  <strong>Mentores</strong><br /> formados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.6 Sessão "Pilares de Atuação" */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[1440px] mx-auto px-[121px]">
            {/* Título */}
            <h2 className="text-[64px] font-extrabold text-[#003870] text-center mb-12">
              Pilares de Atuação
            </h2>

            {/* Grid de Cards */}
            <div className="grid grid-cols-3 gap-8">
              {/* Card 1 - Projetos Específicos */}
              <div className="bg-white rounded-[30px] shadow-lg overflow-hidden">
                {/* Topo - Imagem com Overlay */}
                <div className="relative h-[200px] bg-gray-200 rounded-t-[30px] overflow-hidden">
                  <Image
                    src="/assents/images/pilar-img.png"
                    alt="Projetos Específicos"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 
                      className="text-[40px] font-bold text-white text-center"
                      dangerouslySetInnerHTML={{ __html: "Projetos<br>Específicos" }}
                    />
                  </div>
                </div>

                {/* Corpo - Texto */}
                <div className="p-8">
                  <h4 className="text-[20px] font-bold text-[#003870] mb-4 text-center">
                    <span dangerouslySetInnerHTML={{ __html: "Conexão com o<br>Mundo Profissional" }} />
                  </h4>
                  <div className="text-[16px] font-normal text-[#6B6D6E] space-y-3">
                    <p>
                      <strong>O QUE:</strong> Expandir a visão dos jovens sobre possibilidades educacionais e de carreira, fortalecendo referências positivas e a confiança em seu próprio potencial.
                    </p>
                    <p>
                      <strong>COMO:</strong> Workshops e palestras em organizações parceiras, mentorias de curta duração e experiências em empresas de tecnologia aproximam os jovens do mercado de trabalho e despertam novas perspectivas de futuro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Programas de até 6 meses */}
              <div className="bg-white rounded-[30px] shadow-lg overflow-hidden">
                {/* Topo - Imagem com Overlay */}
                <div className="relative h-[200px] bg-gray-200 rounded-t-[30px] overflow-hidden">
                  <Image
                    src="/assents/images/pilar-img.png"
                    alt="Programas de Carreira"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 
                      className="text-[40px] font-bold text-white text-center"
                      dangerouslySetInnerHTML={{ __html: "Programas de<br>Carreira" }}
                    />
                  </div>
                </div>

                {/* Corpo - Texto */}
                <div className="p-8">
                  <h4 className="text-[20px] font-bold text-[#003870] mb-4 text-center">
                    <span dangerouslySetInnerHTML={{ __html: "Desenvolvimento<br>de Talentos" }} />
                  </h4>
                  <div className="text-[16px] font-normal text-[#6B6D6E] space-y-3">
                    <p>
                      <strong>O QUE:</strong> Desenvolver competências técnicas e comportamentais necessárias para o ingresso e a permanência no mundo do trabalho, com foco em carreiras em tecnologia e no acesso a oportunidades.
                    </p>
                    <p>
                      <strong>COMO:</strong> Capacitações práticas, mentorias de longa duração, suporte emocional e psicológico, além de vivências estruturadas, preparam os jovens para atuar de forma qualificada e confiante no mercado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Rede de Talentos */}
              <div className="bg-white rounded-[30px] shadow-lg overflow-hidden">
                {/* Topo - Imagem com Overlay */}
                <div className="relative h-[200px] bg-gray-200 rounded-t-[30px] overflow-hidden">
                  <Image
                    src="/assents/images/pilar-img.png"
                    alt="Rede de Talentos"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 
                      className="text-[40px] font-bold text-white text-center"
                      dangerouslySetInnerHTML={{ __html: "Rede de<br>Talentos" }}
                    />
                  </div>
                </div>

                {/* Corpo - Texto */}
                <div className="p-8">
                  <h4 className="text-[20px] font-bold text-[#003870] mb-4 text-center">
                    <span dangerouslySetInnerHTML={{ __html: "Emprego e<br>Ensino Superior" }} />
                  </h4>
                  <div className="text-[16px] font-normal text-[#6B6D6E] space-y-3">
                    <p>
                      <strong>O QUE:</strong> Promover ascensão socioeconômica e melhoria da qualidade de vida por meio da empregabilidade e do acesso à educação.
                    </p>
                    <p>
                      <strong>COMO:</strong> Apoio direto na conquista do primeiro emprego, bolsas de graduação 100% gratuitas, parcerias estratégicas com empresas para divulgação e indicação de jovens talentos, e a integração em uma rede de oportunidades que amplia horizontes e promove a mobilidade social.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="flex justify-center mt-[81px]">
              <Link href="https://mailchi.mp/pulsemais/inscricoes2026" target="_blank">
                <button
                  className="bg-[#003870] text-white text-[24px] font-bold rounded-full hover:bg-[#33B458] transition-all duration-300"
                  style={{ width: '615px', height: '81px' }}
                >
                  Quero ser Pulser
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2.7 Sessão "Quero Apoiar" - Reutilizada da Home */}
        <section className="w-full py-16 flex justify-center">
          <div
            className="relative w-[1205px] h-[292px] rounded-[15px] overflow-hidden flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url('/assents/images/queroapoiar-img.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-[65px] font-bold text-white text-center">
              Quero apoiar
            </h2>
            <div className="flex flex-row gap-[105px] mt-[30px]">
              <Link href="https://mailchi.mp/pulsemais/mentores-turma3">
                <button
                  className="bg-transparent border border-white text-white text-[16px] font-bold rounded-[50px] hover:bg-white hover:text-[#003870] transition-all duration-300"
                  style={{ width: '313px', height: '51px' }}
                >
                  Seja Mentor Voluntário
                </button>
              </Link>
              <Link href="/apoie">
                <button
                  className="bg-transparent border border-white text-white text-[16px] font-bold rounded-[50px] hover:bg-white hover:text-[#003870] transition-all duration-300"
                  style={{ width: '313px', height: '51px' }}
                >
                  Torne-se nosso parceiro
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2.8 Footer Desktop */}
        <FooterDesktop />
      </div>

      {/* ========== VERSÃO MOBILE ========== */}
      <div className="block md:hidden w-full overflow-x-hidden">
        {/* 2.1 Header Mobile */}
        <HeaderMobile />

      
       {/* 2.2 Hero Section (Imagem Full Width + Texto Sobreposto) */}
       <section className="w-full flex justify-center mt-[124px]">
          {/* w-full sem px-4 para ir de ponta a ponta */}
          <div className="relative w-full h-[269px] overflow-hidden">
            
            {/* 1. Imagem de Fundo */}
            <Image
              src="/assents/images/hero-sobre-mobile.png"
              alt="Hero Sobre Mobile"
              fill
              className="object-cover"
            />

            {/* 2. Overlay Escuro */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* 3. Texto Sobreposto */}
            <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
              <h1 className="text-[28px] font-bold text-[#FCC41F] text-center leading-tight drop-shadow-md">
                Conheça jovens<br />
                empregados e<br />
                que acessaram o<br />
                ensino superior!
              </h1>
            </div>
          </div>
        </section>

        {/* 2.3 Vídeo Institucional */}
       
        <section className="w-full flex justify-center mt-[45px] mb-[40px] px-4">
          
          <div className="w-full max-w-[350px] aspect-video rounded-[15px] overflow-hidden shadow-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/djpjV28WllM?si=ub-JPmc4bVLlvVoc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </section>

        {/* 2.4 Seção "Resultados de Impacto" */}
        <section
          className="relative w-full bg-[#33B458] py-16 overflow-hidden flex flex-col items-center"
          style={{
            clipPath: 'polygon(0 30px, 100% 0, 100% calc(100% - 30px), 0 100%)'
          }}
        >
          {/* Elementos Decorativos - Shapes Brancos */}
          {/* Shape 1 - Topo Direito */}
          <div className="absolute top-0 right-[-30px] opacity-20 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={150}
              height={150}
              className="w-[150px] h-auto"
            />
          </div>

          {/* Shape 2 - Topo Esquerdo */}
          <div className="absolute top-[15%] left-[-20px] opacity-20 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={120}
              height={120}
              className="w-[120px] h-auto"
            />
          </div>

          {/* Shape 3 - Meio Direito */}
          <div className="absolute top-[45%] right-[-20px] opacity-20 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
          </div>

          {/* Shape 4 - Base Esquerda */}
          <div className="absolute bottom-[20%] left-[-20px] opacity-20 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={110}
              height={110}
              className="w-[110px] h-auto"
            />
          </div>

          {/* Shape 5 - Canto Inferior */}
          <div className="absolute bottom-0 left-0 opacity-20 z-0">
            <Image
              src="/assents/backgrounds/shape-plus-white.svg"
              alt="Shape White"
              width={80}
              height={80}
              className="w-[80px] h-auto"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <h2 className="text-[40px] font-bold text-white text-center mb-12">
              Resultados de Impacto
            </h2>

            {/* Métricas - Layout Vertical */}
            <div className="flex flex-col gap-12 items-center">
              {/* Métrica 1 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[96px] font-extrabold text-[#003870] leading-none">
                  <AnimatedCounter target={1000} duration={2500} />
                </span>
                <p className="text-[24px] text-white mt-2">
                  <strong>Jovens</strong> atingidos
                </p>
              </div>

              {/* Métrica 2 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[96px] font-extrabold text-[#003870] leading-none">
                  <AnimatedCounter target={130} duration={2000} />
                </span>
                <p className="text-[24px] text-white mt-2">
                  <strong>Jovens formados</strong> em programas
                </p>
              </div>

              {/* Métrica 3 */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[96px] font-extrabold text-[#003870] leading-none">
                  <AnimatedCounter target={180} duration={2200} />
                </span>
                <p className="text-[24px] text-white mt-2">
                  <strong>Mentores</strong> formados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Seção "Pilares de Atuação" */}
        <section className="w-full bg-white py-12 px-6">
          {/* Título - REMOVIDO: underline decoration-4 underline-offset-8 */}
          <h2 className="text-[48px] font-extrabold text-[#003870] text-center mb-8">
            Pilares de Atuação
          </h2>

          {/* Cards - Layout Vertical */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Projetos Específicos */}
            <div className="relative w-full h-[180px] rounded-[30px] overflow-hidden flex flex-col justify-center items-center text-center px-4">
              <Image
                src="/assents/images/pilar-img.png"
                alt="Projetos Específicos"
                fill
                className="object-cover"
              />
              {/* Overlay com Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003870] to-[#33B458] opacity-80"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
                  Projetos Específicos
                </h3>
                <p className="text-sm font-normal mt-1 text-white drop-shadow-md">
                  Conexão com o Mundo Profissional
                </p>
              </div>
            </div>

            {/* Card 2 - Programas de até 6 Meses */}
            <div className="relative w-full h-[180px] rounded-[30px] overflow-hidden flex flex-col justify-center items-center text-center px-4">
              <Image
                src="/assents/images/pilar-img.png"
                alt="Programas de Carreira"
                fill
                className="object-cover"
              />
              {/* Overlay com Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003870] to-[#33B458] opacity-80"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
                  Programas de Carreira
                </h3>
                <p className="text-sm font-normal mt-1 text-white drop-shadow-md">
                  Desenvolvimento de Talentos
                </p>
              </div>
            </div>

            {/* Card 3 - Rede de Talentos */}
            <div className="relative w-full h-[180px] rounded-[30px] overflow-hidden flex flex-col justify-center items-center text-center px-4">
              <Image
                src="/assents/images/pilar-img.png"
                alt="Rede de Talentos"
                fill
                className="object-cover"
              />
              {/* Overlay com Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003870] to-[#33B458] opacity-80"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
                  Rede de Talentos
                </h3>
                <p className="text-sm font-normal mt-1 text-white drop-shadow-md">
                  Emprego e Ensino Superior
                </p>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="mt-8 w-full">
            <Link href="https://mailchi.mp/pulsemais/inscricoes2026" target="_blank" className="block">
              <button className="w-full h-[60px] bg-[#FBBF24] text-white font-bold rounded-full">
                Venha ser Pulser
              </button>
            </Link>
          </div>
        </section>

        {/* 2.6 Seção "Torne-se nosso parceiro" */}
        <section className="relative bg-white pt-[57px] pb-[48px] overflow-hidden">
          {/* Elementos Decorativos */}
          <div className="absolute right-0 top-0 translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-amarelo.svg"
              alt="Decoration"
              width={91}
              height={127}
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-0 top-[60%] -translate-x-[30%] z-0 pointer-events-none">
            <Image
              src="/assents/brand/plus-verde.svg"
              alt="Decoration"
              width={46}
              height={64}
              className="w-full h-full"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10">
            <h2 className="text-[48px] font-bold text-[#486284] text-center mx-auto w-[300px] h-[156px]">
              Torne-se<br />nosso<br />parceiro.
            </h2>
            <div className="mt-[80px] flex justify-center">
              <CTAButton variant="gray" href="/apoie">
                Saiba Mais
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2.7 Footer Mobile */}
        <FooterMobile />
      </div>
    </>
  )
}

