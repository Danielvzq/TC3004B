import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [category, images.length]);

  const prev = () => {
    if (!images.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!images.length) return;
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (!images.length) return <p>No hay GIFs para “{category}”.</p>;

  const current = images[index];

  return (
    <div className="carousel">
      <h3>
        {category} <span className="count">{index + 1}/{images.length}</span>
      </h3>

      <div className="carousel-inner">
        <button className="nav prev" onClick={prev} aria-label="Anterior">←</button>

        <div className="card single">
          <GifItem title={current.title} url={current.url} />
        </div>

        <button className="nav next" onClick={next} aria-label="Siguiente">→</button>
      </div>
    </div>
  );
};
