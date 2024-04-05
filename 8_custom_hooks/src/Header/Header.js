import React from "react";

const Header = () => {

  return (
    <header className="header">
      <h2>Todos</h2>
      <section className="actionsContainer">
        <button
          onClick={() => console.log('Uh oh! Something went wrong!')}
        >
          Change to 🌚 mode
        </button>
      </section>
    </header>
  );
};

export default Header;
