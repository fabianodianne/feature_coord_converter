import { useState } from 'react'
import './App.css'
import { convert } from './convert';

function App() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };

  const handleLngChange = (e) => {
    setLng(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dms = convert(lat, lng);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label for='lat'>Latitude in Decimal Degrees</label>
            <input type='text' id='lat' name='lat' value={lat} onChange={handleLatChange} />
          </div>

          <div>
            <label for='lng'>Longitude in Decimal Degrees</label>
            <input type='text' id='lng' name='lng' value={lng} onChange={handleLngChange} />
          </div>

          <button type='submit'>Convert Coords</button>
        </form>
        <button>Save</button>
      </div>
    </>
  )
}

export default App;
