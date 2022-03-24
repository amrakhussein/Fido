export default function DogCollectionBreedsModal({
  toggleModal,
  setToggleModal,
  breedsSelectedImg,
}) {
  return (
    <>
      {toggleModal && (
        <div className="">
          <div
           
            className='fixed inset-0 bg-black opacity-90 z-10   '
          ></div>
          <div  onClick={() => setToggleModal(!toggleModal)} className='z-10 fixed inset-0 flex justify-center items-center   '>
            <div className='z-20 inset-0 relative bg-gray-500  objectd-contain '>
              <figure className='z-30'>
                <img className='object-cover h-[15rem] w-[20rem] sm:h-72 sm:w-96' src={breedsSelectedImg} alt='image of a dog breed' />
              </figure>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
