"use client";

import { useEffect, useState } from "react";

type DashboardData = {
  empresa: string;
  notaGeral: number;
  percentualMaturidade: number;
  nivelMaturidade: string;
  porDiretoria: Record<string, number>;
  porDimensao: Record<string, number>;
};

const mockData: DashboardData = {
  empresa: "Empresa Júnior Exemplo",
  notaGeral: 3.8,
  percentualMaturidade: 70,
  nivelMaturidade: "Avançado",
  porDiretoria: {
    "Diretoria Executiva": 3.9,
    "Diretoria Comercial": 3.6,
    "Diretoria de Projetos": 3.8,
    "Diretoria Financeira": 3.9,
  },
  porDimensao: {
    "Planejamento estratégico": 3.8,
    "Governança e tomada de decisão": 3.9,
    "Gestão de desempenho organizacional": 3.7,
    "Comunicação e alinhamento interno": 3.9,
    "Prospecção e geração de oportunidades": 3.5,
    "Gestão do funil comercial": 3.6,
    "Propostas e negociação": 3.7,
    "Relacionamento com clientes": 3.6,
    "Planejamento de projetos": 3.8,
    "Execução e acompanhamento": 3.7,
    "Comunicação com o cliente": 3.9,
    "Qualidade e encerramento": 3.9,
  },
};

const STORAGE_KEY = "ultimoDiagnostico";

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData>(mockData);
  const [isSavedData, setIsSavedData] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setIsSavedData(false);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as Partial<DashboardData> & { empresa?: string };

      if (typeof parsed?.notaGeral === "number") {
        setData({
          empresa: parsed.empresa ?? mockData.empresa,
          notaGeral: parsed.notaGeral,
          percentualMaturidade: parsed.percentualMaturidade ?? mockData.percentualMaturidade,
          nivelMaturidade: parsed.nivelMaturidade ?? mockData.nivelMaturidade,
          porDiretoria: parsed.porDiretoria ?? mockData.porDiretoria,
          porDimensao: parsed.porDimensao ?? mockData.porDimensao,
        });
        setIsSavedData(true);
      }
    } catch {
      setIsSavedData(false);
    }
  }, []);

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
                Visão geral de maturidade organizacional. Dados mockados, prontos para receber resultados reais do questionário.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 text-right">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Nota geral</p>
              <p className="mt-4 text-5xl font-semibold text-slate-900">{data.notaGeral.toFixed(2)}</p>
              <p className="mt-2 text-sm text-slate-600">Média das 4 diretorias</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-100 p-5 text-sm text-slate-700">
            {isSavedData
              ? "Resultados carregados do último diagnóstico finalizado."
              : "Exibindo valores mockados até que os dados reais sejam integrados."}
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

