import type { ReactNode } from 'react'

// Aviso de Privacidade do Pulsar 2027 - versão 1.0 (vigência: 15 de outubro de 2026).
// Fica separado do page.tsx para não poluir o arquivo principal.

const Email = () => (
  <a href="mailto:juliano@pulsemais.org.br" className="underline">
    juliano@pulsemais.org.br
  </a>
)

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="flex flex-col gap-[6px]">
    <p className="font-bold">{title}</p>
    {children}
  </div>
)

export const PrivacyNotice = () => (
  <div className="flex flex-col gap-[12px] text-[12px] font-light leading-[17px]">
    <div>
      <p className="text-[13px] font-bold uppercase">Aviso de Privacidade</p>
      <p className="text-[13px] font-bold uppercase">Pulsar 2027</p>
    </div>

    <p>
      O Pulsar 2027 é um evento promovido pela Associação Pulse Mais, inscrita no CNPJ sob nº 48.621.188/0001-11, com o
      objetivo de arrecadar recursos e fortalecer suas iniciativas e projetos, conforme sua finalidade estatutária.
    </p>
    <p>
      Este Aviso de Privacidade explica como a Pulse Mais coleta, utiliza, armazena e compartilha os dados pessoais dos
      inscritos e participantes do evento, bem como quais são os seus direitos e como exercê-los.
    </p>
    <p>Ao longo deste documento, a Associação Pulse Mais será denominada simplesmente Pulse Mais.</p>

    <Section title="1. Quem é responsável pelos seus dados?">
      <p>
        A Pulse Mais é a controladora dos dados pessoais tratados no contexto do Pulsar 2027. Isso significa que é
        responsável por definir as finalidades e as condições de utilização desses dados, observada a legislação
        aplicável.
      </p>
    </Section>

    <Section title="2. Quais dados coletamos?">
      <p>
        Para realizar a inscrição e organizar o Pulsar 2027, poderemos coletar seu nome, endereço de e-mail, telefone,
        empresa ou organização à qual esteja vinculado, cargo ou função, além de outras informações que você fornecer
        voluntariamente e que sejam pertinentes à organização do evento ou a uma finalidade específica informada pela
        Pulse Mais.
      </p>
      <p>
        Também poderemos manter registros necessários à organização do evento, ao acompanhamento de sua realização e à
        prestação de contas sobre os resultados alcançados.
      </p>
      <p>
        A coleta será limitada às informações pertinentes às finalidades descritas neste Aviso. O formulário não tem
        como finalidade coletar dados pessoais sensíveis.
      </p>
    </Section>

    <Section title="3. Como utilizamos seus dados?">
      <p>
        Utilizamos seus dados pessoais para receber e administrar inscrições, organizar o evento, realizar o
        credenciamento, encaminhar informações sobre o evento e executar as atividades necessárias à sua realização.
      </p>
      <p>
        Os dados também poderão ser utilizados para avaliar os resultados do Pulsar 2027, mensurar seu impacto e
        elaborar relatórios de resultados e prestação de contas a apoiadores, patrocinadores e parceiros. Sempre que
        possível, essas atividades serão realizadas com dados agregados ou anonimizados, sem identificação dos
        participantes.
      </p>
      <p>
        Se você autorizar essa finalidade, poderemos utilizar seus dados para manter contato após o evento, divulgando
        os projetos, programas, ações e eventos da Pulse Mais, apresentando oportunidades de parceria, promovendo
        campanhas de mobilização e solicitando doações ou outras formas de apoio financeiro, conforme descrito no item
        4.
      </p>
      <p>
        Os dados também poderão ser tratados quando necessário ao cumprimento de obrigações legais ou regulatórias, ao
        exercício regular de direitos ou, quando aplicável, com fundamento no legítimo interesse da Pulse Mais ou de
        terceiros, observados os requisitos legais, a necessidade do tratamento e os direitos dos titulares.
      </p>
      <p>
        Cada atividade de tratamento será realizada com fundamento na hipótese legal adequada à sua finalidade, nos
        termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD).
      </p>
    </Section>

    <Section title="4. Você poderá receber comunicações após o evento?">
      <p>
        Sim. Com sua autorização, a Pulse Mais poderá utilizar os dados fornecidos na inscrição para incluí-lo em suas
        ferramentas de gestão de contatos e e-mail marketing e enviar comunicações sobre seus projetos, programas,
        ações sociais, eventos, campanhas de arrecadação, oportunidades de parceria e pedidos de doação ou apoio
        financeiro.
      </p>
      <p>
        Essa autorização será facultativa e não condicionará sua inscrição ou participação no evento. Você poderá
        recusá-la no formulário ou revogá-la posteriormente, sem prejuízo de continuar recebendo informações
        estritamente necessárias à organização do evento ou ao cumprimento de obrigações legais.
      </p>
      <p>
        A autorização poderá ser revogada a qualquer momento, gratuitamente, pelo e-mail <Email />. Você também poderá
        solicitar a interrupção das comunicações por meio das opções de descadastramento disponibilizadas nas
        mensagens, quando existentes.
      </p>
    </Section>

    <Section title="5. Como funciona o uso de imagem, voz e depoimentos?">
      <p>
        Durante o Pulsar 2027, a Pulse Mais poderá realizar registros fotográficos e audiovisuais para documentar o
        evento e divulgar o evento, suas iniciativas e seus resultados. Esses registros poderão ser utilizados em redes
        sociais, no site da Associação, em apresentações, relatórios, campanhas e outros materiais de comunicação
        institucional e de arrecadação de recursos.
      </p>
      <p>
        A Pulse Mais informará previamente os participantes sobre a realização dos registros. Caso não queira que sua
        imagem ou voz seja captada ou utilizada, você poderá manifestar sua oposição no formulário de inscrição, por
        meio da opção específica disponibilizada para essa finalidade, ou comunicar previamente sua decisão pelo
        e-mail <Email />.
      </p>
      <p>
        A manifestação de oposição não prejudicará sua inscrição ou participação no evento. Nessa hipótese, a Pulse
        Mais adotará medidas razoáveis para evitar a captação ou utilização individualizada de sua imagem e voz, sem
        prejuízo da realização de registros gerais do ambiente nos quais você não seja o foco, observados seus
        direitos e as circunstâncias concretas do registro.
      </p>
      <p>
        Entrevistas, depoimentos e outros conteúdos que destaquem individualmente uma pessoa serão utilizados para
        divulgação somente mediante autorização específica, quando exigida pela legislação aplicável. A Pulse Mais
        respeitará as limitações e finalidades informadas no momento da autorização.
      </p>
    </Section>

    <Section title="6. Com quem seus dados poderão ser compartilhados?">
      <p>
        Para organizar e realizar o Pulsar 2027, a Pulse Mais poderá compartilhar os dados pessoais estritamente
        necessários com fornecedores de serviços de inscrição, armazenamento, comunicação, e-mail marketing e outras
        ferramentas tecnológicas, bem como com os patrocinadores e parceiros diretamente envolvidos na realização do
        evento.
      </p>
      <p>
        Os dados também poderão ser compartilhados com autoridades públicas quando exigido pela legislação ou
        necessário ao exercício regular de direitos, conforme a hipótese legal aplicável.
      </p>
      <p>
        No contexto do Pulsar 2027, os dados pessoais informados no formulário de inscrição, como nome, e-mail,
        telefone, empresa e cargo, poderão ser compartilhados com os patrocinadores do evento para fins de
        relacionamento, divulgação de produtos e serviços, eventos, oportunidades comerciais e envio de comunicações
        relacionadas às suas atividades.
      </p>
      <p>
        Caso não deseje esse compartilhamento, você poderá manifestar sua oposição pelo e-mail <Email />. A Pulse Mais
        adotará medidas para atender à oposição aplicável e impedir novos compartilhamentos abrangidos por ela,
        ressalvadas as hipóteses legalmente permitidas.
      </p>
      <p>
        O compartilhamento será limitado aos dados pertinentes às finalidades informadas. A Pulse Mais avaliará a
        necessidade e a adequação dessa operação, inclusive quanto à base legal aplicável e aos direitos e às
        expectativas dos titulares, antes de realizá-la.
      </p>
      <p>
        Os patrocinadores que receberem os dados para suas próprias atividades serão responsáveis pelo tratamento que
        realizarem, inclusive pela definição e observância da base legal aplicável e pelo cumprimento das obrigações
        previstas na legislação de proteção de dados pessoais.
      </p>
      <p>
        Os fornecedores que tratarem dados em nome da Pulse Mais deverão observar as instruções pertinentes, as
        finalidades estabelecidas e as obrigações de proteção de dados aplicáveis.
      </p>
    </Section>

    <Section title="7. Por quanto tempo seus dados serão armazenados e como são protegidos?">
      <p>
        Os dados serão mantidos pelo período necessário às finalidades para as quais foram coletados. Poderão ser
        conservados por período adicional quando necessário ao cumprimento de obrigações legais ou regulatórias, ao
        exercício regular de direitos ou em outras hipóteses permitidas pela legislação.
      </p>
      <p>
        Quando não houver mais necessidade ou fundamento legal para sua conservação, os dados serão eliminados ou
        anonimizados, conforme aplicável.
      </p>
      <p>
        A Pulse Mais adotará medidas técnicas e administrativas compatíveis com a natureza dos dados para protegê-los
        contra acessos não autorizados, perda, alteração, divulgação indevida e outras formas de tratamento
        inadequado. O acesso será limitado às pessoas e aos fornecedores que necessitem dessas informações para
        desempenhar suas atividades.
      </p>
    </Section>

    <Section title="8. Quais são seus direitos e como exercê-los?">
      <p>Nos termos da LGPD, você poderá solicitar, conforme aplicável:</p>
      <ul className="list-disc pl-[18px]">
        <li>confirmação da existência de tratamento e acesso aos seus dados pessoais;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com
          a lei;
        </li>
        <li>portabilidade dos dados, observados os requisitos legais e a regulamentação aplicável;</li>
        <li>informações sobre as entidades públicas e privadas com as quais seus dados são compartilhados;</li>
        <li>informações sobre a possibilidade de não fornecer consentimento e as consequências dessa escolha;</li>
        <li>revogação do consentimento e oposição ao tratamento nas hipóteses previstas na legislação;</li>
        <li>eliminação dos dados tratados com consentimento, ressalvadas as hipóteses legais de conservação;</li>
        <li>
          revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus
          interesses, quando aplicável.
        </li>
      </ul>
      <p>
        Para exercer seus direitos, esclarecer dúvidas ou solicitar a interrupção de comunicações, entre em contato
        pelo e-mail <Email />.
      </p>
      <p>
        Quando o tratamento depender de consentimento, você poderá revogá-lo gratuitamente e por procedimento
        facilitado, enviando um e-mail para o contato acima indicado. A revogação não invalida os tratamentos
        realizados licitamente antes da solicitação e não afasta a conservação dos dados quando houver fundamento
        legal para tanto.
      </p>
    </Section>

    <Section title="9. Atualizações e contato">
      <p>
        Este Aviso poderá ser atualizado para refletir mudanças nas atividades do Pulsar 2027, nas práticas de
        tratamento de dados ou na legislação aplicável. A versão vigente deverá estar disponível na página de inscrição
        ou em outro canal oficial da Pulse Mais.
      </p>
      <p>Se tiver dúvidas sobre este Aviso ou sobre o tratamento de seus dados pessoais, entre em contato:</p>
      <div>
        <p>Associação Pulse Mais</p>
        <p>CNPJ nº 48.621.188/0001-11</p>
        <p>
          E-mail: <Email />
        </p>
      </div>
    </Section>

    <div>
      <p>Versão: 1.0</p>
      <p>Data de vigência: 15 de outubro de 2026</p>
    </div>
  </div>
)