import reactIMG from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescription = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactIMG} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
