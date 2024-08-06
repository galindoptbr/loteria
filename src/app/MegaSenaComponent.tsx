import React from "react";

interface Props {
  concursos: MegaSenaProps[];
}

const MegaSenaComponent: React.FC<Props> = ({ concursos }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-8">Mega Sena</h1>
      {concursos.map((concurso, index) => (
        <div key={index}>
          <h2>Concurso: {concurso.concurso}</h2>
          <p>Data: {concurso.data}</p>
          <p>Local: {concurso.local}</p>
          <p>Dezenas: {concurso.dezenas.join(", ")}</p>
          <p>Acumulou: {concurso.acumulou ? "Sim" : "Não"}</p>
          <p>
            Proximo Premio:{" "}
            {concurso.valorAcumuladoProximoConcurso.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MegaSenaComponent;
