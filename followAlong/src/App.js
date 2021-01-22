// Step 1: Import createContext from react
import React, { useState, createContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

// Step 2: Create a Context Object using createContext()
// Call it something that relates to the data that the context object will be providing
export const FamilyContext = createContext()

// We can see we n ow have access to a Provider & Consumer component
console.log(FamilyContext)

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(d => (
          <button
            className={`family-button ${d.familyName ===
              activeFamily.familyName && "active"}`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      {/* {activeFamily && <FamilyTree family={activeFamily} />} */}

      {/* STEP 3: Wrap our component with Context Object PROVIDER component*/}
      {/* We provide data to our Provider through a value prop*/}
      {activeFamily && (
        <FamilyContext.Provider value={activeFamily}>
          <FamilyTree />
        </FamilyContext.Provider>
      )}
    </div>
  );
}