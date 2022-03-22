import './App.css'
import DogCollectionBreeds from './components/DogCollection/DogCollectionBreeds'
import DogCollectionBreedsGallery from './components/DogCollection/DogCollectionBreedsGallery'

function App() {
  return (
    <div className='bg-gray-200 h-screen'>
      {/* <NavLink className='' to='gallery'>
        Choose Dog breed
      </NavLink> */}

      <DogCollectionBreeds />
      <DogCollectionBreedsGallery />
    </div>
  )
}

export default App
