//app.js
import { animals } from './animals';
import ocean from './images/ocean.jpg';
function App() {
  //const title = 'hola';
  const images = [];
  const showBackground = true;
  for (let animal in animals) {
    images.push(
      <img
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        ariaLabel={animal}
        role='button'
        onClick={displayFact}
      />
    );
  }
  function displayFact(e) {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById('fact').innerHTML = funFact;
  }
  const title = '';
  const animalFacts = (
    <div>
      <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
      
      <p id='fact'></p>
    </div>
  );
  const background = <img className='background' alt='ocean' src={ocean} />;
  return (
    <div>
      {animalFacts}
      {background}
      <div className='animals'>{images}</div>
    </div>
  );
}

export default App;
