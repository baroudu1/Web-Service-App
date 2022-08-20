import React , {useState} from 'react';


function App() {

  let [count , setCount] = useState(0);
  let [person , setPerson] = useState(0);


  return (
    <main className="container">
      <p>Vous avez cliqué {person} fois</p>
      <button onClick={() => setPerson(person + 1)}>
        Cliquez ici
      </button>
    </main>
  );
}

export default App;
