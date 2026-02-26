import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';
import clsx from 'clsx';

const MotionLink = motion(Link);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

const titleOverrides: Record<string, string[]> = {
  'gestao-inovacao': ['Gestão da', 'Inovação'],
  'lideranca-a-vista': ['Liderança', 'à Vista'],
  'lgpd-implementada': ['LGPD', 'Implementada'],
  'uso-ia': ['Uso da IA', 'no INPI']
};

// Configuration for each specific card's style and layout
const cardConfig: Record<string, {
  bg: string;
  text: string;
  dot: string;
  pattern: string;
}> = {
  'gestao-inovacao': {
    bg: 'bg-slate-900',
    text: 'text-sky-100',
    dot: 'bg-sky-400',
    pattern: 'bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.16)_0,transparent_45%),repeating-linear-gradient(135deg,rgba(148,163,184,0.10)_0,rgba(148,163,184,0.10)_1px,transparent_1px,transparent_14px)]'
  },
  'gestao-conhecimento': {
    bg: 'bg-slate-950',
    text: 'text-cyan-100',
    dot: 'bg-cyan-400',
    pattern: 'bg-[radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.20)_0,transparent_48%),repeating-linear-gradient(45deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_12px)]'
  },
  'comunicacao-institucional': {
    bg: 'bg-slate-900',
    text: 'text-violet-100',
    dot: 'bg-violet-400',
    pattern: 'bg-[radial-gradient(circle_at_20%_85%,rgba(167,139,250,0.18)_0,transparent_50%),repeating-linear-gradient(0deg,rgba(148,163,184,0.10)_0,rgba(148,163,184,0.10)_1px,transparent_1px,transparent_16px)]'
  },
  'lideranca-a-vista': {
    bg: 'bg-slate-900',
    text: 'text-amber-100',
    dot: 'bg-amber-400',
    pattern: 'bg-[radial-gradient(circle_at_80%_24%,rgba(251,191,36,0.16)_0,transparent_44%),repeating-linear-gradient(120deg,rgba(148,163,184,0.09)_0,rgba(148,163,184,0.09)_1px,transparent_1px,transparent_13px)]'
  },
  'lgpd-implementada': {
    bg: 'bg-slate-950',
    text: 'text-emerald-100',
    dot: 'bg-emerald-400',
    pattern: 'bg-[radial-gradient(circle_at_15%_20%,rgba(52,211,153,0.18)_0,transparent_46%),repeating-linear-gradient(60deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_11px)]'
  },
  'uso-ia': {
    bg: 'bg-black',
    text: 'text-fuchsia-100',
    dot: 'bg-fuchsia-400',
    pattern: 'bg-[radial-gradient(circle_at_78%_82%,rgba(217,70,239,0.20)_0,transparent_50%),repeating-linear-gradient(30deg,rgba(148,163,184,0.11)_0,rgba(148,163,184,0.11)_1px,transparent_1px,transparent_14px)]'
  }
};

export default function Dashboard() {
  // Define the order of cards to fit 4x2 grid
  // Row 1: Inovacao (2) + Conhecimento (1) + Comunicacao (1)
  // Row 2: Lideranca (2) + LGPD (1) + IA (1)
  const orderedIds = [
    'gestao-inovacao',
    'gestao-conhecimento',
    'comunicacao-institucional',
    'lideranca-a-vista',
    'lgpd-implementada',
    'uso-ia'
  ];

  return (
    <div className="h-full w-full flex flex-col font-sans relative overflow-y-auto md:overflow-hidden pr-1">
      <div className="absolute inset-0 pointer-events-none z-20 hidden md:flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border-4 border-white bg-white shadow-xl backdrop-blur-sm flex items-center justify-center p-3">
          <img
            src="/logo_inpi_azul_fundo_transparente.png"
            alt="Logo do INPI"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bento Grid Layout - Full Height */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 auto-rows-[minmax(0,1fr)] gap-3 md:gap-4 h-auto md:h-full w-full"
      >
        {orderedIds.map((id) => {
          const project = projects.find(p => p.id === id);
          const config = cardConfig[id];

          if (!project || !config) return null;

          return (
            <MotionLink
              key={id}
              to={`/projeto/${project.id}`}
              variants={item}
              className={clsx(
                "rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-sm border border-slate-700/70 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 h-full min-h-[18.5rem] md:min-h-0",
                config.bg,
                config.text
              )}
            >
              <div className={clsx("absolute inset-0 opacity-75 pointer-events-none", config.pattern)}></div>

              {/* Pulsating Dot */}
              <div className="absolute top-5 right-5 md:top-8 md:right-8 flex items-center gap-2 md:gap-3">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-75 text-slate-300">
                  {project.status}
                </span>
                <div className="relative flex h-3 w-3">
                  <span className={clsx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", config.dot)}></span>
                  <span className={clsx("relative inline-flex rounded-full h-3 w-3", config.dot)}></span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-2 md:mt-4">
                <h3 className="font-project-title text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 leading-none tracking-normal">
                  {(titleOverrides[project.id] ?? [project.title]).map((line, index) => (
                    <span key={`${project.id}-${line}-${index}`}>
                      {line}
                      {index < (titleOverrides[project.id] ?? [project.title]).length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-6 opacity-95 max-w-2xl text-slate-300">
                  {project.shortDescription}
                </p>
              </div>

              {/* Footer / Action */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-4 md:pt-6 border-t border-black/5 dark:border-white/10 gap-3 sm:gap-2">
                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-80">
                  <span className="flex items-center gap-2 font-medium">
                    <Calendar size={16} className="md:w-[18px] md:h-[18px]" />
                    {new Date(project.endDate).getFullYear()}
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <BarChart3 size={16} className="md:w-[18px] md:h-[18px]" />
                    {project.kpis.length} KPIs
                  </span>
                </div>
                
                <span
                  className={clsx(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2 self-end sm:self-auto",
                    "bg-white text-slate-900 group-hover:bg-slate-200"
                  )}
                >
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </span>
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-35 pointer-events-none transition-opacity group-hover:opacity-55 bg-white/10"></div>
            </MotionLink>
          );
        })}
      </motion.div>
    </div>
  );
}
