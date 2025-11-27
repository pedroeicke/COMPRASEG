import { Shield, Target, Eye, Lock, Siren, Truck, Gavel, Flame, Building2, Users, Anchor, Plane, Crosshair, Scale, Landmark } from 'lucide-react';
import { NavItem, Speaker, Coordinator, Reason } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O Compraseg', href: '#sobre' },
  { label: 'Para quem é', href: '#publico' },
  { label: 'Motivos', href: '#motivos' },
  { label: 'Coordenação', href: '#coordenacao' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Data e Local', href: '#local' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'Contato', href: '#contato' },
];

export const REASONS: Reason[] = [
  {
    title: 'ESPECIFICAR',
    description: 'Os melhores produtos e serviços disponíveis no mercado e as soluções tecnológicas mais adequadas para as demandas da Segurança Pública.',
    icon: Target
  },
  {
    title: 'RESOLVER',
    description: 'Questões técnicas e jurídicas e casos práticos sobre contratações da Segurança Pública.',
    icon: Gavel
  },
  {
    title: 'ANTECIPAR',
    description: 'A identificação de riscos às contratações da Segurança Pública e desenhar previamente as medidas eficazes para a solução.',
    icon: Eye
  },
  {
    title: 'PROTEGER',
    description: 'Os gestores da Segurança Pública, evitando-se a responsabilização por falhas evitáveis.',
    icon: Shield
  }
];

export const COORDINATORS: Coordinator[] = [
  {
    name: "Álvaro Capagio",
    image: "https://picsum.photos/id/1005/400/400", // Placeholder
    bio: [
      "Regulador Federal, ocupante de cargo de Especialista em Regulação privativo de bacharel em Direito. Egresso da Força Aérea Brasileira, tendo exercido suas funções militares no aceite técnico e operações assistidas para implantação de sítios aeronáuticos do Sistema de Vigilância da Amazônia e do Quarto Centro Integrado de Defesa Aérea e Controle de Tráfego Aéreo - Cindacta IV.",
      "É Doutorando em Direito da Regulação pela Universidade de Brasília, Mestre em Direito Internacional e Sustentabilidade pela Universidade Federal de Santa Catarina e Especialista em Direito Público pela Escola Paulista da Magistratura. Diplomado pelo Curso de Altos Estudos de Política e Estratégia da Escola Superior de Guerra e pelo Curso Superior de Defesa.",
      "É professor dos cursos de pós-graduação em Licitações e Contratos do Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa e da Escola Mineira de Direito. Professor do Curso de Gestão de Riscos Contratuais do Instituto Internacional de Inovação em Políticas Públicas e Soluções.",
      "Autor de diversos livros jurídicos, dentre eles: “Nova Lei de Licitações e Contratos Administrativos” e “Curso de Direito Administrativo”, publicados pela editora Saraiva Jur.",
      "É avaliador líder ISSO 17020 certificado pela Sociedade Brasileira de Metrologia. Foi membro titular do Comitê Brasileiro de Normalização e do Comitê Brasileiro de Avaliação da Conformidade."
    ]
  },
  {
    name: "Murilo Frigeri",
    image: "https://picsum.photos/id/1012/400/400", // Placeholder
    bio: [
      "É Oficial de Polícia Militar. Chefe da Seção de Desenvolvimento e Pesquisa do Centro de Material Bélico da Polícia Militar do Estado de São Paulo. Graduado em Ciências Policiais de Segurança e Ordem Pública pela Academia de Polícia Militar do Barro Branco. Graduando em Engenharia Mecânica pela Faculdade Estácio de São Paulo.",
      "Atribuições profissionais de pesquisa, especificação, criação de Termo de Referência e métodos de controle de qualidade para compras institucionais e renovação de equipamentos da Polícia Militar.",
      "Atuação nos grupos de trabalho para atualização da legislação de material bélico; suportes de armamentos em viaturas policiais; estudo técnico para adoção de normas para capacete balístico; adoção de veículos blindados; normas para emprego de equipamentos não letais; desenvolvimento de protocolos de teste para produtos controlados; inovação de pistolas; inovação de coletes balísticos e; inovação de fuzis."
    ]
  },
  {
    name: "Noel Baratieri",
    image: "https://picsum.photos/id/1025/400/400", // Placeholder
    bio: [
      "Advogado. Doutor e Mestre em Direito Administrativo pela Universidade Federal de Santa Catarina. Membro Fundador do Instituto de Direito Administrativo de Santa Catarina.",
      "Foi consultor da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem dos Advogados do Brasil e Diretor-Executivo do Instituto de Direito Administrativo de Santa Catarina.",
      "Foi professor de Direito Administrativo da Faculdade de Direito da Universidade Bandeirante de São Paulo e do Curso de Pós-graduação em Direito Administrativo da Universidade do Oeste de Santa Catarina.",
      "É autor de diversos livros jurídicos, dentre eles: “Serviço Público na Constituição Federal de 1988” e “Métodos de Negociação de Harvard na Administração Pública Consensual”, publicados pela editora Livraria do Advogado, e “Aspectos polêmicos da nova lei de licitações e contratos”, publicado pela editora Forum."
    ]
  }
];

const DEFAULT_BIO = [
  "Especialista em Licitações e Contratos Administrativos com ênfase em Segurança Pública.",
  "Atua como consultor e palestrante em todo o território nacional, capacitando agentes públicos na aplicação da Nova Lei de Licitações.",
  "Possui vasta experiência na instrução processual e na gestão de riscos em contratações de equipamentos táticos e estratégicos."
];

export const SPEAKERS: Speaker[] = [
  { 
    name: "Álvaro Capagio", 
    image: "https://picsum.photos/id/1005/300/300",
    role: "Regulador Federal",
    bio: COORDINATORS[0].bio
  },
  { 
    name: "Felipe Dalenogare", 
    image: "https://picsum.photos/id/1011/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
  { 
    name: "Jonas Lima", 
    image: "https://picsum.photos/id/1012/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
  { 
    name: "Juliana Mendonça", 
    image: "https://picsum.photos/id/1027/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
  { 
    name: "Lara Brainer", 
    image: "https://picsum.photos/id/1014/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
  { 
    name: "Murilo Frigeri", 
    image: "https://picsum.photos/id/1015/300/300",
    role: "Oficial da PMESP",
    bio: COORDINATORS[1].bio
  },
  { 
    name: "Noel Baratieri", 
    image: "https://picsum.photos/id/1016/300/300",
    role: "Advogado",
    bio: COORDINATORS[2].bio
  },
  { 
    name: "Thiago Carvalho", 
    image: "https://picsum.photos/id/1018/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
  { 
    name: "Vitor Valle", 
    image: "https://picsum.photos/id/1019/300/300",
    role: "Palestrante",
    bio: DEFAULT_BIO 
  },
];

export const SECURITY_ORGANS = [
  { name: "Polícia Federal", icon: Shield },
  { name: "Polícia Rodoviária Federal", icon: Truck },
  { name: "Polícia Ferroviária Federal", icon: Truck },
  { name: "Polícia Civil", icon: Shield },
  { name: "Polícia Militar", icon: Siren },
  { name: "Polícia Penal", icon: Lock },
  { name: "Corpos de Bombeiros Militar", icon: Flame },
];

export const ARMED_FORCES = [
  { name: "Marinha", icon: Anchor },
  { name: "Exército", icon: Crosshair },
  { name: "Aeronáutica", icon: Plane },
];

export const POLICE_NATURE_ORGANS = [
  { name: "Polícia da Câmara dos Deputados", icon: Building2 },
  { name: "Polícia do Senado Federal", icon: Building2 },
  { name: "Polícias Legislativas Estaduais", icon: Building2 },
  { name: "Guardas Municipais", icon: Shield },
  { name: "Órgãos de segurança do Poder Judiciário e Ministério Público", icon: Gavel },
];

export const AUDIENCE_ROLES = [
  "Servidores de setores solicitantes",
  "Servidores incumbidos da elaboração de especificações técnicas",
  "Agentes de contratação",
  "Membros de equipe de apoio",
  "Gestores e fiscais de contratos",
  "Servidores responsáveis pelos atos de execução e controle orçamentário",
  "Autoridades competentes para autorização e homologação de licitações",
  "Assessores jurídicos",
  "Auditores de Controle Interno",
  "Auditores de Controle Externo",
  "Advogados de empresas fornecedoras de equipamentos de segurança pública",
  "Advogados com atuação em licitações e contratos na área de segurança pública"
];