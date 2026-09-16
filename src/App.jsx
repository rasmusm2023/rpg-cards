import "./App.css";

// 1. KORT-MALLEN (Komponenten)
function CharacterCard(props) {
  const hero = props.character;

  return (
    <article className="card">
      <h2>{hero.name}</h2>
      <p>Roll: {hero.role}</p>
      <p>HP: {hero.hp}</p>
      <p>Level: {hero.level}</p>
    </article>
  );
}

// 2. HUVUDSIDAN
export default function App() {
  const hero1 = {
    name: "Rasmus",
    role: "Warlock",
    hp: 8000,
    level: 60,
  };

  return (
    <main>
      <h1>RPG Guild Dashboard</h1>
      <CharacterCard character={hero1} />
    </main>
  );
}
