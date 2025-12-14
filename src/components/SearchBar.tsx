import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

import "../styles/SearchBar.css";
import iconSearch from "../assets/images/icon-search.png";
import { searchIndex } from "../data/searchIndex"; // создадим позже

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Настройка Fuse.js
  const fuse = new Fuse(searchIndex, {
    keys: ["title", "description", "keywords"],
    threshold: 0.35, // чувствительность: 0 = строго, 1 = очень свободно
  });

  // Поиск при вводе
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(query).map((r) => r.item);
    setResults(searchResults.slice(0, 8)); // максимум 8 подсказок
  }, [query]);

  // Закрытие списка при клике вне компонента
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // При выборе результата
  function handleSelect(path: string) {
    navigate(path);
    setQuery("");
    setShowSuggestions(false);
  }

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="rechercher"
          className="search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />

        <img src={iconSearch} alt="" className="search-icon" />
      </div>

      {/* Список подсказок */}
      {showSuggestions && results.length > 0 && (
        <ul className="search-suggestions">
          {results.map((item) => (
            <li
              key={item.id}
              className="search-suggestion"
              onClick={() => handleSelect(item.path)}
            >
              <span className="suggestion-title">{item.title}</span>
              <span className="suggestion-type">{item.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
