import React, { useContext } from "react";

// STEP 4: Import ContextObject
import { FamilyContext } from '../App'

import Parents from "./Parents";
import Siblings from "./Siblings";

export default function FamilyTree() {

  // STEP 5: define what we want to pass into child component by storing
  // a useContext invocation and passing in our ContextObject
  const family = useContext(FamilyContext)

  return (
    <section className="FamilyTree">
      <h1>{family.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={family} />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings family={family} />
    </section>
  );
}
