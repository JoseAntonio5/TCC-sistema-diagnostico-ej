import { prisma } from "../../lib/prisma";

type DashboardData = {
  empresa: string;
  notaGeral: number;
  percentualMaturidade: number;
  nivelMaturidade: string;
  porDiretoria: Record<string, number>;
  porDimensao: Record<string, number>;
};

type DashboardPageProps = {
  searchParams: Promise<{
    diagnosticoId?: string | string[];
  }>;
};

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const params = await searchParams;
  const diagnosticoIdParam = Array.isArray(params.diagnosticoId)
    ? params.diagnosticoId[0]
    : params.diagnosticoId;
  const diagnosticoId = diagnosticoIdParam ? Number(diagnosticoIdParam) : NaN;

  if (!diagnosticoIdParam) {
    const historico = await prisma.diagnostico.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { empresa: true },
    });

    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Sem parâmetro <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-900">diagnosticoId</code>. Veja abaixo os diagnósticos salvos e clique em um para visualizar o dashboard.
            </p>
          </section>

          {historico.length === 0 ? (
            <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-7 text-slate-600">Ainda não há diagnósticos salvos.</p>
            </section>
          ) : (
            <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Histórico de diagnósticos</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead>
                    <tr>
                      <th className="pb-3 pr-6 text-slate-500">ID</th>
                      <th className="pb-3 pr-6 text-slate-500">Empresa</th>
                      <th className="pb-3 pr-6 text-slate-500">Nota geral</th>
                      <th className="pb-3 pr-6 text-slate-500">Criado em</th>
                      <th className="pb-3 text-slate-500">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historico.map((item) => (
                      <tr key={item.id} className="border-t border-slate-200">
                        <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-900">{item.id}</td>
                        <td className="px-4 py-4">{item.empresa.nome}</td>
                        <td className="px-4 py-4">{item.notaGeral.toFixed(2)}</td>
                        <td className="px-4 py-4">{new Date(item.createdAt).toLocaleString("pt-BR")}</td>
                        <td className="px-4 py-4">
                          <a
                            href={`/dashboard?diagnosticoId=${item.id}`}
                            className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                          >
                            Ver dashboard
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </main>
    );
  }

  if (Number.isNaN(diagnosticoId) || diagnosticoId <= 0) {
    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              ID do diagnóstico inválido. Use um valor numérico válido em <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-900">diagnosticoId</code>.
            </p>
          </section>
        </div>
      </main>
    );
  }

  const diagnostico = await prisma.diagnostico.findUnique({
    where: { id: diagnosticoId },
    include: { empresa: true },
  });

  if (!diagnostico) {
    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Diagnóstico não encontrado para o ID fornecido.
            </p>
          </section>
        </div>
      </main>
    );
  }

  const data: DashboardData = {
    empresa: diagnostico.empresa.nome,
    notaGeral: diagnostico.notaGeral,
    percentualMaturidade: diagnostico.percentualMaturidade,
    nivelMaturidade: diagnostico.nivelMaturidade,
    porDiretoria: (diagnostico.porDiretoria as Record<string, number>) ?? {},
    porDimensao: (diagnostico.porDimensao as Record<string, number>) ?? {},
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                Dashboard
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                {data.empresa}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Visão geral de maturidade organizacional carregada do banco de dados.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 text-right">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nota geral</p>
              <p className="mt-4 text-5xl font-semibold text-slate-900">{data.notaGeral.toFixed(2)}</p>
              <p className="mt-2 text-sm text-slate-600">Média das 4 diretorias</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-100 p-5 text-sm text-slate-700">
            Dados carregados do diagnóstico #{diagnosticoId}.
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Percentual de maturidade</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{data.percentualMaturidade.toFixed(0)}%</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Nível de maturidade</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{data.nivelMaturidade}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total de diretorias</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{Object.keys(data.porDiretoria).length}</p>
          </div>
        </div>

        <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Médias por diretoria
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Análise por área</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(data.porDiretoria).map(([diretoria, nota]) => (
              <div
                key={diretoria}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">{diretoria}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{nota.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-x-auto rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Notas por dimensão
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Detalhamento das dimensões</h2>
          </div>

          <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm text-slate-700">
            <thead>
              <tr>
                <th className="pb-3 pr-6 text-slate-500">Dimensão</th>
                <th className="pb-3 text-right text-slate-500">Nota média</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.porDimensao).map(([dimensao, nota]) => (
                <tr key={dimensao} className="rounded-3xl bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-4">{dimensao}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-right font-semibold text-slate-900">
                    {nota.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

