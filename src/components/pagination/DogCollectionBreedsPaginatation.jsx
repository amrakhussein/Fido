
const Pagination = ({
    collection: totalImgs,
    pageSize: ImgsPerPage,
    onPageChange,
    currentPage,
  }) => {

    
    // useEffect(() => {
    //     if (totalImgs) {

      // const numberOfPages = collection / pageSize
      const numberOfPages = Math.ceil(totalImgs / ImgsPerPage);
      
      if (!numberOfPages || numberOfPages === 1) return null;
      
    
      // total number of pages
      const pages = [...Array(numberOfPages+1).keys()].slice(1)
      
      
        // }
    // }, [totalImgs])
    return (
      <nav className="px-10 ">
        <ul className="flex justify-cenfter py-6 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-cyan-100">
          {

            pages?.map((page, idx) => {
              return (
                
                <li
                key={idx}
                className={
                  page === currentPage ? 'bg-cyan-500  ' : ''
                }
                >
                <a  className=" cursor-pointer bg-cyan-50 border-cyan-500 text-cyan-600 mx-1 h-8 w-10 inline-flex items-center justify-center py-2d border text-sm font-medium" onClick={() => onPageChange(page)}>
                  {page}
                </a>
  
              </li>
            );
          })}
          
     
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  