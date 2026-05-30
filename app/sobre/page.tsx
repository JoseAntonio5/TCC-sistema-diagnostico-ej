export const metadata = {
  title: "Sobre o Sistema",
  description: "Informações sobre o sistema de diagnóstico organizacional para Empresas Juniores.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold">Sobre o Sistema</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Uma ferramenta pensada para apoiar a avaliação diagnóstica inicial da maturidade organizacional de Empresas Juniores.
          </p>
        </section>

        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">O que são Empresas Juniores?</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <strong>Empresas Juniores</strong> são organizações sem fins lucrativos formadas e geridas por estudantes universitários.
            </li>
            <li>
              Seu objetivo é proporcionar experiência prática aos alunos por meio da realização de projetos e prestação de serviços.
            </li>
            <li>
              Fazem parte do Movimento Empresa Júnior e contribuem para a formação profissional dos estudantes.
            </li>
          </ul>
        </section>

        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Sobre o diagnóstico organizacional</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              O sistema realiza uma avaliação diagnóstica inicial da maturidade organizacional de Empresas Juniores.
            </li>
            <li>
              A avaliação é baseada em um questionário estruturado que visa medir a maturidade em áreas-chave da gestão.
            </li>
            <li>
              São analisadas quatro áreas: Diretoria Executiva, Diretoria Comercial, Diretoria de Projetos e Diretoria Administrativa.
            </li>
          </ul>
        </section>

        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Como funciona a avaliação?</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              O questionário utiliza escala Likert de 1 a 5 para medir o nível de atendimento a cada afirmação.
            </li>
            <li>
              As respostas são utilizadas para calcular indicadores de maturidade por dimensão, por diretoria e de forma geral.
            </li>
            <li>
              Os resultados são apresentados em um dashboard com gráficos e indicadores, facilitando a interpretação.
            </li>
          </ul>
        </section>

        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Observação</h2>
          <p className="mt-4 text-slate-700">
            Este sistema não tem o objetivo de fornecer uma avaliação definitiva da maturidade organizacional. Seu propósito é apoiar uma avaliação diagnóstica inicial, servindo como ferramenta de apoio à análise e identificação de oportunidades de melhoria.
          </p>
        </section>
      </div>
    </main>
  );
}
