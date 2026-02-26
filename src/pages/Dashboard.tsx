import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';
import clsx from 'clsx';

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
  dark?: boolean;
}> = {
  'gestao-inovacao': {
    colSpan: 'md:col-span-2',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-900 dark:text-blue-100',
    dot: 'bg-blue-500'
  },
  'gestao-conhecimento': {
    colSpan: 'md:col-span-1',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-900 dark:text-teal-100',
    dot: 'bg-teal-500'
  },
  'comunicacao-institucional': {
    colSpan: 'md:col-span-1',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    text: 'text-indigo-900 dark:text-indigo-100',
    dot: 'bg-indigo-500'
  },
  'lideranca-a-vista': {
    colSpan: 'md:col-span-2',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-900 dark:text-amber-100',
    dot: 'bg-amber-500'
  },
  'lgpd-implementada': {
    colSpan: 'md:col-span-1',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    text: 'text-emerald-900 dark:text-emerald-100',
    dot: 'bg-emerald-500'
  },
  'uso-ia': {
    colSpan: 'md:col-span-1',
    bg: 'bg-slate-900 dark:bg-black',
    text: 'text-white',
    dot: 'bg-purple-500',
    dark: true
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
            <motion.div
              key={id}
              variants={item}
              className={clsx(
                "rounded-[2rem] p-8 shadow-sm border border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between",
                config.colSpan,
                config.bg,
                config.text,
                config.dark ? "dark:border-slate-800" : "border-slate-100 dark:border-slate-700"
              )}
            >
              {/* Pulsating Dot */}
              <div className="absolute top-8 right-8 flex items-center gap-3">
                <span className={clsx("text-xs font-bold uppercase tracking-wider opacity-70", config.dark ? "text-white" : "text-slate-600 dark:text-slate-300")}>
                  {project.status}
                </span>
                <div className="relative flex h-3 w-3">
                  <span className={clsx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", config.dot)}></span>
                  <span className={clsx("relative inline-flex rounded-full h-3 w-3", config.dot)}></span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className={clsx(
                  "text-lg md:text-xl leading-relaxed mb-6 opacity-90 max-w-2xl",
                  config.dark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
                )}>
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
                
                <Link 
                  to={`/projeto/${project.id}`}
                  className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2",
                    config.dark ? "bg-white text-slate-900 hover:bg-slate-200" : "bg-white dark:bg-slate-800 shadow-sm hover:shadow-md text-slate-900 dark:text-white"
                  )}
                >
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Background Decoration */}
              <div className={clsx(
                "absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none transition-opacity group-hover:opacity-60",
                config.dark ? "bg-brand-accent/20" : "bg-white/60 dark:bg-white/5"
              )}></div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
