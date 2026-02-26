import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, CheckCircle2, Target, TrendingUp, FileText, Download, Share2 } from 'lucide-react';
import { projects, iconMap } from '../data/mockData';

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

  const Icon = iconMap[project.iconName];

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
                project.status === 'Execução' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {project.status}
              </span>
              <span className="text-slate-300 text-sm flex items-center gap-1">
                <Calendar size={14} /> {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
              </span>
            </div>

            <h1 className="font-project-title text-7xl md:text-8xl mb-6 leading-none tracking-normal">{project.title}</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
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

            {/* Gallery */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Galeria</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i}`} className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-48 w-full" />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* KPIs */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Indicadores Chave</h3>
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
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Documentos</h3>
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
