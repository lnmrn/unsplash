function SearchForm() {
  return (
    <section>
      <h1 className="title">Unsplash</h1>
      <form className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
