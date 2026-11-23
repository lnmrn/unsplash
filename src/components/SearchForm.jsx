import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";

function SearchForm() {
  const { setQuery } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setQuery(inputValue);
  }

  return (
    <section>
      <h1 className="title">UNSPLASH</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
