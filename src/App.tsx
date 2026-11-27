import './App.css'
import { useState } from "react";

function App(){
  const [imiePostaci, setimiePostaci] = useState("");
  const [CzyPubliczna, setCzyPubliczna] = useState(true);
  const [RasaPostaci, setRasaPostaci] = useState("Czlowiek");
  const [KlasaPostaci, setKlasaPostaci] = useState("Czlowiek");
  const [poziom, setpoziom] = useState(1);
  return(
    <>
  <h1>˚₊‧꒰ა Stworz postac ໒꒱ ‧₊˚</h1>
<form>
  
  <label htmlFor="imiePostaci">imie: </label>
    <input 
    type="text" id="imiePostaci" 
    value={imiePostaci}
    onChange={(event) => setimiePostaci(event.target.value)}
    />
    <br></br>

  
  <label htmlFor="RasaPostaci">Klasa: </label>
    <select id="RasaPostaci"
    value={RasaPostaci}
    onChange={(event => setRasaPostaci(event.target.value))}
    >
      <option value="Czlowiek">Czlowiek</option>
      <option value="Elf">Elf</option>
      <option value="Krasnoludek">Krasnoludek</option>
      <option value="Ork">Ork</option>
    </select>
    <br></br>

    <label htmlFor="KlasaPostaci">Klasa: </label>
    <select id="KlasaPostaci"
    value={KlasaPostaci}
    onChange={(event => setKlasaPostaci(event.target.value))}
    >
      <option value="Wojownik">Wojownik</option>
      <option value="Mag">Mag</option>
      <option value="Łucznik">Łucznik</option>
    </select>
    <br></br>

    <label htmlFor="poziom">Poziom: </label>
    <input id="poziom"
    type='number'
    value={poziom}
    min={1}
    max={100}
    onChange={(event) => setpoziom(Number(event.target.value))}/>
    {/* poki co poziom jest tekstem, jak bedzie trzeba cos liczyc to trzreba bedzie sprawsowac */}
    <br></br>
    
    <label htmlFor="opisPostaci">Opis Postaci: </label>
    <textarea id="opisPostaci" maxLength={200}/>
    <br></br>

    <label htmlFor="CzyPubliczna">Postac publiczna? </label>
    <input type='checkbox' id="CzyPubliczna"
    checked={CzyPubliczna}
    onChange={(event) => setCzyPubliczna(event.target.checked)}
    />
    <br></br>

    <button type='submit'>Utworz!</button>
</form>


</>)
}
export default App
