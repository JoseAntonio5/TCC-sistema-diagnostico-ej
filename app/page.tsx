import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="rounded-4xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Sistema de Diagnóstico Organizacional
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Ferramenta para avaliação da maturidade organizacional de Empresas
          Juniores a partir de questionários por área.
        </p>

        <Link
          href="/diagnostico"
          className="mt-10 inline-flex rounded-xl bg-slate-900 px-7 py-3 text-base font-medium text-white transition hover:bg-slate-800"
        >
          Iniciar diagnóstico
        </Link>
      </section>
      </div>
    </main>
  );
}