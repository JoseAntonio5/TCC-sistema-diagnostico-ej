import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          Sistema de Diagnóstico Organizacional
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
