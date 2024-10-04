import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((el, i) => {
              return (
                <CoreConcept
                  key={i}
                  title={el.title}
                  description={el.description}
                  img={el.image}
                />
                // <CoreConcept {...CORE_CONCEPTS[i]} /> not working for the image part because I use "img"
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
