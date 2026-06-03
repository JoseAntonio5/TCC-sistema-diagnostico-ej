type DimensaoAnalise = {
  dimensao: string;
  nota: number;
};

export type AnaliseInterpretativa = {
  resumoExecutivo: string;
  nivelMaturidade: string;
  melhorDimensao: DimensaoAnalise | null;
  piorDimensao: DimensaoAnalise | null;
  principalOportunidade: DimensaoAnalise | null;
  pontosFortes: DimensaoAnalise[];
  oportunidadesMelhoria: DimensaoAnalise[];
};

const formataNota = (nota: number) => nota.toFixed(2);

export function interpretarDiagnostico(
  resultado: {
    notaGeral: number;
    nivelMaturidade: string;
    porDimensao: unknown;
  },
): AnaliseInterpretativa {
  const dimensoes =
    resultado &&
    typeof resultado === "object" &&
    resultado.porDimensao &&
    typeof resultado.porDimensao === "object"
      ? Object.entries(resultado.porDimensao as Record<string, unknown>).reduce<DimensaoAnalise[]>(
          (acc, [dimensao, nota]) => {
            const valor = typeof nota === "number" ? nota : Number(nota);
            if (Number.isFinite(valor)) {
              acc.push({ dimensao, nota: valor });
            }
            return acc;
          },
          [],
        )
      : [];

  if (dimensoes.length === 0) {
    return {
      resumoExecutivo:
        "Não há dados suficientes para gerar a análise interpretativa.",
      melhorDimensao: null,
      piorDimensao: null,
      principalOportunidade: null,
      pontosFortes: [],
      oportunidadesMelhoria: [],
    };
  }

  const ordenadoAsc = dimensoes.slice().sort((a, b) => {
    if (a.nota !== b.nota) return a.nota - b.nota;
    return a.dimensao.localeCompare(b.dimensao);
  });

  const ordenadoDesc = [...ordenadoAsc].reverse();

  const piorDimensao = ordenadoAsc[0] ?? null;
  const melhorDimensao = ordenadoDesc[0] ?? null;
  const pontosFortes = ordenadoDesc.slice(0, 3);
  const oportunidadesMelhoria = ordenadoAsc.slice(0, 3);
  const principalOportunidade = oportunidadesMelhoria[0] ?? null;

  const resumoParts: string[] = [
    `A avaliação realizada indica nível de maturidade ${resultado.nivelMaturidade}.`,
  ];

  if (melhorDimensao && piorDimensao) {
    resumoParts.push(
      `Os resultados sugerem que a dimensão com melhor desempenho foi ${melhorDimensao.dimensao}, enquanto a dimensão de principal atenção foi ${piorDimensao.dimensao}.`,
    );
  }

  if (pontosFortes.length > 0) {
    resumoParts.push(
      `Os aspectos com melhor desempenho constam entre as dimensões de maior pontuação e podem ser considerados referências positivas no resultado.`,
    );
  }

  if (oportunidadesMelhoria.length > 0) {
    resumoParts.push(
      `As dimensões de menor pontuação indicam oportunidades de desenvolvimento e merecem atenção adicional.`,
    );
  }

  return {
    resumoExecutivo: resumoParts.join(" "),
    nivelMaturidade: resultado.nivelMaturidade,
    melhorDimensao,
    piorDimensao,
    principalOportunidade,
    pontosFortes,
    oportunidadesMelhoria,
  };
}
