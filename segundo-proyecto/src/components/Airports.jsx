import { airports } from '../data/airports.js';

export default function Airports() {
  return (
    <div>
      <h2>Lista de Aeropuertos</h2>
      <ul>
        {airports.map((a) => (
          <li key={a.code}>
            {a.code} – {a.name}
          </li>
        ))}
      </ul>
    </div>
  );
}