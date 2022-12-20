export async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
}
