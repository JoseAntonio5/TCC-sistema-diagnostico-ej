export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">Sistema de Diagnóstico Organizacional</p>
          <p className="mt-1 text-sm text-slate-600">
            Desenvolvido como Trabalho de Conclusão de Curso.
          </p>
        </div>

        <div className="text-sm text-slate-600">
          Autor: José Antônio Lopes Paiva Júnior<br />
          {currentYear}
        </div>
      </div>
    </footer>
  );
}
