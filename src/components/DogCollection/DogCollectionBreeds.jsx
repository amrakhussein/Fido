import { useEffect, useState } from 'react'
import { usePagination } from '../../hooks/usePagination'
import {
  useFetchDogBreedsQuery,
  useFetchDogBreedsSelectedQuery,
} from '../../store/features/dogApi.slice'
import Pagination from '../pagination/DogCollectionBreedsPaginatation'
import DogCollectionBreedsGallery from './DogCollectionBreedsGallery'
// import { useFetch } from '../../hooks/useFetch';

export default function DogCollectionBreeds() {
 
  const [selectBreed, setSelectBreed] = useState('')
  const [imgCount, setImgCount] = useState(undefined)

  // console.log('data: ', useFetchDogBreedsQuery())
  const { data: breeds , isLoading, isSuccess, isError, isFetching  } = useFetchDogBreedsQuery()
  const { data: breedsSelected , isLoading: selectedLoading, isSuccess: selectedSuccess, isError: selectedError, isFetching: selectedFetched } = useFetchDogBreedsSelectedQuery(selectBreed)
  // console.log('breedsSelectedDATA: ', breedsSelected);
  // console.log('breeds: ', breeds.message);


  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)
  const [collection, setCollection] = useState(null);

  const handlePageChange = (page) => setCurrentPage(page)
  const handleClick =  (e) =>{
    setSelectBreed(e.target.dataset.selectedBreed)
  }

  useEffect(() => {
  if (!selectedLoading) {
    console.log('selectedLoading: ', selectedLoading);

    setImgCount(breedsSelected?.message?.length)
    console.log('breedsSelected?.message: ', breedsSelected?.message);
    // console.log('count', imgCount)
    
      const gallery = usePagination(breedsSelected?.message || [], currentPage, pageSize)
      setCollection(gallery)
      console.log('gallery: ', gallery)
      console.log('c: ', collection)
  } 

  }, [breedsSelected?.message, currentPage])

  console.log('test', imgCount)

  // let imgSrcs = breedsSelected.map((src) => src.url)
  // console.log('imgSrcs:::@', imgSrcs);

  if (isFetching) return <h3 className='pl-2'>loading...</h3>
  if (selectedFetched) return <h3 className='pl-2'>loading...</h3>

  return (
    <>
      <header className='mt-8 mx-20 flex justify-between flex-gfrow  '>
        <h2 className='text-3xl py-2 text-cyan-600 font-semibold '>Choose a dog breed</h2>


        <ul className='cursor-pointer w-[70%] h-24   space-x-4 space-y-2  overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100'> 
          {Array.isArray(breeds.message) &&
            breeds.message.map((data, idx) => (
              <li
              key={idx}
              className=' text-white flex-shrink-0 inline-block px-2 py-1 rounded-full text-secondary bg-cyan-700  font-semibold text-sm  align-center'
                onClick={ handleClick}
                data-selected-breed={data}
                >
                {data}
              </li>
            ))}
         </ul> 



      </header>
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
