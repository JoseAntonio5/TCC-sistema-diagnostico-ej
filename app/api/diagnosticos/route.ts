import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

type RespostaPayload = {
  perguntaId: number;
  codigo: string;
  diretoria: string;
  dimensao: string;
  texto: string;
  valor: number;
};

type DiagnosticoPayload = {
  empresaNome: string;
  respostas: RespostaPayload[];
  notaGeral: number;
  percentualMaturidade: number;
  nivelMaturidade: string;
  porDiretoria: Record<string, number>;
  porDimensao: Record<string, number>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DiagnosticoPayload;
    const empresaNome = body.empresaNome?.trim();

    if (!empresaNome) {
      return NextResponse.json(
        { error: "Nome da Empresa Júnior é obrigatório." },
        { status: 400 },
      );
    }

    if (!Array.isArray(body.respostas) || body.respostas.length === 0) {
      return NextResponse.json(
        { error: "Respostas não podem ficar vazias." },
        { status: 400 },
      );
    }

    const empresa =
      (await prisma.empresa.findFirst({ where: { nome: empresaNome } })) ??
      (await prisma.empresa.create({ data: { nome: empresaNome } }));

    const diagnostico = await prisma.diagnostico.create({
      data: {
        empresaId: empresa.id,
        notaGeral: body.notaGeral,
        percentualMaturidade: body.percentualMaturidade,
        nivelMaturidade: body.nivelMaturidade,
        porDiretoria: body.porDiretoria,
        porDimensao: body.porDimensao,
        resposta: {
          create: body.respostas.map((resposta) => ({
            perguntaId: resposta.perguntaId,
            codigo: resposta.codigo,
            diretoria: resposta.diretoria,
            dimensao: resposta.dimensao,
            texto: resposta.texto,
            valor: resposta.valor,
          })),
        },
      },
      include: {
        empresa: true,
      },
    });

    return NextResponse.json({ diagnosticoId: diagnostico.id }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar o diagnóstico." },
      { status: 500 },
    );
  }
}
