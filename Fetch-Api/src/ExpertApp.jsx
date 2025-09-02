import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const ExpertApp = () => {
  const [categories, setCategories] = useState(["star wars"]);

  const onAddCategory = (newCategory) => {
    const value = newCategory.trim();
    if (value.length <= 1) return;
    setCategories([value]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={onAddCategory} />
      </header>

      {categories.map((c) => (
        <section className="carousel-section" key={c}>
          <GifGrid category={c} />
        </section>
      ))}
    </div>
  );
};
