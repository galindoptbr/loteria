import Image from "next/image";
import React from "react";
import banner from "@/images/megasena-banner.gif";
import { MegaSenaProps, Premiacao } from "@/types";

interface Props {
  concursos: MegaSenaProps[];
  premiacao: Premiacao[];
}

const MegaSenaComponent: React.FC<Props> = ({ concursos, premiacao }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center  w-full">
          <Image src={banner} alt="logo caixa" />
        </div>
        {concursos.map((concurso, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col justify-center max-w-[80%]">
              <div className="flex items-center gap-2 mt-6">
                <h2 className="text-2xl text-[#0065B7] font-bold">
                  Resultado{" "}
                </h2>
                <p className="text-sm mt-1">Concurso</p>
                <p className="mt-1 font-bold text-gray-500">
                  {concurso.concurso}
                </p>
                <p className="mt-1 text-gray-500">{concurso.data}</p>
              </div>
              <p className="text-xl text-[#0065B7] text-center font-bold">
                {concurso.acumulou ? "Acumulou!" : ""}
              </p>
              <p className="text-center text-gray-500">
                Sorteio realizado no {concurso.local}
              </p>
              <p className="flex justify-center gap-2 p-2">
                {concurso.dezenas
                  .map((dezena: string, index: number) => (
                    <span
                      key={index}
                      className="p-2 rounded-full bg-[#209869] text-white w-10 text-center font-bold"
                    >
                      {dezena}
                    </span>
                  ))
                  .reduce((prev, curr) => [prev, "", curr] as any)}
              </p>
              <p className="text-center text-gray-500">
                Acumulado próximo concurso{" "}
              </p>
              <p className="text-center text-xl font-semibold">
                {concurso.valorAcumuladoProximoConcurso.toLocaleString(
                  "pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}
              </p>
            </div>
            <div className="bg-gray-300 w-[90%] rounded-md mt-4">
              <div className="p-4">
                <h3 className="text-xl text-[#0065B7] font-bold">Premiação</h3>
                {premiacao.map((premio, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex flex-col">
                      <p className="font-bold text-gray-500">
                        {premio.descricao}
                      </p>
                      <span className="flex gap-1 text-gray-500">
                        {" "}
                        {premio.ganhadores === 0
                          ? "Não houve ganhadores"
                          : `${premio.ganhadores} apostas ganhadoras,`}
                        <p className="font-semibold">
                          {premio.valorPremio === 0
                            ? ""
                            : premio.valorPremio.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
                {concursos.map((valorArrecadado, index) => (
                  <div key={index}>
                    <h2 className="text-xl text-[#0065B7] font-bold mb-2">
                      Arrecadação total
                    </h2>
                    <p className="font-bold text-gray-600">
                      {valorArrecadado.valorArrecadado.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default MegaSenaComponent;
