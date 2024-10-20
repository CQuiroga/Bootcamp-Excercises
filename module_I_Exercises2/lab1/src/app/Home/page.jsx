'use client'
import styles from "../page.module.css";

import { useEffect, useState } from "react";

export default function Home() {
  const [contador, setcontador] = useState(0);

  useEffect(() => {
    document.title = `Cambio título ${contador} veces`;
  }, [contador]);

  const cambiaContador = () => {
    setcontador(contador + 1); // Aumentar número aquí

}

  return (
    <div className={styles.page}>
              <h1
              style={{color:"green"}}>Home Page</h1>    
              <h2>
                Aumenta el contador para continuar
              </h2>
              <h4>{contador}</h4>
              <button 
              style={{padding:"8px", backgroundColor:"blue"}} 
              onClick={cambiaContador}>Aumentar</button>
              <p>Welcome to the home page!</p>
          </div>
  );
};
