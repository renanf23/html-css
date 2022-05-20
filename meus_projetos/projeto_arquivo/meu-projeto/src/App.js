
import './App.css';

function App() {

  const name = "Renan"

  const newName = name.toUpperCase()

  const url = "https://via.placeholder.com/150"

  function soma(a,b){
    return a+b
  }

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src={url} alt= "Minha imagem" />

    </div>
    
  );
}

export default App;
