import { Dialog } from "@/components/global-components/Dialog"
 

export const Questions = () => {

    return (
        <section className='flex flex-col py-20 max-w-[65rem] m-auto w-full gap-3'>
            
            <h2 className='text-3xl font-semibold py-8 text-center'>Dúvidas Frequentes</h2>

            <Dialog 
                Question="O que é o Programa Pulse Mais?"
                Text="O Programa Pulse Mais é uma iniciativa da ONG Pulse Mais que oferece capacitação profissional para jovens de 17 a 24 anos, com bolsa 100% gratuita, para o mercado de tecnologia. O objetivo é prepará-lo(a) para conquistar o primeiro emprego em empresas de tecnologia, através de uma metodologia exclusiva que integra cursos e mentoria individualizada."
            />
            <Dialog 
                Question="Quem pode participar do Programa Pulse Mais?"
                Text="Para participar, é necessário atender aos seis pré-requisitos:
                (1) Ter entre 17 e 24 anos até a data de início do curso.
                (2) Estar cursando o terceiro ano do Ensino Médio em 2025, ter concluído o Ensino Médio em rede pública ou ter sido bolsista em rede privada durante todo o Ensino Médio.
                (3) Ter renda familiar per capita de até 1,5 salário mínimo.
                (4) Residir em regiões periféricas.
                (5) Não estar empregado formalmente.
                (6) Demonstrar interesse na área de tecnologia."
            />
            <Dialog 
                Question="Qual é a duração e a carga horária do programa?"
                Text="O programa tem duração de 6 meses, de janeiro a junho de 2025. A carga horária total é de 192 horas, sendo 8 horas de dedicação semanal, das quais 50% serão de encontros online e aulas práticas ao vivo."
            />
            <Dialog 
                Question="Quais áreas de tecnologia o programa aborda?"
                Text="O programa permite que os alunos experimentem diferentes áreas da tecnologia, como Desenvolvimento Full-Stack, Análise de Dados, Cibersegurança e Computação em Nuvem, ajudando-os a decidir em qual área deseja se especializar na carreira."
            />
            <Dialog 
                Question="Como faço para me pré-inscrever no Programa Pulse Mais?"
                Text="A pré-inscrição é realizada de forma online através da nossa página (Clique aqui). Depois de realizar sua pré-inscrição, você deve completá-la para concorrer a sua vaga em uma das turmas do 1º semestre de 2025 do Programa Pulse Mais. O período de inscrições vai até 23h59 de 18 de outubro de 2024."
            />
            <Dialog 
                Question="Quais são as etapas do processo seletivo?"
                Text="O processo seletivo envolve as seguintes etapas:
                Realização da pré-inscrição.
                Preenchimento do formulário oficial para concorrer a sua vaga.
                Envio de uma carta de intenção para entrar no Programa Pulse Mais.
                Participação do encontro online informativo e para tirar dúvidas.
                Envio de um vídeo com apresentação pessoal, confirmando seu interesse e compromisso com a oportunidade.
                Avaliação final e resultado do processo seletivo.
                Confirmação de matrícula e envio de documentos."
            />
            <Dialog 
                Question="Quais são os critérios de seleção?"
                Text="Os candidatos serão selecionados com base no cumprimento dos pré-requisitos, qualidade da carta de intenção, participação do encontro online informativo, envio do vídeo final e da documentação necessária para realização da matrícula."
            />
            <Dialog 
                Question="Quando receberei a resposta sobre minha inscrição?"
                Text="Os candidatos serão informados sobre a aprovação ou reprovação no processo seletivo entre 30 de setembro e 31 de outubro de 2024."
            />
            <Dialog 
                Question="Quantas vagas estão disponíveis?"
                Text="Estão disponíveis 180 vagas para jovens que desejam iniciar sua capacitação profissional na área de tecnologia."
            />
            <Dialog 
                Question="Como será o formato das aulas?"
                Text="As aulas serão realizadas em duas modalidades:
                Modalidade Híbrida: As aulas presenciais ocorrerão no Centro Universitário Católico Ítalo-Brasileiro, em São Paulo, e compõem 50% da dedicação de horas no programa (Av. João Dias, 2046 - Santo Amaro, São Paulo - SP, 04724-003, ao lado estação João Dias da linha Esmeralda).
                Modalidade Online: Para alunos que preferirem a modalidade virtual, as aulas ao vivo, que compõem 50% da dedicação de horas no programa, serão transmitidas por uma plataforma de ensino online."
            />
            <Dialog 
                Question="Quando as aulas começarão?"
                Text="As aulas começarão no dia 13 de janeiro de 2025."
            />
            <Dialog 
                Question="O que acontece após a conclusão do Programa? Quais benefícios eu recebo?"
                Text="Os alunos que concluírem o programa terão a oportunidade de se conectar com uma rede de oportunidades de emprego (jovem aprendiz, assistente ou estágio) em empresas parceiras, concorrer a bolsas de 100% para o ensino superior no Centro Universitário Católico Ítalo Brasileiro (cursos presenciais, semi-presenciais e EAD), além de ter acesso a eventos exclusivos, certificações em tecnologia, novas mentorias e muito mais! 
                A Rede de Oportunidades da Pulse Mais para ex-alunos é vitalícia e vai te acompanhar pelos próximos anos de sua carreira."
            />
            <Dialog 
                Question="Como posso esclarecer dúvidas sobre o processo seletivo do Programa Pulse Mais?"
                Text="Dúvidas podem ser enviadas para o telefone de atendimento da Pulse Mais: 11 98821-3886."
            />
        </section>
    )
}