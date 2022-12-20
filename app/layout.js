import Link from "next/link";
import { getPokemons } from "./getPokemons";

export default async function Layout({ children }) {
  const { results } = await getPokemons();

  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      <ul>
        {results.map(({ name }, i) => (
          <li key={`${name}_${i}`}>
            <Link href={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
