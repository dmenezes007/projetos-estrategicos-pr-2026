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

// Configuration for each specific card's style and layout
const cardConfig: Record<string, {
  colSpan: string;
  bg: string;
  text: string;
  dot: string;
  pattern: string;
}> = {
  'gestao-inovacao': {
    colSpan: 'md:col-span-2',
    bg: 'bg-slate-900',
    text: 'text-sky-100',
    dot: 'bg-sky-400',
    pattern: 'bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.16)_0,transparent_45%),repeating-linear-gradient(135deg,rgba(148,163,184,0.10)_0,rgba(148,163,184,0.10)_1px,transparent_1px,transparent_14px)]'
  },
  'gestao-conhecimento': {
    colSpan: 'md:col-span-1',
    bg: 'bg-slate-950',
    text: 'text-cyan-100',
    dot: 'bg-cyan-400',
    pattern: 'bg-[radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.20)_0,transparent_48%),repeating-linear-gradient(45deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_12px)]'
  },
  'comunicacao-institucional': {
    colSpan: 'md:col-span-1',
    bg: 'bg-slate-900',
    text: 'text-violet-100',
    dot: 'bg-violet-400',
    pattern: 'bg-[radial-gradient(circle_at_20%_85%,rgba(167,139,250,0.18)_0,transparent_50%),repeating-linear-gradient(0deg,rgba(148,163,184,0.10)_0,rgba(148,163,184,0.10)_1px,transparent_1px,transparent_16px)]'
  },
  'lideranca-a-vista': {
    colSpan: 'md:col-span-2',
    bg: 'bg-slate-900',
    text: 'text-amber-100',
    dot: 'bg-amber-400',
    pattern: 'bg-[radial-gradient(circle_at_80%_24%,rgba(251,191,36,0.16)_0,transparent_44%),repeating-linear-gradient(120deg,rgba(148,163,184,0.09)_0,rgba(148,163,184,0.09)_1px,transparent_1px,transparent_13px)]'
  },
  'lgpd-implementada': {
    colSpan: 'md:col-span-1',
    bg: 'bg-slate-950',
    text: 'text-emerald-100',
    dot: 'bg-emerald-400',
    pattern: 'bg-[radial-gradient(circle_at_15%_20%,rgba(52,211,153,0.18)_0,transparent_46%),repeating-linear-gradient(60deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_11px)]'
  },
  'uso-ia': {
    colSpan: 'md:col-span-1',
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
    <div className="h-full w-full flex flex-col font-sans">
      {/* Bento Grid Layout - Full Height */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-2 gap-4 h-full w-full"
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
                "rounded-[2rem] p-8 shadow-sm border border-slate-700/70 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60",
                config.colSpan,
                config.bg,
                config.text
              )}
            >
              <div className={clsx("absolute inset-0 opacity-75 pointer-events-none", config.pattern)}></div>

              {/* Pulsating Dot */}
              <div className="absolute top-8 right-8 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider opacity-75 text-slate-300">
                  {project.status}
                </span>
                <div className="relative flex h-3 w-3">
                  <span className={clsx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", config.dot)}></span>
                  <span className={clsx("relative inline-flex rounded-full h-3 w-3", config.dot)}></span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-4">
                <h3 className="font-project-title text-6xl md:text-7xl mb-4 leading-none tracking-normal">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95 max-w-2xl text-slate-300">
                  {project.shortDescription}
                </p>
              </div>

              {/* Footer / Action */}
              <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                <div className="flex items-center gap-6 text-sm opacity-80">
                  <span className="flex items-center gap-2 font-medium">
                    <Calendar size={18} />
                    {new Date(project.endDate).getFullYear()}
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <BarChart3 size={18} />
                    {project.kpis.length} KPIs
                  </span>
                </div>
                
                <span
                  className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2",
                    "bg-white text-slate-900 group-hover:bg-slate-200"
                  )}
                >
                  <ArrowRight size={20} />
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
