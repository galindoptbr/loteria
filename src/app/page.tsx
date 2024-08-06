import MegaSenaComponent from "./MegaSenaComponent";

async function fetchMegaSenaData(): Promise<MegaSenaProps> {
  const API_URL_MEGASENA =
    "https://loteriascaixa-api.herokuapp.com/api/megasena/latest";
  const response = await fetch(API_URL_MEGASENA);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: MegaSenaProps = await response.json();
  console.log(data);
  return data;
}

const Home = async ({ concurso }: { concurso?: MegaSenaProps }) => {
  console.log(concurso);
  const concursos = await fetchMegaSenaData();
  return (
    <>
      <MegaSenaComponent concursos={[concursos]} />
    </>
  );
};

export default Home;
