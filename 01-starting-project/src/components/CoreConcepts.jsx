import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section
      title="Core concepts"
      id="core-concepts"
      className="not-used-just-testing"
    >
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
    </Section>
  );
}
