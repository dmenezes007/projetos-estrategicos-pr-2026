import { LucideIcon, Lightbulb, BookOpen, Megaphone, ShieldCheck, Users, BrainCircuit } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: 'EM EXECUÇÃO';
  iconName: string;
  image: string;
  startDate: string;
  endDate: string;
  strategicAxis: string;
  kpis: { label: string; value: string; trend: 'up' | 'down' | 'neutral' }[];
  objectives: string[];
  impact: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 'gestao-inovacao',
    title: 'Gestão da Inovação',
    shortDescription: 'Implantação do Sistema de Gestão da Inovação do INPI com instrumentos, processos e indicadores bem definidos',
    fullDescription: 'Implementação de novas metodologias e ferramentas tecnológicas para otimizar o fluxo de trabalho dos examinadores, reduzindo o backlog e aumentando a qualidade das concessões.',
    status: 'EM EXECUÇÃO',
    iconName: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    startDate: '2024-01-15',
    endDate: '2026-12-31',
    strategicAxis: 'Eficiência Operacional',
    kpis: [
      { label: 'Redução do Backlog', value: '-15%', trend: 'up' },
      { label: 'Tempo Médio de Análise', value: '3.5 anos', trend: 'down' },
      { label: 'Produtividade por Examinador', value: '+18%', trend: 'up' }
    ],
    objectives: [
      'Reduzir o tempo de exame de patentes em 20%',
      'Implementar sistema de priorização automática',
      'Capacitar 100% dos examinadores em novas tecnologias'
    ],
    impact: 'Aceleração do desenvolvimento tecnológico nacional e maior segurança jurídica para inventores.',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'gestao-conhecimento',
    title: 'Gestão do Conhecimento',
    shortDescription: 'Desenvolvimento do processo de gestão do conhecimento, de forma coordenada e alinhada á estratégia institucional',
    fullDescription: 'Criação de uma plataforma centralizada para documentação técnica, treinamentos e compartilhamento de boas práticas entre os servidores.',
    status: 'EM EXECUÇÃO',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop',
    startDate: '2024-06-01',
    endDate: '2026-12-31',
    strategicAxis: 'Desenvolvimento Institucional',
    kpis: [
      { label: 'Documentos Indexados', value: '12.500', trend: 'up' },
      { label: 'Acessos à Base', value: '450/dia', trend: 'up' },
      { label: 'Áreas com Trilhas Ativas', value: '9', trend: 'up' }
    ],
    objectives: [
      'Digitalizar 100% do acervo histórico relevante',
      'Criar wiki interna colaborativa',
      'Estabelecer programa de mentoria técnica'
    ],
    impact: 'Continuidade administrativa e redução da curva de aprendizado para novos servidores.',
    gallery: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507842217121-9e9f1479b03e?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'comunicacao-institucional',
    title: 'Comunicação Institucional',
    shortDescription: 'Planejamento da contratação de comunicação institucional apta ao atendimento da necessidade real do Instituto',
    fullDescription: 'Reestruturação dos canais de comunicação digital e física para aproximar o INPI da sociedade e dos usuários do sistema de propriedade industrial.',
    status: 'EM EXECUÇÃO',
    iconName: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    startDate: '2023-09-01',
    endDate: '2026-12-31',
    strategicAxis: 'Transparência e Sociedade',
    kpis: [
      { label: 'Engajamento Social', value: '+45%', trend: 'up' },
      { label: 'Satisfação do Usuário', value: '4.2/5', trend: 'up' },
      { label: 'Campanhas Institucionais', value: '12', trend: 'up' }
    ],
    objectives: [
      'Lançar novo portal institucional',
      'Aumentar presença nas redes sociais',
      'Criar newsletter mensal para stakeholders'
    ],
    impact: 'Melhoria da imagem pública e maior clareza sobre os serviços prestados.',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'lgpd-implementada',
    title: 'LGPD Implementada',
    shortDescription: 'Especificação, planejamento e acompanhamento de ações de adequação dos sistemas e controles do INPI à LGPD',
    fullDescription: 'Adequação de todos os processos internos e sistemas para garantir a privacidade e segurança dos dados pessoais de servidores e usuários.',
    status: 'EM EXECUÇÃO',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    startDate: '2022-01-01',
    endDate: '2026-12-31',
    strategicAxis: 'Governança e Compliance',
    kpis: [
      { label: 'Processos Mapeados', value: '100%', trend: 'neutral' },
      { label: 'Incidentes de Segurança', value: '0', trend: 'neutral' },
      { label: 'Sistemas Adequados', value: '96%', trend: 'up' }
    ],
    objectives: [
      'Mapear todos os fluxos de dados pessoais',
      'Implementar políticas de privacidade',
      'Treinar 100% dos colaboradores'
    ],
    impact: 'Garantia de direitos fundamentais e mitigação de riscos legais.',
    gallery: [
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'lideranca-a-vista',
    title: 'Liderança à Vista',
    shortDescription: 'Realização de ações projetizadas para o intencional aprimoramento da percepção da liderança exercida pela Presidência do INPI',
    fullDescription: 'Implementação de dashboards em tempo real para monitoramento de indicadores estratégicos por toda a alta gestão.',
    status: 'EM EXECUÇÃO',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    startDate: '2024-02-01',
    endDate: '2026-12-31',
    strategicAxis: 'Gestão Estratégica',
    kpis: [
      { label: 'Dashboards Ativos', value: '8', trend: 'up' },
      { label: 'Tempo de Resposta', value: '-20%', trend: 'down' },
      { label: 'Ações de Liderança Executadas', value: '14', trend: 'up' }
    ],
    objectives: [
      'Integrar bases de dados de RH, Finanças e Operações',
      'Criar sala de situação virtual',
      'Automatizar relatórios mensais'
    ],
    impact: 'Agilidade na tomada de decisão e maior alinhamento estratégico.',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'uso-ia',
    title: 'Uso da IA no INPI',
    shortDescription: 'Estrturação e consolidação de iniciativas voltadas à aplicação da inteligência artificial a diferentes processos do INPI',
    fullDescription: 'Desenvolvimento e adoção de ferramentas de IA para auxiliar na busca de anterioridade em patentes e marcas, aumentando a precisão e velocidade.',
    status: 'EM EXECUÇÃO',
    iconName: 'BrainCircuit',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    startDate: '2024-08-01',
    endDate: '2026-12-31',
    strategicAxis: 'Inovação Tecnológica',
    kpis: [
      { label: 'Precisão da Busca', value: '98%', trend: 'up' },
      { label: 'Tempo de Busca', value: '-40%', trend: 'down' },
      { label: 'Processos com IA Integrada', value: '7', trend: 'up' }
    ],
    objectives: [
      'Testar 3 soluções de mercado',
      'Desenvolver modelo proprietário para base nacional',
      'Integrar IA ao sistema de exame'
    ],
    impact: 'Revolução na produtividade e qualidade técnica do INPI.',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop'
    ]
  }
];

export const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  BookOpen,
  Megaphone,
  ShieldCheck,
  Users,
  BrainCircuit
};
