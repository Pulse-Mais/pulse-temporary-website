// Texto do Aviso de Privacidade do Pulsar 2027.
// Fica separado do page.tsx para não poluir o arquivo principal.
export const PrivacyNotice = () => (
  <div className="flex flex-col gap-[10px] text-[12px] font-light leading-[17px]">
    <p className="text-[13px] font-bold uppercase">Aviso de Privacidade - Pulsar 2027</p>

    <div>
      <p className="font-bold">1. Quem somos</p>
      <p>
        A Associação Pulse Mais, inscrita no CNPJ nº 48.621.188/0001-11, é responsável pelo tratamento dos dados
        pessoais coletados por meio do formulário de inscrição do Pulsar 2027.
      </p>
    </div>

    <div>
      <p className="font-bold">2. Quais dados coletamos</p>
      <p>Coletamos os seguintes dados pessoais dos inscritos: nome, e-mail, telefone, empresa e cargo.</p>
    </div>

    <div>
      <p className="font-bold">3. Para quais finalidades utilizamos seus dados</p>
      <p>Os dados poderão ser utilizados para:</p>
      <ul className="mt-[4px] list-disc pl-[18px]">
        <li>Gerenciar inscrições e participação no Pulsar 2027;</li>
        <li>Organizar e operacionalizar o evento;</li>
        <li>Realizar prestação de contas e mensurar os resultados e o impacto do evento;</li>
        <li>Manter relacionamento institucional com participantes;</li>
        <li>
          Enviar comunicações sobre iniciativas, eventos e oportunidades da Associação Pulse Mais, quando
          autorizado;
        </li>
        <li>
          Compartilhar dados com patrocinadores do Pulsar 2027, mediante autorização específica, para finalidades
          comerciais e de marketing.
        </li>
      </ul>
    </div>

    <div>
      <p className="font-bold">4. Compartilhamento de dados</p>
      <p>
        Os dados pessoais poderão ser compartilhados com patrocinadores que investirem na cota de R$ 30 mil do
        Pulsar 2027, exclusivamente para as finalidades comerciais e de marketing informadas no Termo de
        Compartilhamento de Dados.
      </p>
      <p className="mt-[6px]">
        Os patrocinadores ainda não estão definidos no momento da inscrição. A identificação das organizações
        destinatárias deverá ser disponibilizada aos participantes antes do compartilhamento dos dados.
      </p>
    </div>

    <div>
      <p className="font-bold">5. Uso de imagem e voz</p>
      <p>
        A captação e a utilização de imagem e voz dos participantes para divulgação institucional do Pulsar 2027
        dependerão de autorização específica, apresentada no formulário de inscrição.
      </p>
    </div>

    <div>
      <p className="font-bold">6. Armazenamento e retenção</p>
      <p>
        Os dados pessoais serão armazenados em ambientes com medidas de segurança adequadas e mantidos pelo período
        necessário às finalidades do tratamento e ao cumprimento de obrigações legais aplicáveis.
      </p>
      <p className="mt-[6px]">
        Os critérios e prazos específicos de retenção e exclusão serão definidos pela Associação Pulse Mais,
        considerando as finalidades do tratamento e a legislação aplicável.
      </p>
    </div>

    <div>
      <p className="font-bold">7. Direitos dos titulares</p>
      <p>
        Nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), os titulares poderão solicitar,
        conforme aplicável, confirmação da existência de tratamento, acesso aos dados, correção de informações
        incompletas ou desatualizadas, informações sobre compartilhamento, revogação do consentimento e demais
        direitos previstos em lei.
      </p>
    </div>

    <div>
      <p className="font-bold">8. Contato</p>
      <p>
        Para dúvidas, solicitações ou exercício de direitos relacionados aos dados pessoais, entre em contato pelo
        e-mail{' '}
        <a href="mailto:juliano@pulsemais.org.br" className="underline">
          juliano@pulsemais.org.br
        </a>
        .
      </p>
      <p className="mt-[6px]">
        Este Aviso de Privacidade poderá ser atualizado para refletir mudanças nas práticas de tratamento de dados ou
        nas exigências legais aplicáveis.
      </p>
    </div>
  </div>
)