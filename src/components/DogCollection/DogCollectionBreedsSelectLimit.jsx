import { useState } from 'react'

export default function DogCollectionBreedsSelectLimit({
  setPageSize,
  imgSrcs,
}) {
  console.log('imgSrcs: dddddd', imgSrcs)
  const breedsRangeLimit = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  const handleChange = (e) => {
    console.log('option change::::::::::::::::::::::::', e.target.innerText)
    setPageSize(Number(e.target.innerText))
  }

  const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <section
        className={`${imgSrcs.length > 0 ? 'block ml-20 mt-5' : 'hidden'} `}
      >
        <article className='relative w-4d0  inline-block group'>
          <button
            onClick={() => setDropdown(!dropdown)}
            className='flex  bg-blue-400 px-4 py-1 rounded-tl-3xl rounded-br-3xl text-cyan-50 font-mono font-semibold italic  inline-block'
            disabled={true}
          >
            <span className='pr-2'>Specify range per page</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <ul
            className={` absolute group-hover:block rounded-lg pt-1 w-full  hidden cursor-pointer h-48 ... overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100 ${
              dropdown ? 'group-hover:block' : ''
            }`}
          >
            {breedsRangeLimit.map((option) => (
              <li
                className='text-center block py-2 pl-2 pr-5 text-cyan-900 bg-blue-300 hover:bg-cyan-700 hover:text-white'
                onClick={handleChange}
              >
                {option}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}
