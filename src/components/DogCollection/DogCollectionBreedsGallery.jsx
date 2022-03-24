import { useState } from "react";
import DogCollectionBreedsCard from "./DogCollectionBreedsCard"
import DogCollectionBreedsModal from "./DogCollectionBreedsModal";

export default function DogCollectionBreedsGallery({ imgSrcs }) {
  const [toggleModal, setToggleModal] = useState(false)
  const [breedsSelectedImg, setBreedsSelectedImg] = useState('null')
  console.log('toggleModal: ', toggleModal);
const  handleClick = (e) => {
  console.log(e.target.src)
  setBreedsSelectedImg(e.target.src)
}

  console.log('imgSrcs: ', imgSrcs)

  return (
    <>
      <main>
        <section className='mt-20 gap-4 grid grid-cols-4 px-5 place-ditems-center justify-items-center '>
          {/* {imgSrcs && (imgSrcs?.map((src, idx) => (
            <>
          <div key={idx} className="w-96 h-72  ">
            <img className="object-fit w-full h-full rounded-xl border-2 border-cyan-200" key={idx} alt='' src={src} />
            </div>
            </>
            )))} */}

          {imgSrcs?.map((src, idx) => (
            <DogCollectionBreedsCard handleImgClick={handleClick}  enlargeImg={toggleModal} setEnlargeImg={setToggleModal} key={idx} imgSrc={src} />
          ))}

          
      <DogCollectionBreedsModal setToggleModal={setToggleModal} toggleModal={toggleModal} breedsSelectedImg={breedsSelectedImg} />

        </section>
      </main>
    </>
  )
}
