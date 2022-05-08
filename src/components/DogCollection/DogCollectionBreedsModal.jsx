export default function DogCollectionBreedsModal({
  toggleModal,
  setToggleModal,
  breedsSelectedImg,
}) {
  return (
    <>
      {toggleModal && (
        // <div className=''>
        <>
          <div
            onClick={() => setToggleModal(!toggleModal)}
            className='z-[200] fixed inset-0'
          ></div>
          <div className='fixed inset-0 bg-black opacity-90'></div>
          <div className='justify-center items-center reladtive'>
            {/* <div   className='z-[100] inset-0 absolute bg-gray-500  objectd-contain '> */}
            <figure className='pointer-events-none absolute left-[50%] ml-[-11rem] mx-auto top-[50%] mt-[-7.5rem] z-[300]'>
              <img
                className='pointer-events-none rounded-lg object-cover h-[15rem] w-[22rem] sm:h-72 sm:w-96'
                src={breedsSelectedImg}
                alt='image of a dog breed'
              />
            </figure>
            {/* </div> */}
          </div>

          {/* Close Button */}
          <div className='text-white fixed bottom-10 border-2 rounded-full p-5 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          {/* </div> */}
        </>
      )}
    </>
  )
}
