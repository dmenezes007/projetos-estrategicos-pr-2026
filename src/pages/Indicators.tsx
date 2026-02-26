import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Indicators() {
  const lineData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Patentes Concedidas',
        data: [65, 59, 80, 81, 56, 95],
        borderColor: 'rgb(0, 174, 239)', // Brand Accent
        backgroundColor: 'rgba(0, 174, 239, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Meta',
        data: [60, 60, 65, 65, 70, 70],
        borderColor: 'rgb(148, 163, 184)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ['Inovação', 'Gestão', 'TI', 'RH', 'Jurídico'],
    datasets: [
      {
        label: 'Projetos Concluídos',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(0, 51, 102, 0.8)',
          'rgba(0, 85, 170, 0.8)',
          'rgba(0, 174, 239, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(148, 163, 184, 0.8)',
        ],
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ['Em Dia', 'Atrasado', 'Concluído'],
    datasets: [
      {
        data: [12, 3, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(0, 51, 102, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Indicadores Estratégicos
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Monitoramento quantitativo do desempenho institucional.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Eficiência Operacional', value: '92%', change: '+4.5%', color: 'text-green-500' },
          { label: 'Projetos Ativos', value: '24', change: '0', color: 'text-slate-500' },
          { label: 'Orçamento Executado', value: 'R$ 45M', change: '+12%', color: 'text-blue-500' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{kpi.label}</div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">{kpi.value}</div>
              <div className={`text-sm font-medium mb-1 ${kpi.color}`}>{kpi.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Evolução Mensal</h3>
          <Line options={options} data={lineData} />
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Projetos por Área</h3>
          <Bar options={options} data={barData} />
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 lg:col-span-2 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white text-center">Status Geral</h3>
            <div className="w-48 mx-auto">
              <Doughnut data={doughnutData} />
            </div>
          </div>
          <div className="w-full md:w-2/3">
             <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Análise de Desempenho</h3>
             <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
               O desempenho global dos projetos estratégicos apresenta uma tendência positiva, com 85% das metas atingidas no último trimestre. 
               Destaca-se a área de Inovação com o maior número de entregas concluídas.
             </p>
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                 <div className="text-xs text-slate-500 uppercase font-bold">Maior Desafio</div>
                 <div className="font-medium text-slate-800 dark:text-white">Integração de Sistemas Legados</div>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                 <div className="text-xs text-slate-500 uppercase font-bold">Próximo Marco</div>
                 <div className="font-medium text-slate-800 dark:text-white">Lançamento Portal V2</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
