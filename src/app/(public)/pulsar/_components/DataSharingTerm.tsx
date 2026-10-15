// Termo de Autorização para Compartilhamento de Dados Pessoais - Pulsar 2027.
export const DataSharingTerm = () => (
  <div className="flex flex-col gap-[10px] text-[12px] font-light leading-[17px]">
    <p className="text-[13px] font-bold uppercase">
      Termo de Autorização para Compartilhamento de Dados Pessoais - Pulsar 2027
    </p>

    <p>
      Ao marcar a opção de autorização no formulário de inscrição, declaro estar ciente e concordar com as condições
      descritas neste termo.
    </p>

    <div>
      <p className="font-bold">1. Dados compartilhados</p>
      <p>
        Autorizo o compartilhamento dos seguintes dados pessoais fornecidos no formulário de inscrição do Pulsar
        2027:
      </p>
      <ul className="mt-[4px] list-disc pl-[18px]">
        <li>Nome;</li>
        <li>E-mail;</li>
        <li>Telefone;</li>
        <li>Empresa;</li>
        <li>Cargo.</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2. Destinatários</p>
      <p>
        Os dados poderão ser compartilhados com as organizações que adquirirem cotas de investimento de R$ 30 mil no
        Pulsar 2027.
      </p>
      <p className="mt-[6px]">
        Os patrocinadores ainda não estão definidos no momento da inscrição. A Associação Pulse Mais deverá
        disponibilizar a identificação dos destinatários antes de compartilhar os dados pessoais.
      </p>
    </div>

    <div>
      <p className="font-bold">3. Finalidades do compartilhamento</p>
      <p>
        Os patrocinadores poderão utilizar os dados compartilhados para finalidades comerciais e de marketing,
        incluindo divulgação de produtos, serviços, iniciativas, eventos e oportunidades de suas respectivas
        organizações.
      </p>
    </div>

    <div>
      <p className="font-bold">4. Caráter da autorização</p>
      <p>
        A autorização para compartilhamento é facultativa e não constitui condição para inscrição ou participação no
        Pulsar 2027.
      </p>
      <p className="mt-[6px]">
        A recusa em autorizar o compartilhamento não prejudicará a inscrição ou a participação no evento.
      </p>
    </div>

    <div>
      <p className="font-bold">5. Revogação da autorização</p>
      <p>
        O titular poderá solicitar a revogação de seu consentimento a qualquer momento, mediante contato com a
        Associação Pulse Mais pelo e-mail{' '}
        <a href="mailto:juliano@pulsemais.org.br" className="underline">
          juliano@pulsemais.org.br
        </a>
        , observados os efeitos da revogação e as condições previstas na legislação aplicável.
      </p>
      <p className="mt-[6px]">
        A revogação não torna ilícitos os tratamentos realizados anteriormente com base no consentimento válido.
      </p>
    </div>

    <div>
      <p className="font-bold">6. Informações adicionais</p>
      <p>
        O tratamento dos dados pessoais pela Associação Pulse Mais está descrito no Aviso de Privacidade do Pulsar
        2027.
      </p>
      <p className="mt-[6px]">
        Ao selecionar a opção de autorização, declaro que tive acesso a este termo e compreendi as finalidades
        informadas para o compartilhamento dos meus dados pessoais.
      </p>
    </div>
  </div>
)