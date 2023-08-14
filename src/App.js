import React, { useState, useEffect } from 'react'; 
import './App.css'; 

const App = () => { 
  const [photos, setPhotos] = useState([]); 
  
  useEffect(() => { 
    fetchPhotos();
   }, []); 
  
  const fetchPhotos = async () => { 
    try { 
      const response = await 
        fetch( `https://api.unsplash.com/photos/random?count=10&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`); 
      const data = await response.json(); 
      setPhotos(data);
      } 
    catch (error) { console.error('Error fetching photos:', error); } }; 
  
    console.log(photos);
  return (
    <div className='App'>
      <h1>CyberConvoy Collage</h1>
      <div className='collage'>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.regular} alt={photo.alt_description} />
        ))}
      </div>
    </div>
  );
  }

export default App;