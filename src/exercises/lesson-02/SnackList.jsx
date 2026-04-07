export default function SnackList() {
  const snacks = [
    { name: 'lays', rank: 3 },
    { name: 'pringles', rank: 2 },
    { name: 'doritos', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <ul>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ul>
    </div>
  );
}
