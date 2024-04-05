import { useState } from 'react'
import './App.css'
import { convert } from './convert'

function App() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [latDMS, setLatDMS] = useState('');
  const [lngDMS, setLngDMS] = useState('');
  const [isConverted, setIsConverted] = useState(false);

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };

  const handleLngChange = (e) => {
    setLng(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {latitude, longitude} = convert(lat, lng);

    setLatDMS(latitude);
    setLngDMS(longitude);
    setIsConverted(true);
  };


  return (
    <>
      <div className='w-screen h-screen flex p-4 gap-2'>
        <div className='w-1/2 border-2 rounded-md content-center p-10'>
          <form onSubmit={handleSubmit}>
            <div className=''>
              <label htmlFor='lat'>Latitude in Decimal Degrees</label>
              <input type='text' id='lat' value={lat} onChange={handleLatChange} required className='border-2 rounded-sm w-full p-1'/>
            </div>

            <div>
              <label htmlFor='lng'>Longitude in Decimal Degrees</label>
              <input type='text' id='lng' value={lng} onChange={handleLngChange} required className='border-2 rounded-sm w-full p-1'/>
            </div>

            <button type='submit' className='w-full my-4 bg-blue-400 hover:bg-blue-500 text-white font-bold'>Convert Coords</button>
          </form>
          {isConverted && (
            <button className='w-full bg-blue-400 hover:bg-blue-500 text-white font-bold'>Save</button>
          )}
        </div>

        {isConverted && (
          <div className='w-1/2 border-2 rounded-md content-center p-10'>
            <div className='my-2'>
              <p className='font-semibold'>Latitude DMS</p>
              <div className='w-full p-2 bg-blue-50'>
                <p>{latDMS}</p>
              </div>
            </div>

            <div className='my-2'>
              <p className='font-semibold'>Longitude DMS</p>
              <div className='w-full p-2 bg-blue-50'>
                <p>{lngDMS}</p>
              </div>
            </div>
          </div>
        )}


      </div>
    </>
  )
}

export default App;