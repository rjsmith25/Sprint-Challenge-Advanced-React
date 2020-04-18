import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

function Header() {
  const [darkMode, setDarkMode] = useDarkMode();

  function toggleMode(e) {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <header>
      <h1 className="title">Players</h1>
      <div data-testid="darkmode" className="darkmode">
        <i
          onClick={toggleMode}
          className={darkMode ? "fas fa-toggle-on" : "fas fa-toggle-off"}
        ></i>
      </div>
    </header>
  );
}

export default Header;
