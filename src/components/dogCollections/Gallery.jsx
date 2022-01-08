import { useState, useEffect } from 'react';
import Image from './Image';
// import Pagination from '../../pagination/galleryPagination';
// import { paginate } from '../../../hooks/usePagination';
import { useFetch } from '../../hooks/useFetch';

export default function Gallery() {
  const url = 'https://api.thedogapi.com/v1/images/search?limit=50';
  const { dataState, loading, error } = useFetch(url);
  console.log('test:::::', dataState, loading, error);

  // if (loading) return <h5>loading...</h5>;
  // if (error) return <h3>{error}</h3>;

  const imgCount = dataState.length;
  console.log('count', imgCount);
  let imgSrcs = dataState.map((src) => src.url);
  console.log('imgSrcs:::@', imgSrcs);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setPageSize] = useState(4);
  // const [collection, setCollection] = useState();
  // useEffect(() => {
  //   setImgs([...imgLinks]);
  // }, []);

  // const handlePageChange = (page) => setCurrentPage(page);
  // const gallery = paginate(imgs, currentPage, pageSize);
  return (
    <>
      <Image imgSrcs={imgSrcs} />
      {/* <Pagination
        collection={imgCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      /> */}
    </>
  );
}
