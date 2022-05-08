import { useEffect, useState } from 'react'
import { usePagination } from '../../hooks/usePagination'
import {
  useFetchDogBreedsQuery,
  useFetchDogBreedsSelectedQuery,
} from '../../store/features/dogApi.slice'
import Pagination from '../pagination/DogCollectionBreedsPaginatation'
import DogCollectionBreedsGallery from './DogCollectionBreedsGallery'
import DogCollectionBreedsSelectLimit from './DogCollectionBreedsSelectLimit'
// import { useFetch } from '../../hooks/useFetch';

export default function DogCollectionBreeds() {
  const [selectBreed, setSelectBreed] = useState('')
  const [imgCount, setImgCount] = useState(undefined)

  const [skip, setSkip] = useState(true)

  
  const {
    data: breeds,
    isLoading,
    isSuccess,
    isError: breedsError,
    isFetching: breedsIsFetching,
  } = useFetchDogBreedsQuery()
  const {
    data: breedsSelected,
    isLoading: selectedLoading,
    isSuccess: selectedSuccess,
    isError: selectedError,
    isFetching: selectedIsFetching,
  } = useFetchDogBreedsSelectedQuery(selectBreed, {
    skip: skip,
  })
  // 
  // 

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [collection, setCollection] = useState(null)

  const handlePageChange = (page) => setCurrentPage(page)
  const handleClick = (e) => {
    setSkip(!skip)
    setSelectBreed(e.target.dataset.selectedBreed)
  }

  useEffect(() => {
    if (!selectedLoading) {
      

      setImgCount(breedsSelected?.message?.length)
      
      // 

      const gallery = usePagination(
        breedsSelected?.message || [],
        currentPage,
        pageSize
      )
      setCollection(gallery)
      
      
    }
  }, [breedsSelected?.message, currentPage, pageSize])

  

  // let imgSrcs = breedsSelected.map((src) => src.url)
  // 

  if (breedsIsFetching || selectedIsFetching)
    return <h3 className='pl-2'>loading...</h3>
  if (breedsError || selectedError)
    return <h3 className='pl-2'>something unusal has occured...</h3>

  // if (selectedIsFetching) return <h3 className='pl-2'>loading...</h3>
  // if (selectedError) return <h3 className='pl-2'>something unusal has occured...</h3>

  return (
    <>
      <header className='mt-8 mx-20 flex flex-col justify-betweeny space-y-3'>
        <h2 className='text-3xl  text-cyan-600 font-bold '>
          Choose a dog breed
        </h2>

        <ul className='cursor-pointer w-[70%] h-24   space-x-4 space-y-2  overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100'>
          {Array.isArray(breeds.message) &&
            breeds.message.map((data, idx) => (
              <li
                key={idx}
                className=' text-white flex-shrink-0 inline-block px-2 py-1 rounded-full text-secondary bg-cyan-700  font-semibold text-sm  align-center'
                onClick={handleClick}
                data-selected-breed={data}
              >
                {data}
              </li>
            ))}
        </ul>
      </header>
      <DogCollectionBreedsSelectLimit
        imgSrcs={collection}
        setPageSize={setPageSize}
      />
      <Pagination
        collection={imgCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <DogCollectionBreedsGallery imgSrcs={collection} />
    </>
  )
}
