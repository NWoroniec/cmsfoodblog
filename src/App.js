import React, {useEffect, useState} from 'react';
import Recipies from './components/Recipies/Recipies';
import SingleRecipie from './components/SingleRecipie/SingleRecipie';
import { Routes, Route } from "react-router-dom";


function App() {
const [loading, setLoading] = useState(false);
const [recipies, setRecipies] = useState([]);
const [singleRecipie, setSingleRecipie] = useState([]);
const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchRecipies = async () => {
      const url = `https://cdn.contentful.com/spaces/xzt8xx1icvbr/environments/master/entries?access_token=${process.env.REACT_APP_API_KEY}`;
      try {
        setLoading(true);
        const response = await fetch(url);
  
        if (response.ok) {
          const data = await response.json();
          
          
          setRecipies(data.items);
          
          setLoading(false);
        } else {
          console.error("Fetch error!");
          alert("There has been an error!");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchRecipies();
  }, []);


  const testfunc = () => {
    
  }

  

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://cdn.contentful.com/spaces/xzt8xx1icvbr/environments/master/assets?access_token=${process.env.REACT_APP_API_KEY}`;
      try {
        setLoading(true);
        const response = await fetch(url);
  
        if (response.ok) {
          const data = await response.json();
        
          
          setImages(data.items);
          
          setLoading(false);
        } else {
          console.error("Fetch error!");
          alert("There has been an error!");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchImages();
  }, []);





  
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Recipies recipies={recipies} images={images} testfunc={testfunc}/>} />
      <Route path="/:slug" element={<SingleRecipie images={images} />} />
      </Routes>
    </div>
  );
}

export default App;


