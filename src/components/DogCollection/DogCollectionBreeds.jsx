import { useState } from 'react'
import { usePagination } from '../../hooks/usePagination'
import {
  useFetchDogBreedsQuery,
  useFetchDogBreedsSelectedQuery,
} from '../../store/features/dogApi.slice'
import Pagination from '../pagination/DogCollectionBreedsPaginatation'
import DogCollectionBreedsGallery from './DogCollectionBreedsGallery'
// import { useFetch } from '../../hooks/useFetch';

export default function DogCollectionBreeds() {
  const handleClick = (e) => {
    return null
  }

  console.log('data: ', useFetchDogBreedsQuery())
  const { data: breeds = [] } = useFetchDogBreedsQuery()
  const { data: breedsSelected = '' } = useFetchDogBreedsSelectedQuery()

  // const [selectBreed, setSelectBreed] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  // const [collection, setCollection] = useState(null);

  const handlePageChange = (page) => setCurrentPage(page)

  const imgCount = breeds.length
  console.log('count', imgCount)
  // let imgSrcs = breedsSelected.map((src) => src.url)
  // console.log('imgSrcs:::@', imgSrcs);

  // const gallery = usePagination(imgSrcs, currentPage, pageSize)
  // console.log('gallery: ', gallery)
  const gallery = ''

  return (
    <>
      <header>
        <h2>Choose a dog breed</h2>
        <ul className='space-x-4'>
          {Array.isArray(breeds) &&
            breeds.map((li, idx) => (
              <li
                key={idx}
                className='inline-flex px-4 py-2 rounded-full text-secondary bg-accent  font-semibold text-sm  align-center w-max'
                onClick={handleClick}
              >
                {li}
              </li>
            ))}
        </ul>
      </header>
      {/* <DogCollectionBreedsGallery imgSrcs={gallery} /> */}
      <Pagination
        collection={imgCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}
