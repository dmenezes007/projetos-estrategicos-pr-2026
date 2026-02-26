import { Quote } from 'lucide-react';

export default function PresidencyMessage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Mensagem da Presidência
        </h1>
        <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
              alt="Presidente do INPI" 
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-6 pt-24 text-white">
              <div className="font-bold text-lg">Dr. Júlio César Moreira</div>
              <div className="text-sm opacity-80">Presidente do INPI</div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8 md:p-12 relative">
            <Quote className="absolute top-8 right-8 text-slate-100 dark:text-slate-700 transform rotate-180" size={80} />
            
            <div className="relative z-10 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-blue first-letter:mr-2 first-letter:float-left">
                O Instituto Nacional da Propriedade Industrial vive um momento de transformação histórica. 
                Nossa gestão está comprometida em posicionar o Brasil como protagonista no cenário global de inovação.
              </p>
              
              <p>
                Os projetos estratégicos apresentados neste portal não são apenas iniciativas isoladas, mas parte de um 
                ecossistema integrado voltado para a eficiência, transparência e modernização. Estamos reduzindo burocracias, 
                implementando inteligência artificial e valorizando nosso capital humano.
              </p>

              <p>
                A propriedade industrial é a moeda da economia do conhecimento. Ao fortalecermos o INPI, fortalecemos 
                a indústria nacional, protegemos nossos inventores e atraímos investimentos para o país.
              </p>

              <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-700">
                <p className="font-serif italic text-xl text-slate-800 dark:text-white">
                  "Inovar não é uma opção, é um imperativo para a soberania nacional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6">
          <div className="text-4xl font-bold text-brand-blue mb-2">2024</div>
          <div className="text-slate-500">Ano da Eficiência</div>
        </div>
        <div className="p-6 border-l border-r border-slate-200 dark:border-slate-700">
          <div className="text-4xl font-bold text-brand-blue mb-2">Top 10</div>
          <div className="text-slate-500">Escritórios de PI no Mundo</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold text-brand-blue mb-2">100%</div>
          <div className="text-slate-500">Digital</div>
        </div>
      </div>
    </div>
  );
}
