export type Pergunta = {
  id: number;
  codigo: string;
  diretoria: string;
  dimensao: string;
  texto: string;
};

export type Respostas = Record<number, number>;

export type DiagnosticoResultado = {
  notaGeral: number;
  percentualMaturidade: number;
  nivelMaturidade:
    | "Inicial"
    | "Básico"
    | "Intermediário"
    | "Avançado"
    | "Otimizado";
  porDiretoria: Record<string, number>;
  porDimensao: Record<string, number>;
};

export const TOTAL_PERGUNTAS = 48;

const obterNivelMaturidade = (
  percentualMaturidade: number,
): DiagnosticoResultado["nivelMaturidade"] => {
  if (percentualMaturidade <= 20) {
    return "Inicial";
  }

  if (percentualMaturidade <= 40) {
    return "Básico";
  }

  if (percentualMaturidade <= 60) {
    return "Intermediário";
  }

  if (percentualMaturidade <= 80) {
    return "Avançado";
  }

  return "Otimizado";
};

const calcularMedia = (valores: number[]): number => {
  if (valores.length === 0) {
    return 0;
  }

  return valores.reduce((acc, next) => acc + next, 0) / valores.length;
};

export function calcularDiagnostico(
  respostas: Respostas,
  perguntas: Pergunta[],
): DiagnosticoResultado {
  const dimensaoMap = new Map<
    string,
    {
      acc: number;
      count: number;
      diretoria: string;
      dimensao: string;
    }
  >();
  const dimensoesPorDiretoria = new Map<string, Set<string>>();

  perguntas.forEach((pergunta) => {
    const valor = respostas[pergunta.id];

    if (typeof valor !== "number") {
      return;
    }

    const dimensaoKey = `${pergunta.diretoria} — ${pergunta.dimensao}`;
    const acumulador = dimensaoMap.get(dimensaoKey) ?? {
      acc: 0,
      count: 0,
      diretoria: pergunta.diretoria,
      dimensao: pergunta.dimensao,
    };

    acumulador.acc += valor;
    acumulador.count += 1;
    dimensaoMap.set(dimensaoKey, acumulador);

    if (!dimensoesPorDiretoria.has(pergunta.diretoria)) {
      dimensoesPorDiretoria.set(pergunta.diretoria, new Set());
    }

    dimensoesPorDiretoria.get(pergunta.diretoria)!.add(dimensaoKey);
  });

  const porDimensao: Record<string, number> = {};
  dimensaoMap.forEach((value, key) => {
    porDimensao[key] = value.count ? value.acc / value.count : 0;
  });

  const porDiretoria: Record<string, number> = {};
  dimensoesPorDiretoria.forEach((dimensoes, diretoria) => {
    const medias = Array.from(dimensoes).map(
      (dimensaoKey) => porDimensao[dimensaoKey] ?? 0,
    );

    porDiretoria[diretoria] = calcularMedia(medias);
  });

  const notaGeral = calcularMedia(Object.values(porDiretoria));
  const percentualMaturidade = Number(
    (Math.min(100, Math.max(0, ((notaGeral - 1) / 4) * 100))).toFixed(2),
  );
  const nivelMaturidade = obterNivelMaturidade(percentualMaturidade);

  return {
    notaGeral,
    percentualMaturidade,
    nivelMaturidade,
    porDiretoria,
    porDimensao,
  };
}
