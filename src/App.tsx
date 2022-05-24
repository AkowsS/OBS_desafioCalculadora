import { useState } from 'react'
import '../src/index.css'
import '../src/style.css'

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [Soma, setSoma] = useState(0)

  function handleSearch(){
    var num1 = parseInt(input1)
    var num2 = parseInt(input2)
    setSoma (num1+num2);
  }

  return (
    <div className="container">
      <h1 className="titulo">Calculadora</h1>
      <div className="divInput">
        <input type="number" className="input1" placeholder="valor1" value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <span>+</span>
        <input type="number" className="input2" placeholder="valor2" value={input2} onChange={(e) => setInput2(e.target.value)}/>
      </div>
      <button className="botao" onClick={handleSearch}>Somar</button>
      

      <main className="main">
        <p>resultado: {Soma}</p>
      </main>
    </div>
    
  )
}

export default App
