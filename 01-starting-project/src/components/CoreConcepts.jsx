import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((el, i) => {
          return (
            <CoreConcept
              key={el.title}
              title={el.title}
              description={el.description}
              img={el.image}
            />
            // <CoreConcept {...el} /> not working for the image part because I use "img"
          );
        })}
      </ul>
    </section>
  );
}
