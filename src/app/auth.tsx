export async function getStaticProps() {
  const API_URL_MEGASENA =
    "https://loteriascaixa-api.herokuapp.com/api/megasena";

  const response = await fetch(API_URL_MEGASENA);

  const data: MegaSenaProps[] | undefined = await response.json();

  console.log(data?.length);
  return {
    props: {
      consursos: [],
    },

    revalidate: 60,
  };
}
