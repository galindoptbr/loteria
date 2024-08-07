"use client"

import { useEffect, useState } from "react";
import MegaSenaComponent from "./MegaSenaComponent";
import Footer from "./Footer";

async function fetchMegaSenaData(): Promise<MegaSenaProps> {
  const API_URL_MEGASENA = "https://loteriascaixa-api.herokuapp.com/api/megasena/latest";
  const response = await fetch(API_URL_MEGASENA);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: MegaSenaProps = await response.json();
  return data;
}

interface HomeProps {
  concurso: MegaSenaProps;
  premiacao: Premiacao;
}

const Home: React.FC<HomeProps> = () => {
  const [concurso, setConcurso] = useState<MegaSenaProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedConcurso = await fetchMegaSenaData();
        setConcurso(fetchedConcurso);
      } catch (error) {
        console.error("Error fetching MegaSena data:", error);
      }
    }
    fetchData();
  }, []);

  if (!concurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <MegaSenaComponent concursos={[concurso]} premiacao={concurso.premiacoes} />
      <Footer />
    </>
  );
};

export default Home;