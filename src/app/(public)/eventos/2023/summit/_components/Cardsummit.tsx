'use client'
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Suspense } from "react"
import { Skeleton } from "../../../../../../components/suspense/Skeleton"

export const Cardsummit = () => {



    const Persons = [
        {
            name: "Thiago Lima",
            subdescription: "Fundador e Conselheiro do DPFL",
            description: 'Um certo dia estava refletindo, como um garoto da Vila Medeiros, ZN, conseguiu chegar ao Google, uma das maiores empresas do mundo. As grandes Big Techs estão na região da Faria Lima e cheguei a conclusão que para chegar lá, eu tive muitos mentores durante esses 25 anos de carreira. Esse é o principal motivador do "Da Periferia para Faria Lima", ajudar os jovens da periferia a encontrarem melhores opções de trabalho. Eu estou muito próximo ao Ecossistema de Startups e os founders sempre querem conversar com quem já chegou por lá. Utilizando esse insight, resolvi tomar a frente desse projeto para compartilharmos os nossos erros e acertos com essa molecada que tem muito potencial e que só precisam de algum apoio, muitas vezes emocional ou tão somente uma oportunidade.” ',
            img: "thiago.svg",

        },
        {
            name: "Janina Jacino",
            subdescription: "Educadora Financeira Comportamental, Palestrante, Consultora",
            description: "Como educadora financeira comportamental, tem a missão de conscientizar as pessoas sobre o uso inteligente do dinheiro. Especialista em neurociência da aprendizagem e oferece atendimento personalizado para indivíduos, casais, pais e filhos, além de grupos de convivência socioafetiva. Com ferramentas personalizadas, ajuda pessoas a conviverem confortavelmente com seu dinheiro e destaca a importância do ser antes do ter. Poupar, reter, guardar e proteger o dinheiro são formas inteligentes de alcançar a liberdade financeira e realizar seus sonhos.",
            img: "janina.svg",

        },

        {
            name: "Jamille Barreto",
            subdescription: "Jornalista, especialista em Direitos Humanos, Diversidade e Violência",
            description: "Membra da Diretoria Étnico Racial da Associação Brasileira de Imprensa - ABI; Coletivo Pacto das Pretas; Membra do Comitê Consultivo do Pacto Global da ONU - Raça é Prioridade (representando o Grupo Mulheres do Brasil); voluntária no Comitê de Igualdade Racial do Grupo Mulheres do Brasil; Mentora no projeto da Periferia para Faria Lima, Mentora Expo Favela 23, Apresentadora do Podcast Papo com Gustavo - ABI. Mulher negra, comunicóloga, aventureira, divertida e  apaixonada por F1 e esportes coletivos.",
            img: "jamille.svg",

        },

        {
            name: "Fabio La Selva",
            subdescription: "Head de Learning em Google Cloud",
            description: "Fabio é Head de Learning para América Latina e trabalha no Google há 10 anos. Graduado em Publicidade e Comunicação Social e pós-graduado no CEAG pela FGV. Pós-graduado em Gestão de Negócios pela Supreme Business College de Sydney, Austrália.",
            img: "fabio-1.svg",

        },

        {
            name: "Juliana Aliotte",
            subdescription: "Site Program Manager at Google ",
            description: "Formada em Letras pela USP e mestra em Estudos de Linguagem - Persuasão pela PUC-SP. Com experiência em diferentes indústrias, ela trabalha no Google desde 2016 e atualmente faz parte do time Global de Estratégias de Escritórios. Seu foco principal é melhorar a experiência dos funcionários na região, abrangendo Cultura & Comunidade, Excelência de Operações e Liderança. Além de seu trabalho, Juliana tem paixões como ler, escrever, tocar piano e passar tempo com familiares e amigos.",
            img: "juliana.svg",

        },


        {
            name: "Caio Castro ",
            subdescription: "Piloto, ator e apresentador",
            description: "Caio Castro é um piloto, ator e apresentador com mais de 15 anos de experiência. Além da atuação, ele também se destaca no automobilismo, conquistando títulos e vitórias em competições como Porsche Cup e CopaTruck. Como empresário, ele possui empresas em diferentes áreas, demonstrando sua versatilidade.",
            img: "caio.svg",

        },


        {
            name: "Sandro Andrade",
            subdescription: "Empresário e CEO da holding C3 Group",
            description: "Empresário com formação em Publicidade e Propaganda, é reconhecido por seu estilo agressivo e humor ácido na publicidade. Com mais de 30 anos de experiência, ele é CEO da holding C3 Group, que controla mais de 10 empresas em diversos setores, desde varejo de alimentos até artes urbanas. A C3 é conhecida pela sua agência de marketing 360°, a C3tem, que se destaca pelo gerenciamento de carreiras artísticas bem-sucedidas, incluindo a do ator e piloto Caio Castro, que também é sócio da C3 Group.",
            img: "sandro.svg",

        },


        {
            name: "Walter Becker",
            subdescription: "Gestor empresarial e Empreendedor",
            description: "Walter Augusto Becker Pedroso, é gestor empresarial e empreendedor, Diretor de Relações Institucionais do Instituto Marte (OSCIP); Vice-Presidente do Centro Universitário Ítalo Brasileiro; Diretor Executivo da startup WASP Consultoria em Negócios Ltda. Na área de infraestrutura, gestão e administração de negócios; foi diretor executivo da startup Agropecuária Estrela do Sul na área de agronegócio; fez parte da Comissão de Direito Empresarial e do Tribunal de Ética da OAB/SP. Formado em direito pela Pontifícia Universidade Católica (PUC/SP), com MBA pelo IBMEC em Gestão de Negócios, Administração e Marketing, Formação pelo G4 Educação em Gestão Empresarial; Direito em Startups e Gestão Estratégica de Departamentos Jurídicos pelo INSPER; Gestão Estratégia da Recursos Humanos e Direito Empresarial do Trabalho pela FGV. É coordenador do Projeto Favela Educa, instalando primeiro Polo Físico de Educação Superior dentro de uma comunidade (Paraisópolis), incluindo a capacitação e acesso à educação pelos  moradores e a prestação de serviços à comunidade, como parte da formação dos alunos, sob a coordenação do corpo docente.",
            img: "walter.svg",
        },
        {
            name: "Zé Elias",
            subdescription: "Ex-futebolista brasileiro ",
            description: "Conquistou títulos como titular do time Campeão Paulista e da Copa do Brasil em 1995. Ele também foi convocado para a Seleção Brasileira e ganhou a medalha de bronze no torneio de futebol das Olimpíadas de Atlanta em 1996. Ao longo de sua carreira, ele atuou por equipes como Inter de Milão, Bologna, Olympiakos, Genoa, Santos e Rheindorf. Atualmente, ele é comentarista esportivo nos canais ESPN Brasil.",
            img: "elias.svg",

        },


        {
            name: "Gustavo Cerbasi ",
            subdescription: "Mestre em Finanças e Autor Best-seller",
            description: 'Gustavo Cerbasi é mestre em Finanças e autor de 16 livros, incluindo o best-seller "Casais Inteligentes Enriquecem Juntos". Ele é consultor, professor e palestrante, e seu curso on-line "Inteligência Financeira" formou mais de 19 mil alunos. Além disso, é sócio da SuperRico Projetos de Vida, uma plataforma que busca democratizar o bem-estar financeiro. Suas redes sociais são @gustavocerbasi no Instagram, Gustavo Cerbasi no YouTube e Facebook.',
            img: "gustavo.svg",

        },


        {
            name: "Fábio Seixas",
            subdescription: "Diretor Executivo de Conteúdos",
            description: "Em mais de 25 anos de carreira, passou por veículos como Folha de SP, Rádio Bandeirantes, DAZN e Globo. Atuou como repórter em mais de 150 GPs da F-1, cobriu finais da NBA e comandou equipes de cobertura em Jogos Pan-Americanos, Copas do Mundo e Olimpíadas. Mestrado em Administração Esportiva pela London Metropolitan University.",
            img: "fabio.svg",

        },


        {
            name: "João Palomino",
            subdescription: "CEO Live Sports",
            description: "Repórter de Política e Economia por dez anos da Rede Manchete, SBT e Rede Cultura. Em 1995, tornou-se narrador e apresentador da ESPN. Em 2011, assumiu o cargo de VP de conteúdo e produção, onde ficou até 2019. Em 2013, ganhou o Prêmio Comunique-se de Melhor Executivo de Comunicação do ano.",
            img: "joao.svg",

        },


        {
            name: "Daniel Dias",
            subdescription: "Palestrante e Campeão Paraolímpico",
            description: "Daniel de Faria Dias, passou sua infância e adolescência na cidade de Camanducaia, em Minas Gerais. Nascido com má-formação de seus membros superiores e inferiores. Tem 14 medalhas de ouro em Jogos Paralímpicos, é recordista nos Jogos Parapan-americanos e também em Campeonatos Mundiais. Daniel é ganhador do Troféu Laureus e colecionou muitas medalhas e conquistas durante sua carreira esportiva. Hoje Daniel é palestrante, gestor do Instituto Daniel Dias e empresário.",
            img: "daniel.svg",

        },


        {
            name: "Marco Bravo",
            subdescription: "Head of Google Cloud Brazil",
            description: "Marco Bravo assumiu a operação do Google Cloud no Brasil no início de 2020 estruturando seu plano de rápido crescimento no país e aceleração da transformação digital no mercado corporativo.  Liderou diversas organizações de tecnologia no Brasil e na América Latina ao longo dos últimos 20 anos, entre elas Microsoft, IBM Software, ACI Worldwide e Rational Software, influenciando o mercado de nuvem pública desde seu início.   Por onde esteve, formou sólidas equipes, com a marca do empreendedorismo corporativo,  transformação e alto crescimento, que o acompanham desde o início de sua carreira como pesquisador e empreendedor.   É graduado em Engenharia Eletrônica e Mestre em Telecomunicações pela PUC-Rio, com MBA pela UFRJ Coppead, além de especializações em estratégia e liderança pelo IMD, e em IT Business Value e Machine Learning pelo MIT, além de membro do IBGC.",
            img: "marco.svg",

        },


        {
            name: "Newton Neto",
            subdescription: "Desenvolvedor de negócios digitais",
            description: "Um experiente desenvolvedor de negócios digitais com 20+ anos na indústria de tecnologia, iniciou na programação e expandiu para liderar parcerias globais e construção de negócios. Passagens pela Amcham-Brazil, US Chamber of Commerce, Porto Digital, Meantime/C.E.S.A.R e Ediouro Publicações. Atualmente no Google desde 2001, ele supervisiona parcerias estratégicas e crescimento na América Latina em áreas como Busca, Notícias, Mapas, Livros, Chrome e Impacto Social.",
            img: "newton.svg",

        },


        {
            name: "Edu Moura",
            subdescription: "Diretor da DPFL",
            description: "Engenheiro de formação com carreira dedicada à mobilização de recursos para impacto positivo, Eduardo é Diretor da ONG Da Periferia para Faria Lima, Presidente voluntário da ONG Global Shapers Hub São Paulo I, ligada ao Fórum Econômico Mundial e especialista em negócios de impacto social. Sua motivação está voltada para o protagonismo e empoderamento das juventudes para construção de uma nova economia, mais justa e inclusiva para as pessoas.",
            img: "dudu.svg",

        },


        {
            name: "Lemaestro",
            subdescription: "Cofundador e COO da REDE Gerando Falcões",
            description: "Nasceu na zona leste de SP. Superou uma luta contra dependência de cocaína após sonhar em ser skatista profissional. Na recuperação, descobriu sua voz no Rap e o desejo de impacto social. Criou MCs Pela Educação, expandindo a REDE GF nacionalmente, sendo reconhecido pelo Fórum Econômico Mundial e premiado como jovem transformador. Eleito paulistano nota 10 pela Veja e agraciado com o prêmio TOYP (The Outstanding Pearson Brasil).",
            img: "lamaestro.svg",

        },


        {
            name: "Victor Ladeira",
            subdescription: "Mestre em Políticas Públicas",
            description: "Mestre pela FGV em políticas públicas e responsabilidade social, é experiente em sustentabilidade e projetos sociais, tendo atuado na Vale e ThyssenKrupp. Com vasta atuação no Terceiro Setor, liderou projetos no Instituto Igarapé, Instituto Bola pra Frente e mais. Consultor e mentor para Organizações da sociedade Civil, ele fundou o Instituto Vini Jr., vinculado ao jogador do Real Madrid e Seleção Brasileira. Além disso, é pai de dois filhos e um autor entusiasta de histórias infantis.",
            img: "victor.svg",

        },


        {
            name: "Bruna Seibert",
            subdescription: "Líder de Delivery Excellence Latam no Google",
            description: 'Formação em Publicidade, mestra e doutora em Comportamento pela USP, com umabase sólida de atuação nos últimos 14 anos. "Durante essa jornada, pude aplicar minha expertise em gestão estratégica de negócios e pessoas, tanto em empreendimentos próprios quanto em startups e multinacionais.Como mentora de carreira, tenho o privilégio de orientar e inspirar aqueles que estão embusca de sucesso profissional.Atualmente, tenho a honra de ocupar o cargo de Líder de Delivery Excellence Latam no Google, onde liderei projetos de atração e gestão de jovens talentos."',
            img: "bruna.svg",

        },


        {
            name: "Yale Soares",
            subdescription: "Coordenadora de Programas de Estágio de Software no Google",
            description: "Formada em Relações Internacionais pela PUC Minas e aluna do International Visitor Leadership Program (IVLP) na classe de 2018 de empreendedorismo feminino. Durante a carreira, atuou no ecossistema de inovação e empreendedorismo em Minas Gerais, passando pelo setor público e privado em programas de tecnologia, empreendedorismo e inovação. Atualmente, coordena os programas de estágio em engen",
            img: "yale.svg",

        },


        {
            name: "Augusto Almeida",
            subdescription: "Estagiário do Google de Global Legal Trade",
            description: "Gus, tem 22 anos, um jovem preto, nascido e criado no interior de São Paulo, filho único de pai motorista e mãe diarista e estudante de Relações Internacionais & Economia na FACAMP. Já trabalhou no IPMorgan Chase & Co (Wholesale KYC Operations), Kraft Heinz (Supply Chain Development) e CIA de Talentos (Financial Planning and Analysis). Durante a faculdade, fez parte de grupos de estudos como Harmony with Nature, Socio-Economic Internationalization e do Coletivo Feminista da FACAMP,; foi diretor e escreveu um artigo para um Comite de simulações da ONU sobre Youth, Peace , and Security; além de ter sido Embaixador do Jornada Para o Futuro (by Cia de Talentos); foit também Embaixador e Líder da Frente de Primeiro Emprego do Jovens do Brasil.",
            img: "augusto.svg",

        },

        {
            name: "Felipe Shimamura ",
            subdescription: "Medalhista na Olimpíada Internacional de Matemática (IMO)",
            description: 'Conquistou no Japão a medalha de bronze na Olimpíada Internacional de Matemática (IMO) em 2023, representando o Brasil. Obteve 37 medalhas em competições acadêmicas nacionais e internacionais, incluindo 6 "top golds" e 20 ouros, em várias áreas como matemática, informática, robótica, física, astronomia e química. Jogando xadrez dos 7 aos 12 anos foi Campeão Brasileiro e Paulista de Xadrez escolar, classificando-se para o campeonato mundial.',
            img: "felipe.svg",

        },


        {
            name: "Fabricio Cardoso",
            subdescription: "Founder SoulCode Academy",
            description: "Fundador e Diretor Geral da SoulCode Academy, uma Edtech brasileira dedicada à educação tecnológica e inclusão social. Com 20 anos de experiência em Tecnologia e Transformação Digital, atuou como Managing Director LATAM da Kenshoo e Sócio da EY, focando em inovação tecnológica. Em 2013, fundou com sucesso a InWave, empresa de Tecnologia, Marketing Digital e e-Commerce, adquirida pela EY em 2015. Também ocupou cargos de destaque na Microsoft e Oracle do Brasil. Seu maior legado é a SoulCode Academy, onde promove a diversidade, equidade e empregabilidade, capacitando indivíduos a prosperar em um mundo digital em constante evolução.",
            img: "fabricio.svg",

        },

    ];

    return (
        <>
            {Persons.map((person, index) => {
                return (

                    <aside className="left-0 m-auto relative w-72 h-96 shadow-xl group rounded-2xl opacity-1 transition-all delay-300 duration-300 max-lg:m-auto" key={index} >
                        <div className="h-full z-20 relative flex items-center justify-end flex-col text-white transition-all lg:group-hover:hidden py-10">
                            <h4 className="font-extrabold text-2xl px-3">{person.name}</h4>
                            <p className="text-center px-3 font-bold">{person.subdescription}</p>
                        </div>
                        <Image src={`/assents/youngers/${person.img}`} alt={`Uma curta apresentação sobre ${person.name}, contendo sua foto e uma breve descrição`} fill className="transition-all brightness-75 lg:group-hover:opacity-80 z-0 rounded-lg" loading="lazy" />
                        <div className="shadow-xl lg:group-hover:overflow-y-auto lg:group-hover:bg-white lg:group-hover:h-full absolute bg-transparent w-full h-[0.1px] bottom-0 transition-all delay-200 origin-bottom rounded-lg py-5">
                            <div className="px-4 py-3 hidden lg:group-hover:block">
                                <h5 className="hidden lg:group-hover:block font-extrabold text-left text-xl text-green-custom">{person.name}</h5>
                            </div>
                            <p className="text-justify px-4 py-3 text-base hidden lg:group-hover:block">{person.description}</p>
                        </div>
                    </aside>

                )
            })}
        </>
    )


}