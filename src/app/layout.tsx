import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'


const PoppinsFont = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pulse Mais',
  description: 'Impulsione sua qualificação profissional para tecnologia com a Pulse Mais e tenha acesso a mentorias, oportunidades de vagas e bolsas de estudos gratuitas para a universidade!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='!scroll-smooth w-full overflow-x-hidden'>
    <Head>
      {/* Google Analytics Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-K4PBJV9XJC"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K4PBJV9XJC');
          `,
        }}
      />

      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC6F3J7R');
          `,
        }}
      />
    </Head>
      <body className={`${PoppinsFont.className} w-full overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PC6F3J7R" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {children}

        {/* RD Station Marketing Script */}
        <Script
          strategy="afterInteractive"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/1a8c27c1-fe9e-434d-b5d0-f41d7adf2564-loader.js"
        />

      </body>
    </html>
  )
}