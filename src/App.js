import "./App.scss";

const App = () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      section.classList.add("active");
    });
  });

  return (
    <div>
      <div className="container">
        <section className="section one active">
          <div className="card">
            <h3>The Economist</h3>
            Is greener, faster and more decentralized alternative to Bitcoin
            possible?
          </div>
        </section>
        <section className="section two ">
          <div className="card">
            <h3>The Economist</h3>
            Is greener, faster and more decentralized alternative to Bitcoin
            possible?
          </div>
        </section>
        <section className="section three ">
          <div className="card">
            <h3>The Economist</h3>
            Is greener, faster and more decentralized alternative to Bitcoin
            possible?
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
