import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return { ...prevState, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a positive duration</p>
      )}
    </>
  );
}

export default App;
