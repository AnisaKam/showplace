import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const[place, setPlace] = useState(0);
  const {id, showplace, description, image} = data[place];

  const previousPlace = () => {
    setPlace((place => {
      place --;
      if (place < 0) {
        return data.length - 1
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace((place => {
      place ++;
      if (place > data.length - 1) {
        place = 0;
      }
      return place;
    }))
  }

  return (
  <div>

    <div className='container fonts'>
      <h1>{id} - {showplace}</h1>
    </div>

    <div className='container fonts'>
      <img src={image} width='370px' alt='showplace'/>
    </div>

    <div className='container fonts'>
      <h2>{description}</h2>
    </div>

    <div className='btn container fonts'>
      <button onClick={previousPlace}>Previous</button>
      <button onClick={nextPlace}>Next</button>
    </div>



</div>
  )
}

export default App;
