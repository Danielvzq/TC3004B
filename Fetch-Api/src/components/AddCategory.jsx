import { useEffect, useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(
    () => localStorage.getItem("lastQuery") || ""
  );

  useEffect(() => {
    localStorage.setItem("lastQuery", inputValue);
  }, [inputValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onNewCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar imágenes"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};
