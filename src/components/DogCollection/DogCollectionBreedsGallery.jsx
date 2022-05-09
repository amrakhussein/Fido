import { useState } from 'react'
import DogCollectionBreedsCard from './DogCollectionBreedsCard'
import DogCollectionBreedsModal from './DogCollectionBreedsModal'

export default function DogCollectionBreedsGallery({ imgSrcs }) {
  const [toggleModal, setToggleModal] = useState(false)
  const [breedsSelectedImg, setBreedsSelectedImg] = useState('null')

  const handleClick = (e) => {
    setBreedsSelectedImg(e.target.src)
  }

  return (
    <>
      <main className=''>
        <section className='px-5 mt-20 flex flex-wrap justify-center gap-4 xl:grid xl:grid-cols-3 mde:grid-cols-2 2xl:grid-cols-4   xl:justify-items-center '>
          {/* {imgSrcs && (imgSrcs?.map((src, idx) => (
            <>
          <div key={idx} className="w-96 h-72  ">
            <img className="object-fit w-full h-full rounded-xl border-2 border-cyan-200" key={idx} alt='' src={src} />
            </div>
            </>
            )))} */}

          {imgSrcs?.map((src, idx) => (
            <DogCollectionBreedsCard
              handleImgClick={handleClick}
              enlargeImg={toggleModal}
              setEnlargeImg={setToggleModal}
              key={idx}
              imgSrc={src}
            />
          ))}

          <DogCollectionBreedsModal
            setToggleModal={setToggleModal}
            toggleModal={toggleModal}
            breedsSelectedImg={breedsSelectedImg}
          />
        </section>
      </main>
    </>
  )
}
