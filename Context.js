import React, { createContext, useState } from "react";

const FitnessItems = createContext();

const Context = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    /*  aktarılmak istenen değerleri global şekilde tutar ve direkt olarak kullanılması gereken component’e aktarılmasını sağlar. 
    Böylelikle bir state’i, component ağacının altlarında bulunan bir component’e aktarmak istediğiniz zaman, 
    her seferinde props olarak göndermenize gerek kalmaz. 
    */
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export { Context, FitnessItems };
