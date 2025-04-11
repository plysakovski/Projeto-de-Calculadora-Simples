'use client';
import { useState } from "react";
export default function Home() {
  const [numeroUm, setNumeroUm] = useState('');
  const [numeroDois, setNumeroDois] = useState('');
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('Somar');
  const [historico, setHistorico] = useState([]);
  const calcular = () => {
    const num1 = parseFloat(numeroUm);
    const num2 = parseFloat(numeroDois);
    let resultadoOperacao = 0;
      if (isNaN(num1) || isNaN(num2)) {
      setResultado('Erro: Preencha os dois campos!');
      return;
    }
      switch (operacao) {
      case 'Somar':
        resultadoOperacao = num1 + num2;
        break;
      case 'Subtrair':
        resultadoOperacao = num1 - num2;
        break;
      case 'Multiplicar':
        resultadoOperacao = num1 * num2;
        break;
      case 'Dividir':
        resultadoOperacao = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
        break;
      default:
        resultadoOperacao = 0;
    }
      setResultado(resultadoOperacao);
      const operadorSimbolo = {
      'Somar': '+',
      'Subtrair': '-',
      'Multiplicar': '*',
      'Dividir': '/',
    };
      const novaOperacao = `${num1} ${operadorSimbolo[operacao]} ${num2} = ${resultadoOperacao}`;
    setHistorico([...historico, novaOperacao]);
  };
  const limparHistorico = () => {
    const confirmar = window.confirm("Tem certeza que deseja apagar o histórico?");
    if (confirmar) {
      setHistorico([]);
    }
  };
 return (
    <div>
      <div className="top">
        <h1>Operações</h1>
      </div>
      <div className="mid">
        <select onChange={(e) => setOperacao(e.target.value)} value={operacao}>
          <option value="Somar">Somar</option>
          <option value="Subtrair">Subtrair</option>
          <option value="Multiplicar">Multiplicar</option>
          <option value="Dividir">Dividir</option>
        </select>
        <input type="number" value={numeroUm} onChange={(e) => setNumeroUm(Number(e.target.value))} />
        <input type="number" value={numeroDois} onChange={(e) => setNumeroDois(Number(e.target.value))} />
        <br />
        <button onClick={calcular}>Calcular</button>
        <br />
        <label style={{ opacity: resultado !== '' ? 1 : 0.5 }}> Resultado: {resultado}
</label>
        <div className="historico">
          <h3>Histórico</h3>
          <ul>
            {historico.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={limparHistorico} style={{ backgroundColor: '#ff4d4d' }}>
  Limpar Histórico 🗑️
</button>
      <div className="low">
        <h3>Produzido por: Pedro Lysakovski, Marcos Chagas e Jean Caetano</h3>
      </div>
    </div>
  );
}
