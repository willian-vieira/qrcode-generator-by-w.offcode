import { useEffect, useState } from 'react';
import '../styles/App.css';

export default function QrCode() {

  //Hooks Estados
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState("400");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  //Alterar o URL apenas quando o usuário
  //Muda a entrada
  useEffect(() => {
    setQrCode(`http://api.qrserver.v{com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  //Atualizando a palavra de entrada quando o usuário
  //CLique no botão gerar 
  function hadleClick() {
    setWord(temp);
  }

  return (
    <div className="qrCode">
      <h1>QrCode Generador</h1>

      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
           (e) => {setTemp(e.target.value)}}
           placeholder="Enter text to code" />

          <button className="button" onClick={ hadleClick }>
            Generate
          </button>
        </div>

        <div className="extra">
          <h5>Backgorund Color:</h5>
          <input type="color" onChange={(e) => 
           { setSize(e.target.value.substring(1)) }} />
        </div>    
      </div>
      <div className="output-box">
        <img src={ qrCode } alt="" />

        <a href={ qrCode } download="QrCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
