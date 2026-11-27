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
      <footer className="footer">
        Design is copyright &copy; of Dishpet. No AI was used in making of this
        small app.
      </footer>
    </main>
  );
}

export default App;
