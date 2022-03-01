import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchDogImgsQuery } from '../../store/features/dogApi.slice';
// import { useFetch } from '../../hooks/useFetch';

export default function Breeds() {
    const {data =[], isFetching} = useFetchDogImgsQuery(20)
    console.log('data: ', data);
    // const breeds = useSelector((state) => state.)

    // const [selectBreed, setSelectBreed] = useState('')
    // const [dogImg, setDogImg] = useState('')
    // const [breed, setBreed] = useState('')
    
  const loadByBreed = async (breed = 'vizsla') => {
    if (breed != 'Choose a dog breed') {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      console.log('data.message::', data);
      return data
    }
  }
  return (
      <>
      <pre>
      hello
      </pre>
    </>
  )
}

