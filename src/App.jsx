import Arrow from "./components/Arrow";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import Unsplash from "./components/Unsplash";

function App() {
  return (
    <main className="main">
      <Unsplash />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <Arrow />
    </main>
  );
}

export default App;
