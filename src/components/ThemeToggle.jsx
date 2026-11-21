import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { useGlobalContext } from "../GlobalContext";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <div className="icon-container">
        <span className="icon-text">
          Make it {isDarkTheme ? "light" : "dark"}
        </span>
        <button onClick={toggleDarkTheme} className="dark-toggle">
          {isDarkTheme ? (
            <MdOutlineWbSunny className="toggle-icon" />
          ) : (
            <MdOutlineModeNight className="toggle-icon" />
          )}
        </button>
      </div>
    </section>
  );
}

export default ThemeToggle;
