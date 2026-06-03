import type { AnaliseInterpretativa } from "../lib/interpretarDiagnostico";

type InterpretationProps = {
  analysis: AnaliseInterpretativa;
};

function formatDimensionLabel(value: string): string {
  const parts = value.split(" — ");
  if (parts.length === 2) {
    return `${parts[1]} (${parts[0]})`;
  }
  return value;
}

function DimensaoCard({ title, dimensao, nota }: { title: string; dimensao: string | null; nota: number | null }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
      {dimensao ? (
        <>
          <p className="mt-4 text-base font-semibold text-slate-900">{formatDimensionLabel(dimensao)}</p>
          <p className="mt-2 text-sm text-slate-600">Nota média: {nota?.toFixed(2)}</p>
        </>
      ) : (
        <p className="mt-4 text-sm text-slate-600">Dados de dimensão não disponíveis.</p>
      )}
    </div>
  );
}

function DataList({ title, items }: { title: string; items: AnaliseInterpretativa["pontosFortes"] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-slate-600">Não há informações suficientes para esta seção.</p>
      ) : (
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item.dimensao}>
              <p className="font-semibold text-slate-900">{formatDimensionLabel(item.dimensao)}</p>
              <p className="text-slate-600">Nota média: {item.nota.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Interpretation({ analysis }: InterpretationProps) {
  const hasAnalysis =
    Boolean(analysis.melhorDimensao) ||
    Boolean(analysis.principalOportunidade) ||
    analysis.pontosFortes.length > 0 ||
    analysis.oportunidadesMelhoria.length > 0;

  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">Análise do Diagnóstico</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Resumo Executivo</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{analysis.resumoExecutivo}</p>
      </div>

      {!hasAnalysis ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          Não há dados suficientes para gerar a análise interpretativa.
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Nível de Maturidade</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{analysis.nivelMaturidade}</p>
            </div>
            <DimensaoCard
              title="Dimensão com Melhor Desempenho"
              dimensao={analysis.melhorDimensao?.dimensao ?? null}
              nota={analysis.melhorDimensao?.nota ?? null}
            />
            <DimensaoCard
              title="Principal Oportunidade de Desenvolvimento"
              dimensao={analysis.principalOportunidade?.dimensao ?? null}
              nota={analysis.principalOportunidade?.nota ?? null}
            />
          </div>

          <div className="grid gap-4">
            <DataList title="Aspectos com Melhor Desempenho" items={analysis.pontosFortes} />
            <DataList title="Aspectos que Merecem Atenção" items={analysis.oportunidadesMelhoria} />
          </div>
        </div>
      )}
    </section>
  );
}
