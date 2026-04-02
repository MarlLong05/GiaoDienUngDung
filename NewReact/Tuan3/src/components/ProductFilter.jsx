import { useMemo, useState } from "react";

const products = Array.from({ length: 2000 }, (_, i) => ({
  id: i,
  name: "Product " + i,
  price: Math.floor(Math.random() * 1000)
}));

export default function ProductFilter() {
  const [search, setSearch] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

    const filtered = useMemo(() => {
        console.time("filter");
        const result = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= min &&
        p.price <= max
        );
        console.timeEnd("filter");
        return result;
    }, [search, min, max]);

  const total = useMemo(() => {
    return filtered.reduce((sum, p) => sum + p.price, 0);
  }, [filtered]);

  return (
    <div>
      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <input type="number" onChange={e => setMin(+e.target.value)} />
      <input type="number" onChange={e => setMax(+e.target.value)} />

      <h3>Tong la : {total}</h3>
      <ul>
        {filtered.slice(0, 20).map(p => (
          <li key={p.id}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </div>
  );
}