import Image from "next/image";
import { getPokemons } from "../../getPokemons";

async function getPokemon( name ) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default async function Page({ params }) {
  const { name, sprites } = await getPokemon(params.name);
  const img = sprites.other.home.front_default;

  return (
    <div>
      <h1>{name}</h1>
      <Image
        alt={`Artwork for ${name}`} 
        src={img} width={200} height={200}  />
    </div>
  );
}

export async function generateStaticParams() {
  const pokes = await getPokemons();
  return pokes.results.map((p) => ({ name: p.name }));
}
