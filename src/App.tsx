import { useState } from "react";
import imagemArabesco from './assets/linhas1.png';

export default function App(){

  const frases=["🍥​ Algo muito bom está prestes a acontecer!",
"​💮​ Confie na sua intuição e no seu conhecimento, a resposta está certa!",
"​🍧​ O cansaço é temporário, mas o conhecimento que você está construindo é para sempre!",
"​🐰​ Um novo ciclo de muita colheita e prosperidade está se abrindo para você.",
"​​🍪​ Hora de fazer uma pausa, tomar um café e respirar fundo. O universo aprova."
];
  const [indice, setindice] = useState (0);
  const sortear = ()=>{
      const num = Math.floor(Math.random()*frases.length);
      setindice(num);
  }
  return(
    <>
   
      <img src= {imagemArabesco} className="topo-esquerda" alt="" />
        <img src={imagemArabesco} className="baixo-direita" alt="" />
      <main className="layout">
        <div className="emoji">
          <h1>🌸​</h1>
          <h2>Bem vindo ao oraculo</h2>
          <p className="texto">{frases[indice]}</p>
          <div className="botoes">
            <button onClick={sortear}>Tirar Conselho</button>
          </div>
      </div>
    </main>
    </>
  );
}