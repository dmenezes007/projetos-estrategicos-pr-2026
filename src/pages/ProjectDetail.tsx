import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Target, TrendingUp, FileText, Download, Mail, UserRound, Footprints, Milestone, ContactRound, BarChart3, FolderOpen } from 'lucide-react';
import { projects } from '../data/mockData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Projeto não encontrado</h2>
        <Link to="/" className="text-brand-blue hover:underline">Voltar ao Dashboard</Link>
      </div>
    );
  }

  const nextStepByProject: Record<string, string> = {
    'gestao-inovacao': 'Concluir a validação do fluxo de governança e iniciar o ciclo piloto com três áreas finalísticas do INPI.',
    'gestao-conhecimento': 'Finalizar o desenho do processo corporativo e publicar a primeira trilha institucional de conhecimento.',
    'comunicacao-institucional': 'Consolidar os requisitos técnicos e finalizar o termo de referência para contratação especializada.',
    'lideranca-a-vista': 'Executar o próximo pacote de ações de liderança com indicadores de percepção e acompanhamento quinzenal.',
    'lgpd-implementada': 'Priorizar os sistemas críticos pendentes e concluir o plano de adequação dos controles de dados pessoais.',
    'uso-ia': 'Expandir a prova de conceito para novos processos e formalizar critérios de escala para soluções de IA no INPI.'
  };

  const timelineByProject: Record<string, { etapa: string; periodo: string }[]> = {
    'gestao-inovacao': [
      { etapa: 'Estruturação metodológica', periodo: '1º trimestre/2026' },
      { etapa: 'Piloto com áreas selecionadas', periodo: '2º trimestre/2026' },
      { etapa: 'Escalonamento institucional', periodo: '2º semestre/2026' }
    ],
    'gestao-conhecimento': [
      { etapa: 'Mapeamento de ativos críticos', periodo: '1º trimestre/2026' },
      { etapa: 'Implantação de trilhas e curadoria', periodo: '2º trimestre/2026' },
      { etapa: 'Consolidação do processo corporativo', periodo: '2º semestre/2026' }
    ],
    'comunicacao-institucional': [
      { etapa: 'Diagnóstico de necessidades', periodo: '1º trimestre/2026' },
      { etapa: 'Planejamento da contratação', periodo: '2º trimestre/2026' },
      { etapa: 'Início da execução contratual', periodo: '2º semestre/2026' }
    ],
    'lideranca-a-vista': [
      { etapa: 'Planejamento das ações projetizadas', periodo: '1º trimestre/2026' },
      { etapa: 'Execução de ciclos de liderança', periodo: '2º trimestre/2026' },
      { etapa: 'Avaliação e ajustes de percepção', periodo: '2º semestre/2026' }
    ],
    'lgpd-implementada': [
      { etapa: 'Priorização de sistemas e controles', periodo: '1º trimestre/2026' },
      { etapa: 'Adequação técnica e processual', periodo: '2º trimestre/2026' },
      { etapa: 'Acompanhamento e evidências finais', periodo: '2º semestre/2026' }
    ],
    'uso-ia': [
      { etapa: 'Estruturação das iniciativas de IA', periodo: '1º trimestre/2026' },
      { etapa: 'Integração com processos do INPI', periodo: '2º trimestre/2026' },
      { etapa: 'Consolidação e escalabilidade', periodo: '2º semestre/2026' }
    ]
  };

  const contactsByProject: Record<string, { nome: string; funcao: string; email: string }[]> = {
    'gestao-inovacao': [
      { nome: 'Coordenação de Inovação', funcao: 'Ponto focal do projeto', email: 'inovacao@inpi.gov.br' },
      { nome: 'Equipe de Transformação', funcao: 'Gestão de implantação', email: 'transformacao@inpi.gov.br' }
    ],
    'gestao-conhecimento': [
      { nome: 'Núcleo de Conhecimento', funcao: 'Gestão de conteúdo institucional', email: 'conhecimento@inpi.gov.br' },
      { nome: 'Coordenação de Capacitação', funcao: 'Trilhas e treinamento', email: 'capacitacao@inpi.gov.br' }
    ],
    'comunicacao-institucional': [
      { nome: 'Assessoria de Comunicação', funcao: 'Coordenação da comunicação institucional', email: 'comunicacao@inpi.gov.br' },
      { nome: 'Gestão de Contratos', funcao: 'Suporte à contratação', email: 'contratos@inpi.gov.br' }
    ],
    'lideranca-a-vista': [
      { nome: 'Gabinete da Presidência', funcao: 'Patrocínio executivo', email: 'presidencia@inpi.gov.br' },
      { nome: 'Escritório de Projetos', funcao: 'Acompanhamento de execução', email: 'projetos@inpi.gov.br' }
    ],
    'lgpd-implementada': [
      { nome: 'Encarregado de Dados', funcao: 'Governança de privacidade', email: 'dpo@inpi.gov.br' },
      { nome: 'Coordenação de Segurança', funcao: 'Controles e monitoramento', email: 'seguranca@inpi.gov.br' }
    ],
    'uso-ia': [
      { nome: 'Laboratório de IA', funcao: 'Curadoria técnica das iniciativas', email: 'ia@inpi.gov.br' },
      { nome: 'Equipe de Sistemas', funcao: 'Integração em produção', email: 'sistemas@inpi.gov.br' }
    ]
  };

  const projectTimeline = timelineByProject[project.id] ?? [];
  const projectContacts = contactsByProject[project.id] ?? [];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto pb-6 pr-1">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-6 transition-colors">
          <ArrowLeft size={20} />
          Voltar ao Dashboard
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl mb-12"
        >
          <div className="absolute inset-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.status === 'Concluído' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                project.status === 'EM EXECUÇÃO' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {project.status}
              </span>
              <span className="text-slate-300 text-sm flex items-center gap-1">
                <Calendar size={14} /> {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
              </span>
            </div>

            <h1 className="font-project-title text-5xl md:text-6xl mb-6 leading-none tracking-normal">{project.title}</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Next Step */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Footprints className="text-brand-accent" /> Próximo Passo
              </h3>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{nextStepByProject[project.id]}</p>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Milestone className="text-brand-accent" /> Cronograma
              </h3>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <ul className="space-y-4">
                  {projectTimeline.map((item, i) => (
                    <li key={`${item.etapa}-${i}`} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/15 text-brand-blue flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-semibold">{item.etapa}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{item.periodo}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Objectives */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Target className="text-brand-accent" /> Objetivos Estratégicos
              </h3>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <ul className="space-y-4">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Impact */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-brand-accent" /> Impacto Institucional
              </h3>
              <div className="bg-gradient-to-r from-brand-blue to-brand-light rounded-2xl p-8 text-white shadow-lg">
                <p className="text-lg font-medium leading-relaxed opacity-90">
                  "{project.impact}"
                </p>
              </div>
            </section>

            {/* Contacts */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <ContactRound className="text-brand-accent" /> Contatos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectContacts.map((contact, i) => (
                  <div key={`${contact.email}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold">
                      <UserRound size={16} />
                      {contact.nome}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{contact.funcao}</div>
                    <div className="text-sm text-brand-blue dark:text-brand-accent flex items-center gap-2">
                      <Mail size={14} />
                      {contact.email}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* KPIs */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 className="text-brand-accent" size={18} /> Indicadores Chave
              </h3>
              <div className="space-y-6">
                {project.kpis.map((kpi, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm text-slate-500 dark:text-slate-400">{kpi.label}</span>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                        kpi.trend === 'up' ? 'bg-green-100 text-green-700' :
                        kpi.trend === 'down' ? 'bg-green-100 text-green-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {kpi.trend === 'up' ? '▲' : kpi.trend === 'down' ? '▼' : '•'}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-brand-accent rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FolderOpen className="text-brand-accent" size={18} /> Documentos
              </h3>
              <div className="space-y-3">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group cursor-pointer border border-transparent hover:border-slate-200">
                    <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                      <FileText size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">Relatório Executivo v{i+1}.0</div>
                      <div className="text-xs text-slate-400">PDF • 2.4 MB</div>
                    </div>
                    <Download size={16} className="text-slate-400 group-hover:text-brand-blue" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
