import { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
import Search from "./Search";

function App() {
  const data = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NodeJS"];
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);
  useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div className="App">
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find Course:
      </Search>
      <List items={items} />
    </div>
  );
}

export default App;
