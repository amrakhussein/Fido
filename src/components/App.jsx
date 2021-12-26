import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './fakePages/Home';
import About  from './fakePages/About';
import Info  from './fakePages/Info';
import Navigation from './Navigation/Navigation';
import Gallery from './dogCollections/Gallery/Gallery';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  const [imgData, setImgData] = useState([])
  // console.log('img data ', imgData)
  useEffect(() => {
      const fetchData = async () => {
        try {
          let opts = {
          "method": "GET",
          "headers": {
          "x-rapidapi-key": "93bf85dd-ae5f-4fb0-8f13-8c60ec306578"
          }
        }

          let data = await fetch('https://api.thedogapi.com/v1/images/search?limit=50', opts)
          if (!data.ok) throw Error("problem has been encountered during fetching dogs album...")
          let res = await data.json()
          // console.log("res:::", res)
          setImgData(res)
        } catch (err) {
          throw new Error(err.message)
        }
      }
      fetchData()
    }, [])
 

  return (
      <div className="App">
          <Router>
          <Navigation />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/info' element={<Info />} />
              <Route path='/gallery' element={<Gallery data={imgData} />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
