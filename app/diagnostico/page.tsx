"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { perguntas as perguntasImport, Pergunta } from "../data/perguntas";
import {
  calcularDiagnostico,
  TOTAL_PERGUNTAS,
} from "../../src/lib/calcularDiagnostico";

export default function DiagnosticoPage() {
  const perguntas: Pergunta[] = perguntasImport;
  const router = useRouter();

  const grouped = useMemo(() => {
    const map = new Map<string, Map<string, Pergunta[]>>();
    perguntas.forEach((p) => {
      if (!map.has(p.diretoria)) map.set(p.diretoria, new Map());
      const dims = map.get(p.diretoria)!;
      if (!dims.has(p.dimensao)) dims.set(p.dimensao, []);
      dims.get(p.dimensao)!.push(p);
    });
    return map;
  }, [perguntas]);

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [empresaNome, setEmpresaNome] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function handleAnswer(id: number, value: number) {
    setAnswers((s) => ({ ...s, [id]: value }));
  }

  function finalizar() {
    setError(null);

    if (!empresaNome.trim()) {
      setError("Por favor informe o nome da Empresa Júnior.");
      return;
    }

    if (perguntas.length !== TOTAL_PERGUNTAS) {
      setError(`O questionário está incompleto. Esperado ${TOTAL_PERGUNTAS} perguntas.`);
      return;
    }

    if (Object.keys(answers).length !== TOTAL_PERGUNTAS) {
      setError(`Por favor responda todas as ${TOTAL_PERGUNTAS} perguntas antes de finalizar.`);
      return;
    }

    const resultado = calcularDiagnostico(answers, perguntas);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "ultimoDiagnostico",
        JSON.stringify({
          empresa: empresaNome.trim(),
          ...resultado,
        }),
      );
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold mb-4 text-slate-900">Diagnóstico Organizacional</h1>
        <p className="text-sm text-slate-600 mb-6">Responda todas as perguntas usando a escala de 1 a 5.</p>

        <div className="space-y-6">
          <section className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6">
            <label htmlFor="empresaNome" className="block text-sm font-medium text-slate-900">
              Nome da Empresa Júnior
            </label>
            <input
              id="empresaNome"
              name="empresaNome"
              type="text"
              value={empresaNome}
              onChange={(event) => setEmpresaNome(event.target.value)}
              placeholder="Digite o nome da Empresa Júnior"
              className="mt-3 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
            />
          </section>
        {Array.from(grouped.entries()).map(([diretoria, dims]) => (
          <section key={diretoria} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6">
            <h2 className="text-xl font-medium mb-3 text-slate-900">{diretoria}</h2>
            <div className="space-y-4">
              {Array.from(dims.entries()).map(([dimensao, qs]) => (
                <div key={dimensao} className="border-l-2 border-slate-200 pl-4">
                  <h3 className="text-md font-semibold mb-2 text-slate-800">{dimensao}</h3>
                  <div className="space-y-3">
                    {qs.map((q) => (
                      <div key={q.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3 bg-slate-50 rounded">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-800">{q.codigo} — {q.texto}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="text-xs text-slate-600 mr-2 hidden md:block">1 Não atende — 5 Totalmente</div>
                          <fieldset className="flex gap-1" aria-label={`Escala para ${q.codigo}`}>
                            {[1,2,3,4,5].map((v, idx) => (
                              <label key={v} className={`flex items-center cursor-pointer px-3 py-1 rounded-xl ${answers[q.id] === v ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border'} border-slate-200`}>
                                <input
                                  type="radio"
                                  name={`q_${q.id}`}
                                  value={v}
                                  required={idx === 0}
                                  checked={answers[q.id] === v}
                                  onChange={() => handleAnswer(q.id, v)}
                                  className="hidden"
                                />
                                <span className="text-sm">{v}</span>
                              </label>
                            ))}
                          </fieldset>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <button
            onClick={finalizar}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white shadow-sm transition hover:bg-slate-800"
          >
            Finalizar Diagnóstico
          </button>
          {error && <div className="text-red-700 text-sm">{error}</div>}
          <div className="ml-auto text-sm text-slate-600">Perguntas: {perguntas.length}</div>
        </div>
      </div>
    </main>
  );
}